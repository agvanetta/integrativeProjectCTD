import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import "../styles/login.css";
import { imgEye , imgEyeSlash } from '../styleAux/fontAwesoneIcon';
import InputComponent from './InputComponent';


const Login = () => {

    const navigate = useNavigate();

    const [shown, setShown] = useState(false);
    const [correo, setCorreo] = useState({field:'', valid: null});
    const [password, setPassword] = useState({field:'', valid: null});
    const [formLogin, setFormLogin] = useState(null)

    const switchShown = () => setShown(!shown);

    const expressions = {
        password: /^((?=.*\d)(?=.*[a-záéíóúüñ])(?=.*[A-Z])).{6,12}/,  
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/        
    }

    const user = {
        fullname: "Pepito Perez",
        mail: "pepito@correo.com",
        password: "Contra123"
    }
    
    const onSubmit = (e) => {
        e.preventDefault();
        if(correo.valid === 'true' && password.valid === 'true'){
            if(user.mail === correo.field && user.password === password.field){
                setFormLogin(true);
                localStorage.setItem("usuario",user.fullname);
                localStorage.setItem("login", true);
                console.log(localStorage);
                navigate('/', { replace: true});
            }else{
                setFormLogin(false);
            }
        }
    }

    return (
        <>
            <main>
                <div className="form">
                    <h2>Iniciar sesión</h2>
                    <form className="login" onSubmit={onSubmit}>                 
                        <div className="login-input">
                            <InputComponent
                                cambiarEstado={setCorreo}
                                estado={correo}
                                label="Correo electrónico"
                                name="email"
                                regExp={expressions.email}
                                type= "email"
                                messageError="El formato de correo no es válido."
                            />
                        </div>
                        <div className='login-input'>
                            <div className="pass">
                                <InputComponent
                                    cambiarEstado={setPassword}
                                    estado={password}
                                    label="Contraseña"
                                    name="password"
                                    regExp={expressions.password}
                                    type= {shown ? 'text' : 'password'} value={password}
                                    messageError="La contraseña debe tener ser de 6 a 12 caracteres, debe contener números, minúsculas y mayúsculas."
                                />
                                <span className="eye" onClick={switchShown}>
                                    { shown ? imgEye : imgEyeSlash }
                                </span>
                            </div>
                        </div>
                        <div className={formLogin === true || formLogin === null ? 'formLogin' : 'formLogin-error'} >
                            <p> Por favor vuelva a intentarlo, sus credenciales son inválidas.</p>
                        </div>
                        <div className="btn">
                            <button type="submit" className="btn-login">Ingresar</button>
                        </div>
                        <p>¿Aún no tenes cuenta? <Link to="/signup"  className='link'>Regístrate</Link></p>       
                    </form>
                </div>
            </main>
        </>
    );
} 
 
export default Login;