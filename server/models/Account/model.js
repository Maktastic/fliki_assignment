import mongoose from "mongoose";
import crypto from "crypto";

const AccountModel = new mongoose.Schema({
    email: {
        type : String,
        required: true
    },
    
    password: {
        type: String,
        required: true
    }
})

AccountModel.pre("save", async function(next) {
    // don't modify hash if its modified first time
    if (!this.isModified('password')) return next();

    // hash password before saving
    try {
        this.password = crypto.createHash('sha256').update(this.password).digest('hex');
        next();
    } catch (err) {
        next(err);
    }
})


const Account = mongoose.model('account', AccountModel)
export default Account