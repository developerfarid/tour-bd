import React from 'react';
import { Container } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useData from '../Hooks/useData';
import './Login.css'

const Login = () => {
    const { error,setIsLoding, googleAccount, setUser, successAlart,unSuccessAlart, user,setError } = useData()
    console.log(error);
    const location = useLocation()
    const redirectUrl = (location.state?.from) || '/home';
    const history = useHistory()
    const handleG = () => {
        setIsLoding(true)
        googleAccount()
            .then(result => {
                const user = result.user;
                setUser(user)
                successAlart()
                history.push(redirectUrl)

            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage)
                unSuccessAlart()
            })
            .finally(()=> setIsLoding(false))
        
            
    }

        return (
            <Container>
                <nav>
                    <ul>

                        <li onClick={handleG}>
                            Google Login
                            <span></span><span></span><span></span><span></span>
                        </li>
                    </ul>
                </nav>
            </Container>
        );
    };

    export default Login;