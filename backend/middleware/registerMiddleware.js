


//Checks if the (unencryped) password is between 8 and 16 characters
const validatePassword = (req, res, next) => {
    const {password} = req.body
    if(password.length < 8 || password.length > 16){
        throw new Error('Invalid password')
    }
    
    next()
}


//Checks to see if username is not restricted 
const validateUsername = (req, res, next) => {
    const {userName} = req.body
    if(userName === 'login' || userName === 'home' || 
    userName === 'register' || userName === 'logout'){
        throw new Error('Restricted username')
    }

    next()
}


module.exports = {
    validatePassword,
    validateUsername
}