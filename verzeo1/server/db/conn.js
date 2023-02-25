const mongoose = require("mongoose");

const DB = process.env.DATABASE;

mongoose.connect(DB,{
    useNewUrlParser:true,
    useUnifiedTopology:true
}
)
.then(() =>console.log("data base connected")).catch((error) => console.log("error" + error.message));