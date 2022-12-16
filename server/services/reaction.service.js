import Reaction from "../models/Reaction.js"
class ReactionService {

    async saveReaction(user, post) {
        try {
            const reaction = await Reaction.create({ user, post })
            return reaction
        } catch (err) {
            return err
        }
    }

    async updateReaction(postId, userId) {
        try {
            const reaction = await Reaction.findById(postId)
            const { isLike } = reaction

            const updateReaction = await Reaction.findByIdAndUpdate(postId, { isLike: !isLike, user: userId })
            return updateReaction
        } catch (err) {
            return err
        }
    }
    async getReaction(id) {
        try {
            const reaction = await Reaction.findById(id)
            return reaction
        } catch (err) {
            return err
        }
    }

}

const reactionService = new ReactionService()

export { reactionService }