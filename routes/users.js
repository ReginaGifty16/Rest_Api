
import express from 'express'

import { v4 as uuidv4 } from 'uuid';


const router = express.Router();

let users = [];

router.get('/', (req, res) => {
     
       res.send(users)
})

router.post('/', (req, res) => {
     const user = req.body;
     
     const existedUser = users.find((user) => user.id == user.id)
     
     if(existedUser){
          res.status(400).send(`A user with the ID ${user.id} exists in the database`)
     } else {
     users.push({user,  id: uuidv4()})
     }
     res.send(`A new name with first name ${user.firstName} has been added to the databse`)

})


router.get('/:id', (req, res) => {
     const {id} = req.params;

const foundUser= users.find((user) => user.id === id)

res.send(foundUser)

});

router.delete('/:id', (req, res) => {
     const {id} = req.params; 

     const deleteUser = users.filter((user) => user !== id)

res.send(`The user with the id ${id} has being deleted`)
          
     
})

router.patch('/:id', (req, res) => {
     const {id} = req.params;

     const user = users.find((user) => user.id == id);

     const {firstName, lastName, age} = req.body;
     
     
if(firstName)user.firstName = firstName;

if(lastName)user.lastName = lastName;

if(age)user.age = age;

res.send(`A user with id ${id} just updated their data on the database `)
     
})

export default router