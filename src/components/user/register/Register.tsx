import { TextField, Button, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import * as Yup from 'yup';


type UserRole = {
  role: string;
 }

const Registration = (props: UserRole) => {
  const [roleState, setRoleState] = useState("")

  useEffect(() => {
      setRoleState(props.role)
  },[props.role])

  const navigate = useNavigate()

    const loginServiceHandler = () => {
        navigate(`/${roleState}/login`)
    }
    const registerServiceHandler = () => {
        navigate(`/${roleState}/register`)
    }

  
  const initialValues = {
    username: '',
    password: '',
    email: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required(`${roleState} name is required`),
    password: Yup.string().required('Password is required'),
    email: Yup.string().email('Invalid email')
    .required('Email is required'),
  });

  const onSubmit = (values: any) => {
    console.log(values)
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
       {({ values, handleChange, handleBlur, touched, errors }) => (
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",height: "100%",width: "100%"}}>
              <Form noValidate>
                <Box sx={{display: "flex",flexDirection:"column", alignItems: "center",height: "500px",width: "500px",border: "1px solid #ccc",borderRadius: "5px"}}>
                  <Box sx={{display: "flex",flexDirection: "row",width: "100%",borderBottom: "1px solid #ccc",height: "37px"}}>
                    <Button variant='text' color='primary' sx={{width: "50%", borderRight: "1px solid #ccc",borderRadius: "0"}} onClick={registerServiceHandler}>
                      Sign-Up
                    </Button>
                    <Button variant='text' color='primary' sx={{width: "50%"}} onClick={loginServiceHandler}>
                      Sign-In
                    </Button>
                  </Box>
                    <Box sx={{display: "flex",flexDirection:"column",height: "calc(100% - 37px)", justifyContent: "space-around", alignItems: "center"}}>
                    <Box sx={{height: "80px"}}>
                    <TextField
                        name='username'
                        label= {roleState + ' name'}
                        value={values.username}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.username && Boolean(errors.username)}
                        helperText={touched.username && errors.username}
                        sx={{width: "300px",height: "75%"}}
                    />
                    </Box>
                    <Box sx={{height: "80px"}}>
                    <TextField
                        name='email'
                        label='Email'
                        type='email'
                        value={values.email}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.email && Boolean(errors.email)}
                        helperText={touched.email && errors.email}
                        sx={{width: "300px",height: "75%"}}
                    />
                    </Box>
                    <Box sx={{height: "80px"}}>
                    <TextField
                        name='password'
                        label='Password'
                        type='password'
                        value={values.password}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        error={touched.password && Boolean(errors.password)}
                        helperText={touched.password && errors.password}
                        sx={{width: "300px",height: "75%"}}
                    />
                    </Box>
                    <Button type='submit' variant='contained' color='primary' sx={{width: "50%",mb: "2rem"}}>
                        Sign Up
                    </Button>
                    </Box>
                </Box>
              </Form>
            </Box>
    )}
    </Formik>
  );
};

export default Registration