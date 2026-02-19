const postMosel = require("../models/post.mosel");

class PostService {
    async create(post) {
        const newPost = await postMosel.create(post)
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