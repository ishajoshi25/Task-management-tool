const app = require("./app");
const mongoose = require("mongoose");
const port = 5000;
const API = "mongodb+srv://ishajoshi:12345@cluster0.yjhn5hj.mongodb.net/userdata?retryWrites=true&w=majority/application"

mongoose.set('strictQuery', false);


async function main() {
    await mongoose.connect(API);
    console.log('connected to database');
    app.listen(port, () => console.log(`Server is live at PORT => ${port}`));
};
main();