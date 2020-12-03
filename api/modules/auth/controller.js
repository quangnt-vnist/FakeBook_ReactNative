const AuthService = require('./services');

exports.register = async (req, res) => {
    try {
        console.log("====", req.body)
        const User = await AuthService.register(req.body);
        console.log(User);
        if (User.success) {
            res.status(200).json({
                success: true,
                message: ['register_success'],
                content: User
            })
        } else {
            res.status(400).json({
                success: false,
                message: User.message
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: ['register_faile'],
            content: error,
        })
    }
}

exports.checkVerifyCode = async (req, res) => {
    try {
        const User = await AuthService.checkVerifyCode(req.body);
        console.log(User);
        if (User.success) {
            res.status(200).json({
                success: true,
                message: ['check_verify_code_success'],
                content: User
            })
        } else {
            res.status(400).json({
                success: false,
                message: User.message
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: ['check_verify_code_faile'],
            content: error,
        })
    }
}


exports.login = async (req, res) => {
    try {
        console.log("req.body", req.body)
        const User = await AuthService.login(req.body);
        if (User.success) {
            res.status(200).json({
                success: true,
                message: ['login_success'],
                content: User
            })
        } else {
            res.status(400).json({
                success: false,
                message: User.message
            })
        }
    } catch (error) {
        res.status(400).json({
            success: false,
            message: ['login_faile'],
            content: error,
        })
    }
}


exports.logout = async(req, res) => {
    try {
        var logout = await AuthService.logout(req.body);
        res.status(200).json({
            success: true,
            messages: ['logout_success'],
        });
    } catch (error) {
        res.status(400).json({
            success: false,
            message: ['logout_faile'],
            content: error,
        });
    }
};