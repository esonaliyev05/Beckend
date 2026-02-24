const {Schema, model} = require('mongoose')

const postSchema = new Schema({
    title: {type: String, require: true},
    body: {type: String, require: true},
    picture: { type: String }
    
    

})

module.exports = model('Post' , postSchema)




