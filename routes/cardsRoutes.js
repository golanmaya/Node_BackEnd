const router = require('express').Router();
const { getAllCards, getCardById, searchInCards, createNewCard, deleteCard, updateCard, getUserCards, likeCard } = require('../controllers/cardsControllers');
const { mustLogin, allowedRoles } = require('../controllers/authControllers');

//  base path = "/api/cards"

// PROTECTEC ROUTES:
// mustLogin:  the user must be logged in to view this content (any type of logged-in user)
// allowedRoles:   the user must also have ONE of the following roles (admin, business, ...)
router.get('/', getAllCards)
//##MY-CARDS
router.get('/my-cards', mustLogin, getUserCards);


// unprotected Routes :
router.get('/:id', getCardById)
router.post('/search', searchInCards)
router.post('/', mustLogin, allowedRoles(["business"]), createNewCard)
router.delete('/:id', mustLogin, deleteCard)
router.patch('/:id',mustLogin, likeCard)
router.put('/:id', mustLogin, updateCard)

module.exports = router;