/* 
Estructura:
{
	id: 1,
	first_name: 'string',
	last_name: 'string',
	email: 'string',
	password: 'string',
	birthday: 'YYYY/MM/DD'
}

*/

const usersDB = []
let id = 1

/* GET → Al hacer esta peticion deberas de retornar todos los usuarios */
const showAllUsers = () => {
  return usersDB
}



/* POST → Al hacer esta peticion, manejaras el req del cliente y crearas un nuevo usuario */

const createnewUser = (obj)=> {
    const newUser = {
      id: id++,
      first_name: obj.first_name,
      last_name: obj.last_name,
      email: obj.email,
      password: obj.password,
      birthday: obj.birthday
    }
    usersDB.push(newUser)
    return newUser
}



/* GET → Al hacer esta petición deberas retornar el usuario con el ID en especifico que recibes desde parametros */

const showUserById = (id)=> {
    const filteredUser = usersDB.find(user => user.id == id )

    return filteredUser
}

const deleteUser = (id)=> {

  /* const filteredUser = usersDB.find(user => user.id !== id )
   usersDB = filteredUser */
  
  return console.log(`el  ${id} va a ser eliminado`)
}

const updateUser = (id)=> {
  
  return console.log("usuario editado")
}




module.exports = {
  showAllUsers,
  showUserById,
  createnewUser,
  deleteUser,
  updateUser
}


