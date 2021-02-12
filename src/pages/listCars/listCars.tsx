import React from "react";
import {
    AddOrder, ButtonContainer,
    Container,
    Input1,
    Input2,
    InputContainer,
    InputContainer1,
    InputContainer2,
    Label1,
    Label2,
    Subtitle,
    Title
} from "./listCarStyle";
import AddButton from "../../components/Buttons/addButton";
import {CancelButton} from "../../components/Buttons/cancelButton";
import CarNavbar from "../../components/carNavbar/carNavbarStyle";

function ListCars() {
    return (
        <Container>
            <AddOrder>
                {/*Adicionar ordem*/}
                <Title>
                    Lista de carros
                </Title>
                <Subtitle>
                    Os campos com * são obrigatórios
                </Subtitle>
                <InputContainer>

                    <InputContainer1>
                        <Input1/>
                        <Label1>Serviço</Label1>
                    </InputContainer1>

                    <InputContainer2>
                        <Input2/>
                        <Label2>Data de Agendamento</Label2>
                    </InputContainer2>

                    <InputContainer2>
                        <Input2/>
                        <Label2>Serviço</Label2>
                    </InputContainer2>
                </InputContainer>
                <ButtonContainer>
                    <CancelButton/>
                    <AddButton/>
                </ButtonContainer>
            </AddOrder>

            <CarNavbar />
        </Container>
    )
}

export default ListCars;
