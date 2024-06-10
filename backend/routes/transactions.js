const { addExpense, getExpense, deleteExpense } = require('../controllers/expense')
const { addincome, deleteIncomes, getIncomes} = require('../controllers/income')
const { addlogin, getLogin, deleteLogin } = require('../controllers/login')

const router = require('express').Router()


router.post('/add-income', addincome)
router.get('/get-income', getIncomes)
router.delete('/delete-income/:id' , deleteIncomes)

router.post('/add-expense', addExpense)
router.get('/get-expense', getExpense)
router.delete('/delete-expense/:id' , deleteExpense)

router.post('/add-login', addlogin)
router.get('/get-login', getLogin)
router.delete('/delete-login/:id' , deleteLogin)


module.exports = router 