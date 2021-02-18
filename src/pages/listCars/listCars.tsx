import React, {useEffect, useState} from "react";
import {
    AddOrder,
    ButtonContainer,
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
import CarNavbar from "../../components/carNavbar/carNavbar";
import carModel, {carForm} from "../../models/carModel";


function ListCars() {
    const [newService, setNewService] = useState<carModel>(new carModel());
    const [listServices, setListServices] = useState<Array<carModel>>([])
    const [formActive, setFormActive] = useState<carForm>({service: false, appointmentDate: false, carPlate: false});

    const handleChange = (name: string, value: any, e: any) => {
        setNewService({...newService, [name]: value});
        if (e.target.value === "") {
            disableField(e);
        } else {
            activateField(e);
        }
    };

    function loadService() {
        const localValue = localStorage.getItem('services') as string || '[]';
        const services = (JSON.parse(localValue) || []) as Array<carModel>;
        setListServices(services);
    }

    function saveService() {
        const nextCarId = Number(localStorage.getItem('nextId') || 1)
        const localValue = localStorage.getItem('services') as string || '[]'
        const services: Array<carModel> = JSON.parse(localValue) as Array<carModel> || []
        localStorage.setItem('nextId', JSON.stringify(nextCarId + 1));
        localStorage.setItem('services', JSON.stringify([...services, {...newService, id: nextCarId}]));
        loadService();
    }

    function finishExecution(id: number) {
        const service = listServices.filter((s) => s.id === id)[0];
        const date = new Date().toISOString().split('T')[0];
        service.executionDate = date.split('-').reverse().join('/');

        let services = listServices.filter((s) => s.id !== id);
        services.push(service);
        services = services.sort((a, b) => a.id > b.id ? 1 : -1)
        localStorage.setItem('services', JSON.stringify(services));
        console.log(service);
        loadService();
    }

    function deleteService(id: number) {
        let services = listServices.filter((s) => s.id !== id);
        localStorage.setItem('services', JSON.stringify(services));
        loadService();
    }

    function activateField(e: any) {
        setFormActive({...formActive, [e.target.name]: true});
    }

    function disableField(e: any) {
        setFormActive({...formActive, [e.target.name]: false});
    }

    function disableFocus(e: any) {
        if (e.target.value === "") {
            disableField(e);
        }
    }


    useEffect(() => {
        loadService();
    }, [])
    return (
        <Container>
            <AddOrder>
                <Title>Lista de carros</Title>
                <Subtitle>Os campos com * são obrigatórios</Subtitle>

                <InputContainer>

                    <InputContainer1 className="field-group">
                        <Input1 name="service"
                                onFocus={activateField}
                                onBlur={disableFocus}
                                onChange={(e) => handleChange('service', e.target.value, e)}/>
                        <Label1 className={formActive.service ? "active" : ""}>Serviço*</Label1>
                    </InputContainer1>

                    <InputContainer2>
                        <Input2 name="appointmentDate"
                                onFocus={activateField}
                                onBlur={disableFocus}
                                onChange={(e) => handleChange('appointmentDate', e.target.value, e)}/>
                        <Label2 className={formActive.appointmentDate ? "active" : ""}>Data de Agendamento*</Label2>
                    </InputContainer2>

                    <InputContainer2 className="field-group">
                        <Input2 name="carPlate"
                                onFocus={activateField}
                                onBlur={disableFocus}
                                onChange={(e) => handleChange('carPlate', e.target.value, e)}/>
                        <Label2 className={formActive.carPlate ? "active" : ""}>Placa*</Label2>
                    </InputContainer2>

                </InputContainer>


                <ButtonContainer>
                    <CancelButton/>
                    <AddButton onSubmit={() => saveService()}/>
                </ButtonContainer>
            </AddOrder>

            <CarNavbar services={listServices} finishService={finishExecution} deleteService={deleteService}/>
        </Container>
    )
}

export default ListCars;
