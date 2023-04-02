const mongoose=require("mongoose")

const connection=mongoose.connect("mongodb+srv://prabhat:prabhat@cluster0.nob5hjt.mongodb.net/bestbuy?retryWrites=true&w=majority")

module.exports={
    connection
}