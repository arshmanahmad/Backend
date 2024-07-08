import mongoose from "mongoose"

const dbURI = "mongodb://localhost:27017/First-Connection"
// const dbURI = "mongodb://127.0.0.1:27017/First-Connection"
// const dbURI = "mongodb://127.0.0.1:27017/First-Connection"

export const connectDb = async () => {
    try {
        await mongoose.connect(dbURI)

        console.log(
            "Pinged your deployment. You successfully connected to MongoDB!"
        );
    } catch (e) {
        console.log(e);
    }
}