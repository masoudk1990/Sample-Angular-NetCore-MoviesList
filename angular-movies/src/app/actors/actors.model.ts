export interface actorCreationDTO{
    name: string;
    dateOfBirth: Date;
    picture: File | string;
    biography: string;
}

export interface actorDTO{
    name: string;
    dateOfBirth: Date;
    picture: string;
    biography: string;
}