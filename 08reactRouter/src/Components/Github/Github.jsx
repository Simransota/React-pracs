import React from 'react'
import { useEffect , useState} from 'react'
import {Link} from 'react-router-dom'
function Github() {
    const [data,setData] = useState([])
    useEffect(()=>{
        fetch('https://api.github.com/users/Simransota')
        .then(response=>response.json())
        .then(data => {
            console.log(data)
            setData(data)
        })
    },[])
    return (
        <div className='text-center m-4 bg-gray-700 text-white'>Github followers : {data.followers}</div>
    )
}

export default Github
