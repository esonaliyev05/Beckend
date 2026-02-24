const postMosel = require("../models/post.mosel");
const fileService = require("./file.service");

class PostService {
    async create(post , picture) {
        const fileName = fileService.save(picture)
        const newPost = await postMosel.create({...post , picture: fileName})
        return newPost
        
    }
    async getAll() {
        const allPost = await postMosel.find()
        return allPost
        
    }

    async delete(id) {
        const post = await postMosel.findByIdAndDelete(id)
         return post

     }

    async edit(post, id) {

        if(!id) {
        throw new Error('Id not found')
    }
     
    const isPost = await this.getOne(id) 
    if (!isPost) {
        throw new Error('Post with existing ID not found')

    }
    const updatedData = await postModel.findByIdAndUpdate(id , post )
      return updatedData
   }

   async getOne(id) {
    const post = await postModel.findById(id)

    return post 

   }
     
}

module.exports = new PostService()