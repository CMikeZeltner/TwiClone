


//Checks if the (unencryped) password is between 8 and 16 characters
const validatePassword = (req, res, next) => {
    const pWord = req.body.formData.password
    if(pWord.length < 8 || pWord.length > 16){
        throw new Error('Invalid password')
    }
    
    next()
}


//Checks to see if username is not restricted 
const validateUsername = (req, res, next) => {
    const userN = req.body.formData.userName
    console.log(req.body.formData.userName)
    if(userN.toLowerCase() == 'login' || 
    userN.toLowerCase() == 'home' || 
    userN.toLowerCase() == 'register' || 
    userN.toLowerCase() == 'logout'){
        throw new Error('Restricted username')
    }

    next()

    
}


module.exports = {
    validatePassword,
    validateUsername
}