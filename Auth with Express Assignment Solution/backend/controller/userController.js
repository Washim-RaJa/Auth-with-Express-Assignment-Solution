const userModel = require("../model/userSchema");
const bcrypt = require('bcrypt');


exports.userSignUp = async(req, res)=>{
    try {
        const newUser = await userModel.create(req.body);
        res.status(200).send({
            message: 'Sign Up Succcesful'
        })
    } catch (error) {
        res.status(501).send({message: error.message})
    }
}


exports.userLogIn = async(req, res)=>{
    const {username , password } = req.body;
    try {
        const getUserData = await userModel.findOne({username}).select('+password');
        if(getUserData && getUserData.username){
            const result = await bcrypt.compare(password, getUserData.password)
            if (result) {
                const token = await getUserData.jwtToken()
                const cookieOption = { maxAge: 24*60*60*1000, httpOnly: true}
                res.cookie("token", token, cookieOption)
                res.status(200).json({success: true, data: getUserData});
            } else {
                res.status(404).send({ message: "Incorrect Password, Try Again!"})
            }
        } else{
            res.status(404).send({msg:"No Account Found Associated with this username"})
        }
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}

exports.getUserDetails = async (req, res)=>{
    const {id, username} = req.user;
    try {
        const userData = await userModel.findOne({username});
        res.status(200).send({message: "Success", data: userData})
    } catch (error) {
        res.status(501).send({msg:error.message})
    }
}