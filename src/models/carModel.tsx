export default class carModel {
    id: number;
    service: string;
    appointmentDate: string | null;
    carPlate: string;
    executionDate: string | null;

    constructor() {
        this.id = 0;
        this.service = '';
        this.appointmentDate = null;
        this.carPlate = '';
        this.executionDate = null;
    }
}


export interface carForm {
    service: boolean;
    appointmentDate: boolean;
    carPlate: boolean;
}
