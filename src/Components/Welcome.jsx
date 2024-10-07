import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


const Welcome = () => {
    const { id } = useParams();
    const [fullname, setFullname] = useState("");

  useEffect(() => {
    const checkApi = async () => {
        const res = await axios.get("https://66ffcd724da5bd237552095c.mockapi.io/users");
        const users = res.data;
        const user = users.find(user => user.id == id);
        if(user) {
            setFullname(user.fullname);
        }
    }
    checkApi()
  },[])

    
   

    return (
        <div>
            <h1 style={{textAlign:"center",padding:"1rem"}}>Welcome,{fullname}</h1>
        </div>
    );
};

export default Welcome;