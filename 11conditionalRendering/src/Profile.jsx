import React,{useState} from 'react'

const Profile = () => {

    const [loggendIn, setLoggendIn] = useState(2);
  return (
    <div>
      {loggendIn == 1?
        <h1>Welcome user 1 page </h1> :
        loggendIn ==2 ?
        <h1>Welcome user 2 page</h1> :

        <h1>Welcome user 3 page</h1>
      }
    </div>
  )
}

export default Profile