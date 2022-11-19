
//me traigo los controladores

const usersControllers = require('./users.controllers')



/* GET → todos los usuarios */

const getAllUsers = (req, res) => {
  const data = usersControllers.showAllUsers()
  res.status(200).json(data)

}

/* POST → crear un nuevo usuario */

const createNewUser = (req, res) => {
  const { first_name,  last_name, email, password, birthday} = req.body
      if(first_name && last_name && email && password ) {
          const data = usersControllers.createnewUser({
            first_name,
            last_name,
            email,
            password,
            birthday
          })
          res.status(200).json(data)
      } else {
        //! si hay error
        res.status(400).json({
          message: "invalid data",
          fields: {
            first_name: "string mandatory",
            last_name: "string mandatory",
            email: "string mandatory",
            password: "string mandatory",
            birthday: "string optional"
          }
        })

      }
}

/* GET → user con ID en especifico */

const getUserById = (req, res) => {
  const id = req.params.id
  const data = usersControllers.showUserById(id)
    if(data) {
      res.status(200).json(data)
    } else {
      //!Error
      res.status(404).json({message: `Usuario con el ID ${id} no encontrado`})
    }
}


const updateUser = (req, res) => {
  const id = req.params.id
  const data = usersControllers.updateUser()
}

const deleteUser = (req, res) => {
  const id = req.params.id
  const data = usersControllers.deleteUser()
   res.status(200).json(data)
}

module.exports = {
  getAllUsers,
  createNewUser,
  getUserById,
  updateUser,
  deleteUser
}
