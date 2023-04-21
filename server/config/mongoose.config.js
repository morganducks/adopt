const mongoose = require('mongoose');

const petDB = "petDB";

mongoose.connect("mongodb://morganducks.github.io/adopt/" + petDB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

.then(() => {
    console.log("you connected to the " + petDB)
})
.catch((err) => {
console.log("There was an error connecting to " + petDB)
console.log(err)
})