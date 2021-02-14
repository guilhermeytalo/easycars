import React, {Component} from "react";
import {Container, Table, Td, TextCarPlate, TextDates, TextService, Th, Theader, Tr,} from "./carNavbarStyle";
import PropTypes from "prop-types";
import carModel from "../../models/carModel";
import {DeleteButton} from "../Buttons/deleteButton";
import {FinishButton} from "../Buttons/finishButton";

export default class CarNavbar extends Component<any, any> {
    static propTypes = {
        services: PropTypes.arrayOf(PropTypes.instanceOf(carModel).isRequired)
    }

    render() {
        return (
            <Container>
                    <Table>
                        <Theader>
                                    <Th>Serviço</Th>
                                    <Th>Data de Execução</Th>
                                    <Th>Data de Agendamento</Th>
                                    <Th>Placa</Th>
                        </Theader>
                        {
                            this.props.services.map((service: carModel) =>
                                <Tr key={service.id}>
                                    <Td><TextService>{service.service}</TextService></Td>
                                    <Td><TextDates>{service.executionDate}</TextDates></Td>
                                    <Td><TextDates>{service.appointmentDate}</TextDates></Td>
                                    <Td><TextCarPlate>{service.carPlate}</TextCarPlate></Td>
                                    <Td><DeleteButton/></Td>
                                    <Td><FinishButton /></Td>
                                </Tr>
                            )
                        }
                    </Table>
            </Container>
        )

    }
}



