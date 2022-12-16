export class PostDto {
    id;
    title;
    text;
    viewers;
    userId;
    createdAt;
    updatedAt;


    constructor(model, tags = [], reaction) {
        this.id = model._id;
        this.title = model.title;
        this.text = model.text;
        this.viewers = model.viewers;
        this.userId = model.user;
        this.createdAt = model.createdAt;
        this.updatedAt = model.updatedAt;
    }
}
