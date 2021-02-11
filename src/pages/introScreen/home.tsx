import React from 'react';
import Header from "../../components/header/header";
import {Button, Container, Subtitle, Title} from "./homeStyle";

function Home() {
    return (
        <Container>
            <Header />
                <Title>
                    Bem-vindo ao teste front end!
                </Title>
                <Subtitle >
                    Este teste tem como objetivo avaliar e desafiar você. Não é obrigatório realizá-lo completamente, queremos apenas reconhecer seu esforço e potencial para aprender, se adaptar e tomar decisões.
                </Subtitle>
            <Button>Entrar</Button>
        </Container>
    );
}

export default Home;
