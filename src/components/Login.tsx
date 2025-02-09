import React, { useEffect } from 'react'
import { Box, TextField } from '@mui/material'

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
            </Box>
        </div>
    )
}

export default Login
