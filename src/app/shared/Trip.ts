export class Trip {
    $key: string;
    user: string;
    placeFrom: string;
    placeTo: string;
    dateFrom: Date;
    dateTo?: Date;
    grades: string;
    trad: boolean;
    price: number;
}