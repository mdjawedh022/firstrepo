const mongoose = require("mongoose");

const main = async () => {
  try {
    const connection = await mongoose.connect(
      "mongodb://127.0.0.1:27017/backend"
    );
    console.log("connected to Database");
    // Create data
    // await studentModel.insertMany([{ name: "Ram", age: 21, city: "delhi" }]);
    // const student = new studentModel({
    //     name: "Siya",
    //     age:25,
    //     city: "Goa"
    // })
    // await student.save()

    // Read
    // const students=await studentModel.find({$and:[{age:{$gte:22}},{age:{$lte:30}}]})
    // console.log(students)
    await studentModel.deleteMany({
      $and: [{ age: { $gte: 22 } }, { age: { $lte: 30 } }],
    });
    // console.log(students)
    console.log("Deleted data");

    connection.disconnect();
    console.log("disconnected");
  } catch (err) {
    console.log(err);
  }
};

main();

// Creating structure of the data that i want to store in database
const studentSchema = mongoose.Schema(
  {
    name: { type: String, required: true },
    age: Number,
    city: String,
  },
  {
    versionKey: false,
  }
);

// Creating 3d model of the blueprint that i want to store in db
const studentModel = mongoose.model("student", studentSchema);

// connection
// structure
// validating
