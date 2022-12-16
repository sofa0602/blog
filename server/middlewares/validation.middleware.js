import { ApiError } from "../exception/api-error.js";
const validation = (schema) => {
    return async (req, res, next) => {

        try {
            const { error } = await schema.validate(req.body);

            if (error) {
                const { details } = error;
                const validationMessage = details.map(i => i.message).join(',');
                next(ApiError.BadRequest(validationMessage))
            }
            next()
        } catch (err) {
            return next(err)
        }
    }
}
export { validation }