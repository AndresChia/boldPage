import React from 'react'
import styles from './style.module.scss';
import userIcon from './../../../Assets/Images/userIcon.png'

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

            <div className={styles.contenedorTopSuperior}>
                <div className={styles.segundoPuesto}>
                    <img src={userIcon} alt="UserIcon"></img>
                </div>
                <div className={styles.primerPuesto}>
                    <img src={userIcon} alt="UserIcon"></img>
                </div>
                <div className={styles.tercerPuesto}>
                    <img src={userIcon} alt="UserIcon"></img>
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