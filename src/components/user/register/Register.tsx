import { TextField, Button, Box } from '@mui/material';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';

const Registration = () => {
  
  const initialValues = {
    username: '',
    password: '',
  };

  const validationSchema = Yup.object({
    username: Yup.string().required('Required'),
    password: Yup.string().required('Required'),
  });

  const onSubmit = (values: any) => {
    console.log(values, "1111")
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={onSubmit}
    >
       {({ values, handleChange, handleBlur, touched, errors }) => (
          <Box sx={{display: "flex", justifyContent: "center", alignItems: "center",height: "100%",width: "100%"}}>
              <Form>
                <Box sx={{display: "flex",flexDirection:"column", alignItems: "center",height: "400px",width: "500px",border: "1px solid #ccc",borderRadius: "5px"}}>
                  <Box sx={{display: "flex",flexDirection: "row",width: "100%",borderBottom: "1px solid #ccc",height: "37px"}}>
                    <Button variant='text' color='primary' sx={{width: "50%", borderRight: "1px solid #ccc",borderRadius: "0"}}>
                      Sign-Up
                    </Button>
                    <Button variant='text' color='primary' sx={{width: "50%"}}>
                      Sign-In
                    </Button>
                  </Box>
                    <Box sx={{display: "flex",flexDirection:"column",height: "calc(100% - 37px)", justifyContent: "space-around", alignItems: "center"}}>
                    <Box sx={{height: "80px"}}>
                    <TextField
                        name='username'
                        label='Username'
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