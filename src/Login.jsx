import React, { useState } from 'react';
import axios from 'axios';
import { Button, TextField, Typography, Container, CssBaseline } from '@mui/material';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const theme = createTheme();

const Login = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);
  const [Color, setColor] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('https://dummyjson.com/auth/login', { username, password });
      // Handle successful login (e.g., store token, redirect to protected route)
    } catch (error) {
      setError('Enter Valid Username or Password');
      setColor('red')

      // Add a shake animation on error
      const form = document.getElementById('login-form');
      if (form) {
        form.classList.add('shake');
        setTimeout(() => {
          form.classList.remove('shake');
        }, 500);
      }
    }
  };

  return (
    <ThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            marginTop: theme.spacing(8),
          }}
        >
          <LockOutlinedIcon sx={{ fontSize: '40px' }} />
          <Typography component="h1" variant="h5">
            Sign in
          </Typography>
          <form
            id="login-form"
            onSubmit={handleSubmit}
            style={{
              width: '100%',
              marginTop: theme.spacing(1),
              transition: 'all 0.3s ease',
            }}
          >
            <TextField
              variant="outlined"
              margin="normal"
              fullWidth
              id="username"
              label="Username"
              name="username"
              autoFocus
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{borderColor:Color}}
            />
           <TextField
  variant="outlined"
  margin="normal"
  fullWidth
  name="password"
  label="Password"
  type="password"
  id="password"
  value={password}
  onChange={(e) => setPassword(e.target.value)}
  style={{ borderColor: Color, color: Color }} // Set both borderColor and text color
/>

            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
              color="primary"
            >
              Login
            </Button>
            {error && (
              <div className="error" style={{ color: 'red', textAlign: 'center', marginTop: '10px' }}>
                {error}
              </div>
            )}
          </form>
        </div>
      </Container>
    </ThemeProvider>
  );
};

export default Login;
