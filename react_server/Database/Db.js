const mongoose = require("mongoose")

// TODO: move to .env/sec
// TODO: use async await instead of then/catch
function initializeDBConnection() {
  // Connecting to DB
  mongoose.connect("mongodb+srv://Anjali_Rohira:anjali@rect-quiz-db.cazgp.mongodb.net/test", {
    useCreateIndex: true,useUnifiedTopology: true, useNewUrlParser: true
  }) 
    .then(() => console.log("DB successfully connected"))
    .catch(error => console.error("mongoose connection failed...", error))
}

module.exports = { initializeDBConnection }