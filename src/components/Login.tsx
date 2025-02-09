import React, { useEffect } from 'react'
import { Box, Button, TextField } from '@mui/material'

const Login = () => {

    // useEffect(() => {
    //    const data = fetch('/api/data')
    //         .then((response: any) => response.json())
    //         .then((data: any) => console.log(data));


    // }, [])


    return (
        <div>
            <Box component="form">
                <h4>Email *</h4>
                <TextField required type='email' id="outlined-basic" variant="outlined" />
                <h4>Password *</h4>
                <TextField required type='password' id="outlined-basic" variant="outlined" />
                <div>
                    <Button variant='contained' sx={{ mt: 2 }}>Login</Button>
                </div>
                <div>
                    <Button variant="outlined" sx={{ mt: 2 }}>
                        Sign in with Google
                    </Button>
                </div>
            </Box>
        </div>
    )
}

export default Login
