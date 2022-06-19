const express = require('express')
const router = express.Router()
const {registerUser, loginUser, logoutUser, test} = require('../controllers/userController')
const {validatePassword} = require('../middleware/registerMiddleware')


router.route('/register') 
.post(validatePassword, registerUser)

router.route('/login') 
.post(loginUser)


router.get('/test1', (req, res) => {
    console.log(req.body)
})



// router.get('/:userName', (req, res) => {
//     res.send('asdasd')
// })


module.exports = router