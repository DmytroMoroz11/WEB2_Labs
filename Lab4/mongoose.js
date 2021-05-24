var mongoose=require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://Admin:Admin123@cluster0.2uk4c.mongodb.net/mydb?retryWrites=true&w=majority',  { useNewUrlParser: true } );
mongoose.set('useFindAndModify', false);
console.log("mongodb connect...")
module.exports=mongoose;
