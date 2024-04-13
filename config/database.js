const mongoose = require("mongoose");
// environment configuration se chizon ko leke aao aur load kardo 
require("dotenv").config();

const { MONGODB_URL } = process.env;

// here export and using the two methos of mongoose 
// connect method use newurlparser and useunified topology 
exports.connect = () => {
	mongoose
		.connect(MONGODB_URL, {
			//these both are just an object 
			useNewUrlparser: true,
			useUnifiedTopology: true,
		})
		.then(console.log(`DB Connection Success`))
		.catch((err) => {
			console.log(`DB Connection Failed`);
			console.log(err);
			process.exit(1);
		});
};
