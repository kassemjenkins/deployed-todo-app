import { useState } from 'react';
import {useCookies} from 'react-cookie';

const Auth = () => {
  const [cookies, setCookie] = useCookies(null);
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState(null);
  const [password, setPassword] = useState(null);
  const [confirmPassword, setConfirmPassword] = useState(null);
  const [error, setError] = useState(null);

  const viewLogin = (status) => {
    setError(null);
    setIsLogin(status);
  }

  const handleSubmit = async (e, endpoint) => {
    e.preventDefault();
    if (!isLogin && password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    try {
      const response = await fetch(`${process.env.REACT_APP_SERVERURL}/${endpoint}`, {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify({email, password})
      });
      const jsonData = await response.json();

      if (jsonData.detail) {
        setError(jsonData.detail);
        return;
      } else {
        setCookie('Email', jsonData.email);
        setCookie('AuthToken', jsonData.token);

        window.location.reload();
      }

    } catch (error) {
      console.log(error);
    }
  }

  return (
    <div className="auth-container">
      <div className="auth-container-box">
        <form>
          <h2>{isLogin ? 'Please log in' : 'Please sign up!'}</h2>
          <input type="email" placeholder="Email" onChange={(e) => setEmail(e.target.value)}/>
          <input type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
          {!isLogin && <input type="password" placeholder="Confirm Password" onChange={(e) => setConfirmPassword(e.target.value)} />}
          <input type="submit" value={isLogin ? 'Log in' : 'Sign up'} className="create" 
          onClick={(e) => handleSubmit(e, isLogin ? 'login' : 'signup')}/>
          {error && <p className="error">{error}</p>}
        </form>
        <div className="auth-options">
          <button 
            onClick={() => viewLogin(false)}
            style={{backgroundColor: !isLogin ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188)'}}
          >Sign Up</button>
          <button 
            onClick={() => viewLogin(true)}
            style={{backgroundColor: isLogin ? 'rgb(255, 255, 255)' : 'rgb(188, 188, 188)'}}
          >Log In</button>
        </div>
      </div>
    </div>
  )

}

export default Auth;