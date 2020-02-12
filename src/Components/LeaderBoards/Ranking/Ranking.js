import React from 'react'
import styles from './style.module.scss';
import userIcon from './../../../Assets/Images/userIcon.png'
import priceIcon from './../../../Assets/Images/priceIcon.png'



const styleFirstRanking = {
    textAlign: 'center',
    top: '-5.5vw',
    position: 'relative',
    color: '#ffffff',
    fontFamily: 'Montserrat-ExtraLight',
};


const styleSYTRanking = {
    textAlign: 'center',
    top: '12vw',
    position: 'relative',
    color: '#ffffff',
    fontFamily: 'Montserrat-ExtraLight',
};



const retornarDatos = (arreglo) => {
    return arreglo.map((element) => (
        <div key={element.posicion} className={styles.elementoRanking}>
            <div className={styles.contenedorPosicion}>
                <h5>{element.posicion}</h5>
            </div>
            <div>
                <h5>{element.nombre}</h5>
            </div>
            <div className={styles.contenedorReferidos}>
                <h5><strong>{element.referidos}</strong></h5>
            </div>
        </div>
    ))
}


export const Ranking = ({ arreglo }) => {
    return (
        <div className={styles.contenedorRanking}>


            <div className={styles.tuPosicionContenedor}>
                <h5>Tu posición <strong>#150 </strong></h5>
            </div>


            <div className={styles.contenedorTopSuperior}>


                <div id="elemento-2" className={styles.contenedorCirculos}>
                    <div className={styles.segundoPuestoCirculo}>
                        <img src={userIcon} alt="UserIcon"></img>
                        <div className={styles.puesto}><h5>2</h5></div>
                    </div>
                    <h5 style={styleSYTRanking}>jo**********@g********</h5>
                </div>


                <div id="elemento-1" className={styles.contenedorCirculosCentro}>
                    <div className={styles.primerPuestoCirculo}>
                        <img src={userIcon} alt="UserIcon"></img>
                        <img className={styles.price} src={priceIcon} alt="priceIcon"></img>
                        <div className={styles.puesto}><h5>1</h5></div>
                    </div>
                    <h5 style={styleFirstRanking}>pi**********@e**************</h5>
                </div>



                <div id="elemento-3" className={`${styles.contenedorTercerPuesto} ${styles.contenedorCirculos}`}>
                    <div className={styles.tercerPuestoCirculo}>
                        <img src={userIcon} alt="UserIcon"></img>
                        <div className={styles.puesto}><h5>3</h5></div>
                    </div>
                    <h5 style={styleSYTRanking}>jh****@g********</h5>
                </div>




            </div>

            <div className={styles.contenedorTopInferior}>
                <div className={styles.contenedorHeader}>
                    <h5>Posición</h5>
                    <h5>Nombre</h5>
                    <h5># Referidos</h5>
                </div>
                {retornarDatos(arreglo)}
                <div className={styles.contenedorFooter}>
                    <h5>Ver más</h5>
                </div>
            </div>
        </div>
    )
}

export default Ranking;