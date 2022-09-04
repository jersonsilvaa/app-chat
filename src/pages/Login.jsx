import React from 'react'
import useShowAndHide from '../hooks/useShowAndHide'

const Login = () => {

    const { show, toggleBtn, FaEye, FaEyeSlash } = useShowAndHide()
    return (
        <div className="container">
        <section className="form login">
            <header>App chatline</header>
            <form action="#">
                <div className="error-txt"></div>
                <div className="name-details">
                <div className="field input">
                    <label>Correo</label>
                    <input type="text" placeholder="Correo" />
                </div>
                <div className="field input">
                    <label>Contraseña</label>
                    <input id="pwd" type={show ? "text" : "password"} placeholder="Contraseña" />
                    <i onClick={toggleBtn} className="fas fa-eye">
                        {
                            show ? <FaEyeSlash /> : <FaEye />
                        }
                    </i>
                </div>
                <div className="field button">
                    <input className="button" type="submit" value="Continuar" />
                </div>
            </div>
            </form>
            <div className="link">¿No tienes una cuenta? <a href="#">Registrate</a> </div>
        </section>
    </div>
    )
}

export default Login