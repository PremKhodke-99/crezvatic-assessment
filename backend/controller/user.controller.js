const User = require('../model/User.model');
const bcrypt = require('bcryptjs');

const registerUser = async (req, res) => {
    const { name, email, password } = req.body;

    try {
        const userAlreadyExist = await User.findOne({ email });
        if (userAlreadyExist) {
            return res.send({
                success: false,
                message: "User already exists!"
            });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = new User({
            name,
            email,
            password: hashedPassword
        });

        await newUser.save();

        return res.status(201).send({
            success: true,
            message: "User registered successfully"
        })

    } catch (error) {
        console.error("Error occured in registration", error);
        res.send({
            success: false,
            message: "Something went wrong! Please try again later.",
        })
    }
}

const loginUser = async (req, res) => {
    const { email, password } = req.body;

    try {
        const user = await User.findOne({ email });
        if (!user) {
            return res.send({
                success: false,
                message: "Email is not registered"
            })
        }

        const isPasswordCorrect = await bcrypt.compare(password, user.password);
        if (!isPasswordCorrect) {
            return res.send({
                success: false,
                message: "Incorrect Password!"
            });
        }

        return res.status(200).send({
            success: true,
            message: "Login Successful",
            user
        })


    } catch (error) {
        console.error("Error occured in login", error);
        res.send({
            success: false,
            message: "Something went wrong! Please try again later.",
        })
    }
}


module.exports = {
    registerUser,
    loginUser
}