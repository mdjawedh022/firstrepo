const mongoose=require("mongoose");

const main=async()=>{
try{
    const connection=await mongoose.connect("mongodb://127.0.0.1:27017/web24nem")
    console.log("connet tom DB")
    // console.log("1")
    
    //this is first way to insert data in database one user and also we can insert many users.
  await UserModel.insertMany([{name:"jawed",age:'23',city:"Darbhnage"}])

  //constructor function using insert one user in database
  //this is another way to insert 
//    const student = new studentModel({
//         name: "Siya",
//         age:25,
//         city: "Goa"
//     })
//     await student.save()

 // Read
    // const user=await UserModel.find({$and:[{age:{$gte:22}},{age:{$lte:30}}]})
    // console.log(user)


    //delete
    await UserModel.deleteMany({name:'jawed'});

    connection.disconnect();
} catch(err){
    console.log(err)
}
}
main()

// Creating structure of the data that i want to store in database
const userSchema=mongoose.Schema({
    name:{type: String,required: true},
    age:Number,
    city:String
},
{
  versionKey: false,
}
)

// Creating 3d model of the blueprint that i want to store in db
const UserModel=model.mongoose("user",userSchema)

// connection
// structure
// validating