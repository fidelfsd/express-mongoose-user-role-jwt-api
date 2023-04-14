const mongoose = require("mongoose");

const schema = new mongoose.Schema(
   {
      name: {
         type: String,
         require: true,
         match: /^[a-zA-Z]+(([',.-][a-zA-Z ])?[a-zA-Z]*)*$/g,
         minLength: 1,
      },
      email: {
         type: String,
         require: true,
         unique: true,
         lowercase: true, // Correo@CORREO.cOm  --> correo@correo.com
         match: /.+\@.+\..+/,
      },
      password: {
         type: String,
         require: true,
      },
      role: {
         type: String,
         enum: ["user", "admin"],
         default: "user",
      },
   },
   {
      timestamps: true,
      collection: "users",
   }
);

const User = mongoose.model("User", schema);

module.exports = User;
