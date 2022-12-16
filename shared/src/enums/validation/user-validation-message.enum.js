import { UserValidationRule } from "./user-validation-rule.enum.js";
const UserValidationMessage = {
    USERNAME_REQUIRE: 'Username is required',
    USERNAME_LENGTH: `Username should be minimum ${UserValidationRule.USERNAME_MIN_LENGTH} and maximum ${UserValidationRule.USERNAME_MAX_LENGTH} `,
    EMAIL_REQUIRE: 'Email is required',
    EMAIL_WRONG: 'Email is wrong',
    PASSWORD_REQUIRE: 'Password is required',
    PASSWORD_LENGTH: `Pasword should be minimum ${UserValidationRule.PASSWORD_MIN_LENGTH} and maximum ${UserValidationRule.PASSWORD_MAX_LENGTH} `
}

export { UserValidationMessage }