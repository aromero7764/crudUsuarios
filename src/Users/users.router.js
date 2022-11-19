//? Primero las dependecias

const router = require('express').Router()

// Importaciones 

const userServices = require('./users.services')

/* GET → retornar todos los usuarios */
router.get("/users", userServices.getAllUsers)

/* POST → crear un nuevo usuario */
router.post("/users", userServices.createNewUser)

/* GET → usuario con ID especifico que recibes desde parametros */
router.get("/users/:id", userServices.getUserById)

//opcionales
/* router.delete("/users/:id", userServices.deleteUser)

router.put("/users/:id", userServices.updateUser) */

module.exports = router