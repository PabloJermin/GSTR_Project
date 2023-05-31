/* eslint-disable no-unused-vars */
import React, {useContext} from 'react'
import AuthContext from '../context/AuthContext'



const Contact = () => {
  let {setuserName} = useContext(AuthContext)

  return (

    <div>Contact
    {userName}
    </div>
  )
}

export default Contact