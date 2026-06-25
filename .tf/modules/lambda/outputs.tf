output "lambda_arn" {
  description = "The ARN of the lambda function"
  value       = aws_lambda_function.this.arn
}

output "lambda_qualified_arn" {
  description = "The qualified ARN of the lambda function"
  value       = aws_lambda_function.this.qualified_arn
}
