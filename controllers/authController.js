const { User } = require("../models");

const {
   sendSuccsessResponse,
   sendErrorResponse,
} = require("../_util/sendResponse");
const { hash, compareHash } = require("../_util/hash");
const { generateToken } = require("../_util/token");

const authController = {};

authController.register = async (req, res) => {
   const { name, email, password } = req.body;

   if (password.length < 8) {
      return sendErrorResponse(
         res,
         400,
         "Password must be larger than 8 characters"
      );
   }

   const encryptedPassword = hash(password);

   const newUser = {
      name,
      email,
      password: encryptedPassword,
   };

   try {
      await User.create(newUser);
      sendSuccsessResponse(res, 201, "User registered succsessfully");
   } catch (error) {
      sendErrorResponse(res, 500, "Error creating user", error);
   }
};

authController.login = async (req, res) => {
   const { email, password } = req.body;

   if (!email || !password) {
      return sendErrorResponse(res, 400, "email and password requiered");
   }

   try {
      const user = await User.findOne({ email: email });

      if (!user) {
         return sendErrorResponse(res, 404, "User's email not exist");
      }
      const isValidPassword = compareHash(password, user.password);

      if (!isValidPassword) {
         return sendErrorResponse(res, 401, "Bad credentials");
      }

      const token = generateToken({ user_id: user._id, user_role: user.role });

      sendSuccsessResponse(res, 200, {
         message: "User logged succesfully",
         token,
         role: user.role,
      });
   } catch (error) {
      sendErrorResponse(res, 500, "User login failed", error);
   }
};
module.exports = authController;
