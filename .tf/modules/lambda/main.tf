locals {
  base_name = "${var.environment}-${replace(var.service_name, "_", "-")}"

  lambda_policy = templatefile(
    "${path.module}/policies/${var.environment}/policy.json.tpl", {
      service_name       = var.service_name
      account_id         = var.account_id
      region             = var.region
      environment        = var.environment
  })

  lambda_role = templatefile(
    "${path.module}/policies/${var.environment}/role.json.tpl", {
      account_id  = var.account_id
      region      = var.region
      environment = var.environment
  })
}

resource "aws_iam_role" "this" {
  assume_role_policy = local.lambda_role
  name               = "${local.base_name}-role"
  tags               = var.tags
}

resource "aws_iam_role_policy" "this" {
  name   = "${local.base_name}-policy"
  policy = local.lambda_policy
  role   = aws_iam_role.this.id
}

data "archive_file" "lambda" {
  type        = "zip"
  source_file = var.filename
  output_path = var.zipped_filename
}

resource "aws_lambda_function" "this" {
  reserved_concurrent_executions = var.concurrency
  architectures                  = [var.architecture]
  filename                       = var.zipped_filename
  function_name                  = local.base_name
  handler                        = var.handler
  memory_size                    = var.memory_size
  role                           = aws_iam_role.this.arn
  runtime                        = var.runtime
  source_code_hash               = data.archive_file.lambda.output_base64sha256
  tags                           = var.tags
  timeout                        = var.timeout
  layers                         = var.layers
  publish                        = var.publish

  tracing_config {
    mode = "PassThrough"
  }
}

resource "aws_cloudwatch_log_group" "this" {
  name              = "/aws/lambda/${aws_lambda_function.this.function_name}"
  retention_in_days = var.retention_in_days
  tags              = var.tags
}