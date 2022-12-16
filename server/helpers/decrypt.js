import bcrypt from "bcrypt"

export const decrypt = async (password, hash) => {
    return await bcrypt.compare(password, hash)
}