import Tags from "../models/Tags.js"
class TagsService {

    async saveTags(postId, tagsData) {

        try {
            const tags = await Tags.create({ tags: tagsData, post: postId })
            console.log(tags)
            return tags.tags
        } catch (err) {
            return err
        }

    }
    async getTags(postId) {

        try {
            const tags = await Tags.findOne({ post: postId })
            return tags
        } catch (err) {
            return err
        }

    }
}

const tagsService = new TagsService()

export { tagsService }