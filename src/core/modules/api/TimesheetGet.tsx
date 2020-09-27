export interface Welcome {
    results:           Results;
    more:              boolean;
    supplemental_data: SupplementalData;
}

export interface Results {
    timesheets: { [key: string]: Timesheet };
}

export interface Timesheet {
    id:             number;
    user_id:        number;
    jobcode_id:     number;
    start:          Date;
    end:            Date;
    duration:       number;
    date:           Date;
    tz:             number;
    tz_str:         TzStr;
    type:           Type;
    location:       Location;
    on_the_clock:   boolean;
    locked:         number;
    notes:          string;
    customfields:   { [key: string]: CustomfieldEnum };
    attached_files: number[];
    last_modified:  Date;
}

export enum CustomfieldEnum {
    Item1 = "Item 1",
    Item2 = "Item 2",
}

export enum Location {
    EagleID = "(Eagle, ID?)",
}

export enum Type {
    Manual = "manual",
    Regular = "regular",
}

export enum TzStr {
    TsMT = "tsMT",
}

export interface SupplementalData {
    jobcodes:     { [key: string]: Jobcode };
    users:        { [key: string]: User };
    customfields: { [key: string]: CustomfieldClass };
    files:        { [key: string]: File };
}

export interface CustomfieldClass {
    id:       number;
    required: boolean;
    type:     string;
}

export interface File {
    id:                  number;
    uploaded_by_user_id: number;
    file_name:           string;
    active:              boolean;
}

export interface Jobcode {
    id:              number;
    parent_id:       number;
    assigned_to_all: boolean;
    billable:        boolean;
    active:          boolean;
}

export interface User {
    id:         number;
    first_name: string;
    last_name:  string;
    group_id:   number;
    active:     boolean;
}