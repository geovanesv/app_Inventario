const mongoose = require("mongoose");
const uri = "mongodb+srv://geovane:OWOhDszdmQ0ZGCz9@cluster0.kgl3e2i.mongodb.net/?retryWrites=true&w=majority";



function main() {
    mongoose.connect(uri).then(() => {
        console.log("MongoDB conectado com sucesso!")
    
    }).catch((err) => {
        console.log("Error: ", err)
    })
}

module.exports = { main };