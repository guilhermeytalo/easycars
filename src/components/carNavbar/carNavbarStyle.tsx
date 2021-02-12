import React from "react";
import {Container, ul, li} from "./carNavbar";

const services = [
    'Serviço',
    'Data de Execução',
    'Data de Agendamento',
    'Placa',
];

/*function ListServices(props: any) {
    const services = props.services;
    const serviceItems = services.map((service: string) =>
    <li>
        {service}
    </li>
    );
    return(
        <ul>{serviceItems}</ul>
    );
}*/

function CarNavbar() {
    return (
        <Container>
           {/*<ListServices />*/}
        </Container>
    )
}

export default CarNavbar;
