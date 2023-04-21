let express = require('express');
let router = express.Router();


let pizzaController = require('./controllers/pizzaController');
let chickenController = require('./controllers/chickenController');
let sauceController = require('./controllers/sauceController');
let extraController = require('./controllers/extraController');
let orderextraController = require('./controllers/orderExtraController');
let drinkController = require('./controllers/drinkController');
let menuController = require('./controllers/menuController');
let orderController = require('./controllers/orderController');
let elementOrderController = require('./controllers/elementOrderController');
let userController = require('./controllers/userController');
let authController = require('./controllers/authController');


//authentification
router.post('/login', authController.generateToken)






//chicken
router.get('/chicken/:id',chickenController.searchChicken);
router.get('/chickens/',chickenController.listChicken);
router.delete('/chicken/:id',authController.isAuthorized,chickenController.deleteChicken);
router.post('/chickens',authController.isAuthorized,chickenController.createChicken);


//sauce
router.get('/sauce/:id',sauceController.searchSauce);
router.get('/sauces/',sauceController.listSauce);
router.delete('/sauce/:id',authController.isAuthorized,sauceController.deleteSauce);
router.post('/sauces',authController.isAuthorized,sauceController.createSauce);


//extra : not working with desserts in app's, extra's can only be Pizza,Drink,CHicken or Sauce
// router.get('/extra/:id',extraController.searchExtra);
// router.get('/extras/',extraController.listExtra);
// router.delete('/extra/:id',authController.isAuthorized,extraController.deleteExtra);
// router.post('/extras',authController.isAuthorized,extraController.createExtra);

//order extra
router.get('/orderextra/:id',orderextraController.searchOrderExtra);
router.get('/orderextras/',orderextraController.listOrderExtra);
router.delete('/orderextra/:id',authController.isAuthorized,orderextraController.deleteOrderExtra);
router.post('/orderextras',authController.isAuthorized,orderextraController.createOrderExtra);


// user
router.get('/users/',authController.isAuthorized,userController.listUsers);
router.get('/user/:id',authController.isAuthorized,userController.searchUser);
router.delete('/user/:id',authController.isAuthorized,userController.deleteUser);
router.post('/users',authController.isAuthorized,userController.createUser);

// drink
router.get('/drinks/',drinkController.listDrinks);
router.get('/drink/:id',drinkController.searchDrink);
router.delete('/drink/:id',authController.isAuthorized,drinkController.deleteDrink);
router.post('/drinks',authController.isAuthorized,drinkController.createDrink);

// menu
router.get('/menus/',menuController.listMenus);
router.get('/menu/:id',menuController.searchMenu);
router.delete('/menu/:id',authController.isAuthorized,menuController.deleteMenu);
router.post('/menus',authController.isAuthorized,menuController.createMenu);

// pizza
router.get('/pizzas/',pizzaController.listPizzas);
router.get('/pizza/:id',pizzaController.searchPizza);
router.delete('/pizza/:id',authController.isAuthorized,pizzaController.deletePizza);
router.post('/pizzas',authController.isAuthorized,pizzaController.createPizza);

// order
router.get('/orders/',authController.isAuthorized,orderController.listOrder);
router.get('/order/:id',authController.isAuthorized,orderController.searchOrder);
router.delete('/order/:id',authController.isAuthorized,orderController.deleteOrder);
router.post('/orders',authController.isAuthorized,orderController.createOrder );

// element order
router.get('/orderelements/',authController.isAuthorized,elementOrderController.listElementOrder);
router.get('/orderelement/:id',authController.isAuthorized,elementOrderController.searchElementOrder);
router.delete('/orderelement/:id',authController.isAuthorized,elementOrderController.deleteElementOrder);
router.post('/orderelements',authController.isAuthorized,elementOrderController.createElementOrder);


module.exports = router;