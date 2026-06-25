locals {
  environment  = "staging"
  account_id   = "827486962587"
  region       = "us-east-1"
  service_name = "kueski-design-system"
  tags         = {
    Repository     = "https://github.com/kueski-dev/kueski-design-system"
    Owner          = "web"
    Environment    = local.environment
    CostCenter     = "SharedExperience"
    Product        = "Shared"
    Service        = local.service_name
    Classification = "K-Interno"
  }
}

terraform {
  required_version = ">= 1.11.4, < 2.0.0"

  backend "s3" {
    dynamodb_table = "terraform-development-state-lock"
    bucket         = "kueski-development-terraform-states"
    key            = "kueski-design-system/state"
    region         = "us-east-1"
    encrypt        = true
  }
}

module "iamrole" {
  source       = "git@github.com:kueski-dev/terraform-aws-iam.git?ref=v2"
  environment  = local.environment
  account_id   = local.account_id
  region       = local.region
  service_name = local.service_name
  tags = local.tags

  # https://kueski.atlassian.net/l/c/rR1v6z0V
  oidc_provider_url = "https://oidc.eks.us-east-1.amazonaws.com/id/B7981E819F27691079AA259597405650"
}

module "lambda" {
  source = "../modules/lambda"
  publish       = true
  runtime = "nodejs18.x"
  handler       = "sanitize_uri.handler"
  account_id  = local.account_id
  filename      = "sanitize_uri.mjs"
  zipped_filename = "sanitize_uri.zip"
  service_name = local.service_name
  region      = local.region
  environment = local.environment
  tags        = local.tags
}

module "cloudfront" {
  source = "git@github.com:kueski-dev/terraform-aws-cloudfront.git?ref=v2"

  account_id  = local.account_id
  environment = local.environment
  region      = local.region
  tags        = local.tags

  create_bucket               = true
  bucket_name                 = "${local.environment}-${local.service_name}"
  bucket_regional_domain_name = "${local.environment}-${local.service_name}.s3.amazonaws.com"
  service_iam_role_arn        = module.iamrole.iam_role_arn
  cloudfront_domain           = "designsystem.kueski.codes"
  parent_zone_id              = "Z20HYCC9BB6P9F"
  acm_certificate_arn         = "arn:aws:acm:us-east-1:827486962587:certificate/d3b1ceb6-92ae-474b-b147-6acf689b7bfa"
  cloudfront_s3_route         = "/*"
  origin_request_lambda_edge_arn = module.lambda.lambda_qualified_arn
}
