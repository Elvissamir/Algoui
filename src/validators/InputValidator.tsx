class InputValidatorHandler {
    isValidNumber(input: string) {
        const inumber = parseInt(input)

        if (isNaN(inumber)) return false

        return true
    }
}

const InputValidator = new InputValidatorHandler()

export default InputValidator