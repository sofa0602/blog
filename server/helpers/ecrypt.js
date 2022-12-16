import bcrypt from "bcrypt"

export const encrypt = async (password, salt) => {
    return await bcrypt.hash(password, salt)
}