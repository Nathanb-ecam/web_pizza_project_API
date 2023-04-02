let express = require('express');
let router = express.Router();


let pizzaController = require('./controllers/pizzaController');
let chickenController = require('./controllers/chickenController');
let sauceController = require('./controllers/sauceController');
let extraController = require('./controllers/extraController');
let drinkController = require('./controllers/drinkController');
let menuController = require('./controllers/menuController');
let userController = require('./controllers/userController');


//chicken
router.get('/chicken/:id',chickenController.searchChicken);
router.get('/chickens/',chickenController.listChicken);
router.delete('/chicken/:id',chickenController.deleteChicken);
router.post('/chickens',chickenController.createChicken);


//sauce
router.get('/sauce/:id',sauceController.searchSauce);
router.get('/sauces/',sauceController.listSauce);
router.delete('/sauce/:id',sauceController.deleteSauce);
router.post('/sauces',sauceController.createSauce);


//extra
router.get('/extra/:id',extraController.searchExtra);
router.get('/extras/',extraController.listExtra);
router.delete('/extra/:id',extraController.deleteExtra);
router.post('/extras',extraController.createExtra);



// user
router.get('/users/',userController.listUsers);
router.get('/user/:id',userController.searchUser);
router.delete('/user/:id',userController.deleteUser);
router.post('/users',userController.createUser);

// drink
router.get('/drinks/',drinkController.listDrinks);
router.get('/drink/:id',drinkController.searchDrink);
router.delete('/drink/:id',drinkController.deleteDrink);
router.post('/drinks',drinkController.createDrink);

// menu
router.get('/menus/',menuController.listMenus);
router.get('/menu/:id',menuController.searchMenu);
router.delete('/menu/:id',menuController.deleteMenu);
router.post('/menus',menuController.createMenu);

// pizza
router.get('/pizzas/',pizzaController.listPizzas);
router.get('/pizza/:id',pizzaController.searchPizza);
router.delete('/pizza/:id',pizzaController.deletePizza);
router.post('/pizzas',pizzaController.createPizza);


module.exports = router;