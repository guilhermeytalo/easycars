export default class carModel {
    id: string;
    service: string;
    appointmentDate: Date | null;
    carPlate: string;
    executionDate: Date | null;

    constructor() {
        this.id = '';
        this.service = '';
        this.appointmentDate = null;
        this.carPlate = '';
        this.executionDate = null;
    }
}

