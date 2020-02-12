import React, { Component } from 'react'
import { Grid, Row, Col } from 'react-flexbox-grid';
import Formulario from './Formulario/Formulario'
import Ranking from './Ranking/Ranking'
import styles from './style.module.scss';


const arreglo = [
    { posicion: 4, nombre: "jo**********@g********", referidos: 2 },
    { posicion: 5, nombre: "pi**********@e**************", referidos: 1 },
    { posicion: 6, nombre: "jh****@g********", referidos: 0 },
    { posicion: 7, nombre: "an**********@h**********", referidos: 0 },
    { posicion: 8, nombre: "ve****@g*************", referidos: 0 },
    { posicion: 9, nombre: "jo**********@g********", referidos: 0 },
    { posicion: 10, nombre: "jo**********@g********", referidos: 0 },
]


export default class LeaderBoard extends Component {
    render() {
        return (
            <Grid fluid >
                <Row>
                    <Col className={styles.contenedorFormularioCol} xs={12} md={6} lg={6}>
                        <Formulario></Formulario>
                    </Col>
                    <Col className={styles.contenedorRankingCol} xs={12} md={6} lg={6}>
                        <Ranking arreglo={arreglo}></Ranking>
                    </Col>
                </Row>
            </Grid>
        )

    }
}
