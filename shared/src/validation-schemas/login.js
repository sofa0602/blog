import joi from "joi"
import { UserPayload } from "../enums/user/user-payload.enum.js"
import { UserValidationMessage } from "../enums/validation/user-validation-message.enum.js"
import { UserValidationRule } from "../enums/validation/user-validation-rule.enum.js"

const schemaLogin = joi.object({
    [UserPayload.EMAIL]: joi.string()
        .trim()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
            'string.email': UserValidationMessage.EMAIL_WRONG,
            'string.empty': UserValidationMessage.EMAIL_REQUIRE
        }),
    [UserPayload.PASSWORD]: joi.string()
        .trim()
        .min(UserValidationRule.PASSWORD_MIN_LENGTH)
        .max(UserValidationRule.PASSWORD_MAX_LENGTH)
        .required()
        .messages({
            'string.empty': UserValidationMessage.PASSWORD_REQUIRE,
            'string.length': UserValidationMessage.PASSWORD_LENGTH,
        })
})
export { schemaLogin }