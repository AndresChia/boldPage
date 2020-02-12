import React from 'react'
import Logo from './../../../Assets/Images/logoBold.png'
import xIcon from './../../../Assets/Images/xIcon.png'

import whatsButton from './../../../Assets/Images/whatsappButton.png'
import faceButton from './../../../Assets/Images/facebookButton.png'
import EmailButton from './../../../Assets/Images/emailButton.jpg'
import twittButton from './../../../Assets/Images/twitterButton.png'
import styles from './style.module.scss';

export const Formulario = () => {
    return (
        <div className={styles.contenedorFormulario}>


            <div className={styles.contenedorX}>
                <img className={styles.xIcon} src={xIcon} alt="xIcon"></img>
            </div>

            <div className={styles.contenedorTexto}>
                <img className={styles.logo} src={Logo} alt="LogoBold"></img>
                <h1>¡Estás en la posición #150 para ser pionero bold!</h1>
                <p className={styles.p1}>Para mantenerte dentro de los primeros 500 de la lista de espera, refiere a tus amigos y sube de puesto.</p>
                <p>Entre más amigos refieras, estarás más cerca de obtener tu datáfono a precio de pioneros bold: <strong>$99.000</strong></p>
                <p>Comparte este link con tus amigos y no te quedes por fuera de la lista:</p>
            </div>
            <h4>Link único de referencia</h4>
            <div className={styles.contenedorCopiar}>
                <h2><a href="https://links.bold.co/2019">https://links.bold.co/2019</a></h2>
                <button>Copiar</button>
            </div>
            <div className={styles.contenedorBotonera}>
                <img src={EmailButton} alt="EmailButton"></img>
                <img src={faceButton} alt="FacebookButton"></img>
                <img src={twittButton} alt="TwitterButton"></img>
                <img src={whatsButton} alt="WhatsAppButton"></img>
            </div>
        </div>
    )
}

export default Formulario;