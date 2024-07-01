import React from 'react'
import "./styles/userCard.css"


const UserCard = ({user, deleteUser, setUpdate, setIsShow}) => {

const handleDelete = ()  => {
    deleteUser("/users", user.id)
}

const handleEdit = () => {
    setUpdate(user);
    setIsShow(true)
}

  return (
    <article className='userCard'>
        <h2 className='userCard__name'>{user.first_name} {user.last_name}</h2>
        <hr className='userCard__line'/>
        <ul className='userCard__list'>
            <li className='userCard__item'><span>EMAIL: </span><span>{user.email}</span></li>
            <li className='userCard__item'><span>BIRTHDAY: </span><span><i class='bx bx-gift'></i> {user.birthday}</span></li>
        </ul>
        <hr className='userCard__line'/>
        <div className='userCard__btns'>
            <button onClick={handleDelete}><i className='bx bxs-trash'></i></button>
            <button onClick={handleEdit}><i className='bx bxs-edit-alt'></i></button>
        </div>
    </article>
  )
}

export default UserCard