
import './App.css';
import NvtListUsers from './components/NvtListUsers';
import axios from './api/NvtApi';
import { useEffect, useState } from 'react';
function NvtApp() {

  const [nvtListUsers,setNvtListUsers] = useState([]);

  // đọc dữ liệu  rừ api
  const nvtGetAllUsers = async ()=>{
    const nvtResponse = await axios.get("nvtUsers");
    console.log("Api Data:", nvtResponse.data);
    setNvtListUsers(nvtResponse.data)
  }

  
  useEffect(()=>{
    nvtGetAllUsers();
    console.log("State Data:", nvtListUsers);
  },[])

  return (
    <div className="container border my-3">
      <h1>Làm việc với MockApi</h1>
      <hr/>
      <NvtListUsers renderNvtListUsers={nvtListUsers}/>
    </div>
  );
}

export default NvtApp;
