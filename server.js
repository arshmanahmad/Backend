// import http from 'node:http';

// const server = http.createServer((request, response) => {
//     if (request.url === "/") {
//         console.log("Hi there");
//     }
//     else if (request.url === "/login") {
//         console.log("\login there");
//     }

// });

// server.listen(4000, () => {
//     console.log("Sever started at PORT 4000");
// })


// import express from 'express'
// import cors from "cors";
// import { connectDb } from './db/connectDB.js';
// import User from './models/user.model.js';

// const server = express()
// server.use(express.json())
// server.use(cors());

// const router = express.Router()

// connectDb()

// router.post("/login", (req, res) => {
//     const { password, email } = req.body


//     console.log(password, email);

//     res.json({
//         success: true,
//         message: "Login successfull"
//     })
// })

// router.post("/signUp", async (req, res) => {
//     const { name, email, password } = req.body

//     try {
//         const emailExists = await User.findOne({ email })

//         if (emailExists) {
//             throw new Error("Email Already taken")
//         }

//         const user = await User.create({ name, email, password })

//         res.json({ user })
//     } catch (e) {
//         res.status(405).json({
//             success: false,
//             message: e.message
//         })
//     }

// })

// server.use("/api", router)

// server.listen(4000, () => {
//     console.log("Server started at 4000")
// })
// asdasd