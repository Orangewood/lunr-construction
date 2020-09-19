export interface Welcome {
    data: Datum[];
}

export interface Datum {
    id:          number;
    end?:        Date;
    jobcode_id?: string;
    date?:       Date;
    duration?:   number;
}