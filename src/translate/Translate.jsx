import axios from 'axios'
import {useEffect, useState}  from "react"
import React from 'react'

const Translate = () => {
    const [languages, setLanguages] = useState([])
    const [userInput, setInput] = useState("")
    const [option, setOption] = useState("")
    useEffect(()=>{
        fetching()
    },[])
    
    const fetching = async()=>{
        const response = await axios.get("https://text-translator2.p.rapidapi.com/getLanguages",{
            headers:{
                'X-RapidAPI-Key': '2ef23b9a82mshe843ad1096690a7p1173ccjsn6294a198b90e',
            }
        })
        // console.log(response.data)
        setLanguages(response.data.data.languages)
    }

    const handleChange = (event)=>{
        // console.log(event.target.value)
        setOption(event.target.value)

    }
    const handleInputChange =(event)=>{
        // console.log(event.target.value)
        setInput(event.target.value)
    }
    const handleSubmit = ()=>{
        try{
            

        }
        catch(error){
            console.log(error)
        }
    }
  return (
    <div className='translate_box'>
        <select value={option} onChange={handleChange}>
            <option value={""} selected disabled>translate to</option>
            {languages.map((lang)=><option value={lang.code} key={lang.code}>{lang.name}</option>)}
        </select>
        <input type="text" placeholder="enter text to translate" onChange={handleInputChange} value={userInput}/>
        <button onClick={handleSubmit}>Translate</button>
        <p>hello world</p>

    </div>
  )
}

export default Translate