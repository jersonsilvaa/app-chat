import React from 'react'

const Login = () => {
    return (
        <div className="container">
        <section className="form login">
            <header>Chat app online</header>
            <form action="#">
                <div className="error-text">Mensaje de error</div>
                <div className="name-details">
                <div className="field input">
                    <label>Correo</label>
                    <input type="text" placeholder="Correo" />
                </div>
                <div className="field input">
                    <label>Contraseña</label>
                    <input type="password" placeholder="Contraseña" />
                    <i className="fas fa-eye"></i>
                </div>
                <div className="field button">
                    <input type="submit" value="Continuar" />
                </div>
            </div>
            </form>
            <div className="link">¿No tienes una cuenta? <a href="#">Registrate</a> </div>
        </section>
    </div>
    )
}

export default Login