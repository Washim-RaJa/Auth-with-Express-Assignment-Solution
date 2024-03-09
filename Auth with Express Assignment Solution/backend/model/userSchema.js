const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const JWT = require('jsonwebtoken');
const crypto = require('crypto');

const userSchema = new mongoose.Schema({
    name: {
        type: String, required: true
    },
    email: {
        type: String, required: true
    },
    password: {
        type: String, required: true, select: false
    },
    bio: {
        type: String, required: true
    },
    username: {
        type: String, required: true
    },
    forgotPasswordToken: { type: String },
    forgotPasswordExpiryDate: { type: Date },
},
{ timeseries: true}
);

userSchema.methods = {
    jwtToken() {
        return JWT.sign({id: this._id, username: this.username}, process.env.SECRET, {expiresIn: 24*60*60*1000});
    },
    getForgotPasswordToken(){
        const forgotToken = crypto.randomBytes(20).toString('hex');
        this.forgotPasswordToken = crypto.createHash('sha256')
                                        .update(forgotToken)
                                        .digest('hex');
        this.forgotPasswordExpiryDate = Date.now() + 20 * 60 * 1000
        return forgotToken
    }
}

userSchema.pre('save', async function(next){
    if(!this.isModified('password')) return next();
    this.password = await bcrypt.hash(this.password, 12);
    return next();
})


const userModel = mongoose.model('user', userSchema);

module.exports = userModel;