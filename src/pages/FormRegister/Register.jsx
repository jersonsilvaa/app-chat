import React from 'react'
import './styles.css'

const Register = () => {
    return (
        <div className="container__register">
            <section className="form signup">
                <header>Chat app online</header>
                <form action="#">
                    <div className="error-text">Mensaje de error</div>
                    <div className="name-details">
                        <div className="field input">
                            <label>Nombres</label>
                            <input type="text" placeholder="Nombres" />
                        </div>

                        <div className="field input">
                            <label>Apellidos</label>
                            <input type="text" placeholder="Apellidos" />
                        </div>

                        <div className="field input">
                            <label>Correo</label>
                            <input type="email" placeholder="Correo" />
                        </div>

                        <div className="field input">
                            <label>Contraseña</label>
                            <input type="password" placeholder="Contraseña" />
                        </div>

                        <div className="field image">
                            <label>Seleccionar imagen de perfil</label>
                            <input type="file" />
                        </div>

                        <div className="field button">
                            <input type="submit" value="Continuar" />
                        </div>
                    </div>
                </form>
                <div className="link">¿Ya tienes una cuenta? <a href="#">Inicia sesión</a></div>
            </section>
        </div>
    )
}

export default Register