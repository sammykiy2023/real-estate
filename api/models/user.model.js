import mongoose from "mongoose";

const userSchema = new mopngoose.Schema({
    username: {type: String,
                required: true,
                unique: true,
    },
    emai: {type: String,
                required: true,
                unique: true,
    },
    password: {type: String,
                required: true,
    }           
}, { timestamp: true });

const User = mongoose.model('User', userSchema);

export default User;