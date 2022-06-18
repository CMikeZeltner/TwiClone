


//Checks if the (unencryped) password is between 8 and 16 characters
const validatePassword = (req, res, next) => {
    const {password} = req.body
    if(password.length < 8 || password.length > 16){
        throw new Error('Invalid password')
    }
    next()
}


module.exports = {
    validatePassword
}