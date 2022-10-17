export interface FieldError {
    message: string
}

export interface FormDataError {
    [key: string]: FieldError
}
