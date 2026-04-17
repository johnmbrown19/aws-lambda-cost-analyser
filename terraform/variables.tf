variable "aws_region" {
  type    = string
  default = "eu-west-2"
}

variable "function_name" {
  type    = string
  default = "aws-lambda-cost-analyser"
}

variable "threshold_amount" {
  type    = number
  default = 100
}

variable "lambda_zip_path" {
  type    = string
  default = "./build/lambda.zip"
}
