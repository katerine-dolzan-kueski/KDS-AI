terraform {
  required_version = ">= 1.11.4, < 2.0.0"
  required_providers {
    aws = {
      source  = "hashicorp/aws"
      version = ">= 5.94.0 , <6.0.0"
    }
  }
}