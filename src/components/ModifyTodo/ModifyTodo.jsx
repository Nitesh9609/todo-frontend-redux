import React, {useState} from 'react'

import TextField from '@mui/material/TextField';
import { useParams, useNavigate } from 'react-router-dom';
import SaveIcon from '@mui/icons-material/Save';
import { Button } from '@mui/material';
import axios from 'axios'
const ModifyTodo = () => {

    const params = useParams()
    const navigate = useNavigate()
    const [todo, setTodo] = useState({})

    const handleChange = (event) =>{
        const {name,value} = event.target
        setTodo({...todo,[name]:value})
    } 

    const handleSubmit = async () => {
       await axios.put(`http://localhost:8080/modify-todo/${params.id}`, todo)
        .then(response => console.log(response.data))

        
        navigate('/')


    }
  return (
    <>
        {/* <p>{params.id}</p> */}
        <div>
            <TextField 
                name='todoName'
                id="outlined-basic" 
                label="Update ToDo" 
                variant="outlined" 
                onChange= {handleChange}
                >
            </TextField>

            <TextField 
                name='todoDescription'
                id="outlined-basic" 
                label="Update ToDo" 
                variant="outlined" 
                onChange= {handleChange}
                >
            </TextField>

            <Button onClick={handleSubmit} > <SaveIcon/></Button>
        </div>
    </>
  )
}
export default ModifyTodo