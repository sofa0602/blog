import joi from "joi"
import { UserPayload } from "../enums/user/user-payload.enum.js"
import { UserValidationMessage } from "../enums/validation/user-validation-message.enum.js"
import { UserValidationRule } from "../enums/validation/user-validation-rule.enum.js"

const schemaRegistration = joi.object({
    [UserPayload.USERNAME]: joi.string()
        .trim()
        .min(UserValidationRule.USERNAME_MIN_LENGTH)
        .max(UserValidationRule.USERNAME_MAX_LENGTH)
        .required()
        .messages({
            'string.empty': UserValidationMessage.USERNAME_REQUIRE,
            'string.length': UserValidationMessage.USERNAME_LENGTH,
        }),
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
export { schemaRegistration }