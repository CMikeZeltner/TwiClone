const express = require('express')
const router = express.Router()
const {registerUser, loginUser} = require('../controllers/userController')
const {validatePassword} = require('../middleware/registerMiddleware')



router.route('/register') 
.post(validatePassword, registerUser)

router.route('/login') 
.post(loginUser)







// router.get('/:userName', (req, res) => {
//     res.send('asdasd')
// })


module.exports = router