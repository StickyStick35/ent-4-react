import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/userForm.css'

const UserForm = ({createUser, update, updateUser, setUpdate, setIsShow, isShow}) => {
    
    const {handleSubmit, register, reset} = useForm()

    useEffect(() => { 
      reset(update)
    }, [update])
    

    const submit = (data) => {
        
        if (update) {
        // Update
            updateUser("/users", update.id, data);
            setUpdate()
        } else {
        // create
            createUser("/users", data)
        }

        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
        setIsShow(false);
    }
    const handleClose = () => {
        reset({
            first_name: '',
            last_name: '',
            email: '',
            password: '',
            birthday: '',
        })
        setIsShow(false);
        setUpdate()

    }

  return (
    <div className={`userForm ${isShow && 'active'}`}>
        <form className='userForm__form' onSubmit={handleSubmit(submit)}>
            <div className='userForm__header'>            
                <h2>
                {
                    update ?
                        'Update user'
                        :
                        'New User'
                }
                </h2><button onClick={handleClose} className='userForm__close' type='button'>X</button>
            </div>
            <div className='userForm__item'>
                <label htmlFor="first_name">First name</label>
                <input {...register("first_name")} id="first_name"type="text" autocomplete="off" placeholder='Your name' />
            </div>
            <div className='userForm__item'>
                <label htmlFor="last_name">Last name</label>
                <input {...register("last_name")} id="last_name"type="text" autocomplete="off" placeholder='Your last name ' />
            </div>
            <div className='userForm__item'>
                <label htmlFor="email">Email</label>
                <input {...register("email")} id="email"type="email" autocomplete="off" placeholder='Your email' />
            </div>
            <div className='userForm__item'>
                <label htmlFor="password">Password</label>
                <input {...register("password")} id="password"type="password" autocomplete="off" placeholder='Password' />
            </div>
            <div className='userForm__item'>
                <label htmlFor="birthday">Birthday</label>
                <input {...register("birthday")} id="birthday"type="date" placeholder='Your burn' />
            </div>
            <button className='userForm__btn'>                
                {
                    update ?
                        'Update user'
                        :
                        'Add new user'
                }
                </button>
        </form>
    </div>
  )
}

export default UserForm