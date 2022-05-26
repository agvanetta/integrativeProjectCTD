import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/signup.css';
import { imgEye, imgEyeSlash } from '../styleAux/fontAwesoneIcon';
import InputComponent from './InputComponent';


const SignUp = () => {

    const [shown, setShown] = useState(false);
    const switchShown = () => setShown(!shown);

    
    
    const [nombre, setNombre] = useState({field:'', valid: null});
    const [apellido, setApellido] = useState({field:'', valid: null});
    const [correo, setCorreo] = useState({field:'', valid: null});
    const [password, setPassword] = useState({field:'', valid: null});
    const [confirmpassword, setConfirmpassword] = useState({field:'', valid: null});
    const [formSignUp, setFormSignUp] = useState(null);
    
    const expressions = {
        name: /^[a-zA-ZÀ-ÿ\s]{2,30}$/, 
        password: /^((?=.*\d)(?=.*[a-záéíóúüñ])(?=.*[A-Z])).{6,12}/,  
        email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/        
    }
    
    const validatePassword = () => {
        if(password.field.length > 0){
            if(password.field !== confirmpassword.field){
                setConfirmpassword(prevState =>{
                    return {...prevState, valid : 'false'}
                });
            }else{
                setConfirmpassword((prevState) =>{
                    return {...prevState, valid : 'true'}
                });
            }
        }
    }
    
    const onSubmit = (e)=>{
        e.preventDefault();
        if(nombre.valid === 'true' && apellido.valid === 'true' && correo.valid === 'true' && password.valid === 'true' && confirmpassword.valid === 'true' ){
            setFormSignUp(true);
            setNombre({field:'', valid: null});
            setApellido({field:'', valid: null});
            setCorreo({field:'', valid: null});
            setPassword({field:'', valid: null});
            setConfirmpassword({field:'', valid: null});
        }else{
            setFormSignUp(false);
        }
    }

    return (
        <>
            <main>
                <div className="form">
                    <h2>Crear cuenta</h2>
                    <form className="register" onSubmit={onSubmit}>
                        <div className="register-input" id="fullname">
                            <InputComponent
                                cambiarEstado={setNombre}
                                classN = "full-name"
                                estado={nombre}
                                label= "Nombre"
                                name= "name"
                                regExp= {expressions.name}
                                type= "text"
                                messageError="El nombre solo debe contener letras y espacios en blanco, entre 2 y 25 caracteres."
                                />
                            <InputComponent
                                cambiarEstado={setApellido}
                                classN= "full-name"
                                estado={apellido}
                                label= "Apellido"
                                name= "lastname"
                                regExp= {expressions.name}
                                type= "text"
                                messageError="El apellido solo debe contener letras y espacios en blanco, entre 2 y 25 caracteres."
                            />
                        </div>
                        <div className="register-input">
                            <InputComponent 
                                cambiarEstado={setCorreo}
                                estado={correo}
                                label= "Correo electrónico"
                                name="email"
                                regExp= {expressions.email}
                                type= "email"
                                messageError="El formato de correo no es válido."
                            />
                        </div>
                        <div className="register-input">
                            <div className='pass'>
                                <InputComponent
                                    cambiarEstado={setPassword}
                                    estado={password}
                                    label="Contraseña"
                                    name="password"
                                    regExp={expressions.password}
                                    type={shown ? 'text' : 'password'}
                                    messageError="La contraseña debe tener ser de 6 a 12 caracteres, debe contener números, minúsculas y mayúsculas."
                                />
                                <span className="eye"  onClick={switchShown}>
                                    { shown ? imgEye : imgEyeSlash }
                                </span>
                            </div>
                        </div>
                        <div className="register-input">
                            <InputComponent
                                cambiarEstado={setConfirmpassword}
                                estado={confirmpassword}
                                label="Confirmar contraseña"
                                name="confirmpassword"
                                regExp=''
                                type= "password"
                                messageError="Las contraseñas deben ser iguales ."
                                funct={validatePassword}
                            />
                        </div>
                        <div className={formSignUp === false ? 'formSignUp-error' : 'formSignUp'} >
                            <p> Por favor diligencie el formulario correctamente </p>
                        </div>
                        <div className={formSignUp === true ? 'formSignUp-success':'formSignUp' } >
                            <p> Formulario enviado correctamente </p>
                        </div>
                        <div className="btn">
                            <button type="submit" className="btn-register">Crear cuenta</button>
                        </div>
                        <p>¿Ya tienes una cuenta? <Link to="/login" className='link' >Iniciar sesión</Link></p>                        
                    </form>
                </div>
            </main>
        </>
    );
} 
 
export default SignUp;