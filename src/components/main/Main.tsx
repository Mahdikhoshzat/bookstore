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
                <Box sx={{display: "flex",flexDirection:"column",justifyContent: "space-around",height: "500px",width: "500px",border: "1px solid #ccc",borderRadius: "5px"}}>
                  <Box sx={{display: "flex", justifyContent: "center",alignItems: "center"}}>
                  <Box sx={{fontSize: "24px", fontWeight: "bold"}}>Welcome To Our Bookshob</Box>
                  </Box>
                  <Box sx={{display: "flex", justifyContent: "space-around",alignItems: "center"}}>
                  <Box sx={{fontSize: "20px",}}>choose your role: </Box>
                  <Button variant='contained' color='primary' onClick={companyServiceHandler} sx={{width: "105px"}} >Company</Button>
                  <Button variant='contained' color='primary' onClick={userServiceHandler} sx={{width: "105px"}}>User</Button>
                  </Box>
                </Box>
            </Box>
  )
}

export default Main
