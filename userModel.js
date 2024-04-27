const moongoose = require("mongoose");
const userSchema = new moongoose.Schema(
    {
        name: {
            type: String
        },
        email:{
            type: String
        },
        password: {
            type: String
        }
    },
    {
        timestamps:true,
        versionKey: false,
    }
)

const ModelUser = moongoose.model("users", userSchema);
module.exports = ModelUser;2