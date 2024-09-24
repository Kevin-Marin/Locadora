import { Schema, model } from "mongoose";

const userSchema = new Schema({
    email: {
        type: String,
        required: true,
        unique: true
    },
    password: {
        type: String,
        required: true
    },
    nickname: {
        type: String,
        required: false,
    },
    role: {
        type: String,
        enum: ["USER", "ADMINISTRATOR"],
        default: "USER"
    }
});

userSchema.pre("save", () => {
    console.log("Antes de eu salvar")
})

const User = model("User", userSchema);

export default User;