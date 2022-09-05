import React from 'react';
import { FaTelegramPlane, FaArrowLeft } from 'react-icons/fa'

const Chat = () => {
    return(
        <div className="container">
        <section className="chat-area">
            <header>
                <a href="#" className="back-icon"><FaArrowLeft/></a>
                    <img src="https://pps.whatsapp.net/v/t61.24694-24/291483763_3316118818675085_5448892912731441282_n.jpg?ccb=11-4&oh=01_AVzPVDkCPrIQEg2Lx4kQCaGMIMW8mdwjn3WSY6dZa3Wv8g&oe=6325E605" />
                    <div className="details">
                        <span>DevSilva</span>
                        <p>Activo ahora</p>
                </div>
            </header>
            <div className="chat-box">
                <div className="chat outgoing">
                    <div className="details">
                        <p>Grefg una pregunta, cuando me llega el pc? estoy muy emocionado</p>
                    </div>
                </div>
                <div className="chat incoming">
                    <img src="https://esports.as.com/2020/01/07/Grefg.png?hash=c1c7a3a13b4e5bbc9db2295d1f67110ae61425fe" />
                    <div className="details">
                        <p>Claro bro. te mando ese pc el lunes</p>
                    </div>
                </div>
                <div className="chat outgoing">
                    <div className="details">
                        <p>Ese pc me servirá para juegos triple A?</p>
                    </div>
                </div>
                <div className="chat incoming">
                    <img src="https://esports.as.com/2020/01/07/Grefg.png?hash=c1c7a3a13b4e5bbc9db2295d1f67110ae61425fe" />
                    <div className="details">
                        <p>Como lo había mencionado, es un pc tocho bro</p>
                    </div>
                </div>
                <div className="chat outgoing">
                    <div className="details">
                        <p>Una pregunta, en un video se vió un consolador de tu novia, es real?</p>
                    </div>
                </div>
                <div className="chat incoming">
                    <img src="https://esports.as.com/2020/01/07/Grefg.png?hash=c1c7a3a13b4e5bbc9db2295d1f67110ae61425fe" />
                    <div className="details">
                        <p>De hecho se colocó ahí adrede, sí fuera real, se hubiera cortado esa parte</p>
                    </div>
                </div>
                <div className="chat outgoing">
                    <div className="details">
                        <p>Entiendo, muchas gracias grefg, estaré esperando con ansias. Mandaré una foto cuando llega o incluso un video</p>
                    </div>
                </div>
                <div className="chat incoming">
                    <img src="https://esports.as.com/2020/01/07/Grefg.png?hash=c1c7a3a13b4e5bbc9db2295d1f67110ae61425fe" />
                    <div className="details">
                        <p>Te lo agradecería bro, para que la gente crea que es real</p>
                    </div>
                </div>
            </div>
            <form action="#" className="typing-area">
                <input type="text" placeholder="Escribe un mensaje aquí" />
                <button><i className='send'><FaTelegramPlane /></i></button>
            </form>
        </section>
    </div>
    )
}

export default Chat