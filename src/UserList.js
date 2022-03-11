import React, {useState, useEffect} from 'react'
import  axios from 'axios'

const UserList = () => {
const [listOfUser, setListOfUser] = useState([])
useEffect(()=>{
axios.get("https://jsonplaceholder.typicode.com/users")
.then((res)=>setListOfUser(res.data))
.catch((err)=>console.error(err))
}, [])

  return (<>
  {console.log(listOfUser)}
  {listOfUser.map(user =>{
      const {name, email, id} = user
      return (
        <div key={id} className="user">
          <div className="name">
            <p>Name :</p> <h2> {name}</h2>
          </div>
          <div className='email'>
            {" "}
            <p>Email :</p>
            <h4> {email}</h4>
          </div>
        </div>
      );
  })}
  </>);
}

export default UserList