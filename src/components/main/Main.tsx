import { Box, Button } from '@mui/material'
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Main = () => {

  const navigate = useNavigate()
  
  const companyServiceHandler = () => {
    navigate("/company/login")
  }
  const userServiceHandler = () => {
    navigate("/user/login")
  }



  return (
    <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",height: "100%",width: "100%"}}>
                <Box sx={{display: "flex",flexDirection:"column",justifyContent: "space-between", alignItems: "center",height: "500px",width: "500px",border: "1px solid #ccc",borderRadius: "5px"}}>
                  <Box>Welcome To Our Bookshob</Box>
                  <Box></Box>
                  <Button variant='contained' color='primary' onClick={companyServiceHandler} >Company</Button>
                  <Button variant='contained' color='primary' onClick={userServiceHandler} >User</Button>
                </Box>
            </Box>
  )
}

export default Main
