export interface actorCreationDTO{
    name: string;
    dateOfBirth: Date;
    picture: File | string;
    biography: string;
}

export interface actorDTO{
    id: number;
    name: string;
    dateOfBirth: Date;
    picture: string;
    biography: string;
}

export interface actorsMovieDTO{
    id: number;
    name: string;
    character: string;
    picture: string;
}