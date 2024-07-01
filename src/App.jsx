import { useEffect, useState } from 'react'
import './App.css'
import userCrud from './hooks/userCrud'
import UserCard from './componennts/UserCard'
import UserForm from './componennts/UserForm'

// Fist_name, last_name, email, password, birthday

function App() {
  const [update, setUpdate] = useState()
  const [isShow, setIsShow] = useState(false)
  const [users, getUsers, createUser, deleteUser, updateUser] = userCrud() 
  useEffect(() => {
    getUsers("/users")
  }, [])
  


const handleForm =() => {
  setIsShow(true)
}

  return (
    <div className='app'>
      <div className='app__header'>
        <h1 className='app__title'>Users</h1>
        <button className='app__btn' onClick={handleForm}><i className='bx bx-plus'></i> Create New User</button>
      </div>
      <UserForm
        createUser = {createUser}
        update = {update}
        updateUser = {updateUser}
        setUpdate = {setUpdate}
        isShow = {isShow}
        setIsShow = {setIsShow}
      />
      <div className='app__container'>
        {
          users?.map((user) => (            
            <UserCard 
            key = {user.id}
            user = {user}
            setUpdate = {setUpdate}
            deleteUser = {deleteUser}
            setIsShow = {setIsShow}
            />
          ))
        }
      </div>
    </div>
  )
}

export default App