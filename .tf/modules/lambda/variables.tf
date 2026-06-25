variable "environment" {
  type = string
}

variable "region" {
  type    = string
  default = "us-east-1"
}

variable "account_id" {
  type = string
}

variable "service_name" {
  type = string
}

variable "retention_in_days" {
  type        = number
  description = "Amount of days to save logs"
  default     = 30
}

variable "runtime" {
  type        = string
  description = "The runtime of the Lambda Function"

  validation {
    condition = contains(
      [
        "nodejs18.x", "nodejs16.x", "nodejs14.x",
        "python3.9", "python3.8", "python3.7",
        "ruby2.7",
        "java11", "java8.al2", "java8",
        "go1.x"
      ],
      var.runtime
    )
    error_message = "Allowed values for runtime are \"nodejs14.x\", \"nodejs12.x\", \"nodejs10.x\", \"python3.9\", \"python3.8\", \"python3.7\", \"python3.6\", \"ruby2.7\", \"ruby2.6\", \"java11\", \"java8.al2\", \"java8\", \"go1.x\", \"dotnetcore3.1\", \"dotnetcore2.1\"."
  }
}

variable "timeout" {
  type        = number
  description = "The amount of time the Lambda Function has to run in seconds."
  default     = 3

  validation {
    condition     = var.timeout >= 1 && var.timeout <= 900
    error_message = "The value from timeout must be >= 1 and <= 900."
  }
}

variable "filename" {
  type        = string
  description = "The path to the function's source code."
}

variable "zipped_filename" {
  type        = string
  description = "The path to the function's deployment package within the local filesystem."
}

variable "handler" {
  type        = string
  description = "The function entrypoint in the code"
}

variable "memory_size" {
  type        = number
  description = "Amount of memory in MB the Lambda Function can use at runtime."
  default     = 128

  validation {
    condition     = var.memory_size >= 128 && var.memory_size <= 10240
    error_message = "The value from memory_size must be >= 128 and <= 10240."
  }
}

variable "architecture" {
  description = "The lambda CPU Architecture"
  type        = string
  default     = "x86_64"

  validation {
    condition = contains(
      [
        "x86_64", "arm64"
      ],
      var.architecture
    )
    error_message = "Allowed values for architecture are \"x86_64\", & \"arm64\"."
  }
}

variable "concurrency" {
  description = "The lambda concurrency limit"
  type        = number
  default     = -1
}

variable "tags" {
  description = "Tags to be applied to all resources"
  type        = map(any)
  default     = {}
}

variable "layers" {
  description = "The layers ARNs to add to lambda function"
  type        = list(any)
  default     = []
}

variable "publish" {
  description = "Whether to publish creation/change as new Lambda Function Version"
  type        = bool
  default     = false
}