export interface user {
    userId: string;
    organisationID: string;
    
};

export interface venue {
    organisationID: string;
    venueID: string;
};

export interface tag {
    organisationID:string;
    venueID:string;
    sectionID:string;
    tableID:string;
    guid:string;
}

export interface table {
    organisationID:string;
    venueID:string;
    sectionID:string;
    tableID:string;
    tags?: tag[];

}


export interface tableCollection {
    [sectionID:string]:table[]
}




