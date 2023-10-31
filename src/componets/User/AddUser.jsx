import React, { useState } from "react";
import Card from '../UI/Card'
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
const AddUser =(props) =>{
    const [enteredUsername, setEnteredUsername] = useState('')
    const [enteredAge,  setEnteredAge] = useState('')
    const [error,setError]= useState()
    const addUserHandler = (event) =>{
    event.preventDefault()
    if(enteredUsername.trim().length === 0 || enteredAge.trim().length === 0){
        setError({title :'Enter valid input',
    message:'Please enter a valid name or age'})
        return
          
    
    }
    if(+enteredAge < 0){
        setError({title :'Enter valid age',
        message:'Please enter an greater than 0'})
        return
    }

    props.onAddUser(enteredUsername,enteredAge)
    setEnteredAge('')
    setEnteredUsername('')
    }
    const usernameChangeHandler = (event)=>{
        setEnteredUsername(event.target.value);
    }
    const ageChangeHandler = (event)=>{
        setEnteredAge(event.target.value);
    }
    const errorHandler = ()=>{
        setError(null)
    }
    return   (
        <div>
           {error &&<ErrorModal title={error.title} message={error.message} onClear={errorHandler}/>}
        <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
            <label htmlFor="username">Username</label>
            <input type="text" id="username" value={enteredUsername}onChange={usernameChangeHandler}/>
            <label htmlFor="age">Age (Years)</label>
            <input type="number" id="age" value={enteredAge} onChange={ageChangeHandler}/>
            <Button type='submit'>Add user</Button>
        </form>
        </Card>
        </div>
    )
    }
    export default AddUser