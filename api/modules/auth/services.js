const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken')
const User = require('../../models/user');
const { registerValidation, loginValidation } = require('./validate');




/**
 *  API Register
 * @param {} data
 * @body data : username, name, email, password
 * 
 * Did validate, check username, email, create new user
 * 
 */

exports.register = async (data) => {
    let check = {
        phoneNumber: data.phoneNumber,
        password: data.password,
    }
    const checkValidate = await registerValidation(check);
    if (checkValidate.error) {
        return {
            error: "Validate Error",
            message: checkValidate.error
        }
    }
    const user = await User.findOne({ phoneNumber: data.phoneNumber });
    if (user) {
        return {
            message: "Phonenumber is exist. Please use other phonenumber",
            success: false,
        }
    }


    // hash password
    const salt = await bcrypt.genSalt(10);
    const hashPassword = await bcrypt.hash(data.password, salt);
    
    var text = "";
    var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  
    for (var i = 0; i < 6; i++)
      text += possible.charAt(Math.floor(Math.random() * possible.length));
    // create new user

    let newUser = await User.create({
        code: text,
        name: data.name,
        password: hashPassword,
        birth: data.birth,
        phoneNumber: data.phoneNumber,
        active: false,
    })

    return {
        newUser,
        success: true
    };
}

exports.checkVerifyCode = async (data) => {
    var user = await User.findOne({ phoneNumber: data.phoneNumber });
    if(user){
        if( data.code == user.code){
            const token = await jwt.sign({
                    _id: user._id,
                },
                process.env.TOKEN_SECRET
            );
            user.active = true;
            user.code = "";
            user.token.push(token);
            user.save()
            return {
                token: token,
                code: data.code,
                id: user._id,
                success: true,
                message: "Successful authentication"
            }
        } else {
            return {
                success: false,
                message: "Wrong code !!!"
            }
        }
    } else {
            return {
                succes: false,
                message: "Unregistered phone number"
            }
    }
}

exports.login = async (data) => {

    // check validate data
    const checkValidate = loginValidation(data);
    if (checkValidate.error) {
        return {
            status: 400,
            message: "validation error",
            error: checkValidate.error
        }
    }

    //check username, password

    const user = await User.findOne({ phoneNumber: data.phoneNumber });
    console.log(user);
    if (!user) {
        return {
            status: 404,
            message: "phone number or password is wrong"
        }
    }
    const checkPassword = await bcrypt.compare(data.password, user.password);
    if (checkPassword) {
        const token = await jwt.sign({
            _id: user._id,
            },
            process.env.TOKEN_SECRET
        );

        user.token.push(token);
        user.save()

        let payload = {
            id: user._id,
            active: user.active,
            name: user.name,
            token: token,
        };

        return {
            payload: payload,
            success: true,
        }
    }
    else {
        return {
            status: 400,
            message: "password is wrong"
        }
    }

}

exports.logout = async(data) => {
    var user = await User.findById(data.id);
    var position = await user.token.indexOf(data.token);
    user.token.splice(position, 1);
    user.save();
    return user;
}