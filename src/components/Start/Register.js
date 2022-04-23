import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {createTheme, ThemeProvider} from '@mui/material/styles';
import {useState} from "react";
import background from "../../assets/login_background.png";
import {FormControl, InputLabel, MenuItem, Select} from "@mui/material";
import * as PropTypes from "prop-types";
import {useNavigate} from "react-router";
async function loginUser(credentials) {
    return fetch('http://localhost:5001/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(credentials)
    })
        .then(data => data.json())
}

const theme = createTheme();

function Register({setToken}) {
    const [email, setEmail] = useState();
    const [password, setPassword] = useState();
    const [role, setRole] = useState();
    const [companyId, setCompanyId] = useState();

    const handleSubmit = async e => {
        e.preventDefault();
        const token = await loginUser({
            email,
            password,
            role,
            companyId
        });
        setToken(token);
    }
    const navigation = useNavigate();
    const switchToLogin = () => {
        navigation('/');
    }
    return (
        <div className="login-wrapper">
            <div className="login-wrapper__container">
                <div className="login-wrapper__form">
                    <ThemeProvider theme={theme}>
                        <Container component="main" maxWidth="xs">
                            <CssBaseline/>
                            <Box
                                sx={{
                                    marginTop: 8,
                                    display: 'flex',
                                    flexDirection: 'column',
                                    alignItems: 'center',
                                }}
                            >
                                <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                                    <LockOutlinedIcon/>
                                </Avatar>
                                <Typography component="h1" variant="h5">
                                    Sign in
                                </Typography>
                                <Box component="form" onSubmit={handleSubmit} noValidate sx={{mt: 1}}>
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                        autoComplete="email"
                                        autoFocus
                                    />
                                    <TextField
                                        margin="normal"
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="password"
                                        id="password"
                                        autoComplete="current-password"
                                    />
                                    <FormControl fullWidth>
                                        <InputLabel id="demo-simple-select-label">Role</InputLabel>
                                        <Select
                                            labelId="demo-simple-select-label"
                                            id="demo-simple-select"
                                            label="Choose Role"
                                            onChange={(e) => setRole(e.target.value)}
                                        >
                                            <MenuItem value="admin">Admin</MenuItem>
                                            <MenuItem value="user">User</MenuItem>
                                        </Select>
                                    </FormControl>
                                    {role === 'user' &&
                                        <TextField
                                            margin="normal"
                                            required
                                            fullWidth
                                            name="companyId"
                                            label="Company Id"
                                            type="companyId"
                                            id="companyId"
                                        />
                                    }
                                    <Button
                                        type="submit"
                                        fullWidth
                                        variant="contained"
                                        sx={{mt: 3, mb: 2}}
                                    >
                                        Sign In
                                    </Button>
                                    <Grid container>
                                        <Grid item xs>
                                            <Link href="#" variant="body2">
                                                Forgot password?
                                            </Link>
                                        </Grid>
                                        <Grid item>
                                            <Link href="#" variant="body2" onClick={switchToLogin}>
                                                {"Go back to Sign In"}
                                            </Link>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Box>
                        </Container>
                    </ThemeProvider>
                </div>
                <div className="login-wrapper__image">
                    <img src={background} alt="background"/>
                </div>
            </div>
        </div>
    );
}

export default Register;
