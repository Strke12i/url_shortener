import mongoose from "mongoose";

export class MongoConnection {
    public async connect(): Promise<void> {

        try {


            await mongoose.connect("mongodb://localhost:27017/node-mongoose",{useNewUrlParser: true,useUnifiedTopology: true})
            console.log("Database connected");

        } catch (error) {
            console.error(error.message);
            process.exit(1)
        }

    }
}