const router = require('express').Router();
const { getAllUsers, getUserById, /*searchInUsers,*/ createNewUser, deleteUser, updateUser, updateIsBusinness } = require('../controllers/usersControllers');
const { mustLogin, allowedRoles } = require('../controllers/authControllers');

//  base path = "/api/users"

router.get('/', mustLogin, allowedRoles(['admin']), getAllUsers)
router.get('/:id', mustLogin, allowedRoles(["admin", "own_user"]), getUserById)
router.get('/:id', mustLogin, allowedRoles(["own_user"]), getUserById)
//router.post('/search', searchInUsers)
router.post('/', createNewUser)
router.delete('/:id', mustLogin, allowedRoles(["admin", "own_user"]), deleteUser)
router.patch('/:id', mustLogin, allowedRoles(["own_user"]), updateIsBusinness)

//##put method for update user
router.put('/:id', mustLogin, allowedRoles(["own_user"]), updateUser)


module.exports = router;