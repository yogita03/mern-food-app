const mongoose = require('mongoose');

// const mongoURI = 'mongodb+srv://patilyogita408:mern123@cluster0.zav9gwh.mongodb.net/?retryWrites=true&w=majority'

const mongoURI = 'mongodb://patilyogita408:mern123@ac-tkltnnf-shard-00-00.zav9gwh.mongodb.net:27017,ac-tkltnnf-shard-00-01.zav9gwh.mongodb.net:27017,ac-tkltnnf-shard-00-02.zav9gwh.mongodb.net:27017/myfoodmern?ssl=true&replicaSet=atlas-syxpat-shard-0&authSource=admin&retryWrites=true&w=majority'

const mongoDB = async() => {
    
await mongoose.connect(mongoURI,{useNewUrlParser: true},(err,result)=>{
    if(err) console.log("...",err);
    else{
        console.log('connected successfully');

        const fetched_data =  mongoose.connection.db.collection("food_items");
      fetched_data.find({}).toArray(function( err, data){

        const food_Category =  mongoose.connection.db.collection("food_Category");
        food_Category.find({}).toArray(function (err,catData){
          if(err) console.log(err);
          else {
              global.food_items = data;
              global.food_Category = catData;
          }
        })
        // if(err) console.log(err);
        // else {
        //   global.food_items = data;
          // console.log(global.food_items)
        // };
      })
    }

});
    
}

module.exports = mongoDB;
