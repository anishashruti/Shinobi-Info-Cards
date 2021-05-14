export interface UnpatchedShinobiSchema{
    id?: string;
    name: string;
    clan?: string;
    Rank?: string;
    Missions?: string;
    Jitsu?: string;
    Affiliation?: string;
    images?: string;
}

export interface ShinobiImagesSchema{
    first?: string;
    second?: string;
}

export interface ShinobiSchema{
    id?: string;
    name: string;
    clan?: string;
    Rank?: string;
    Missions?: string;
    Jitsu?: string;
    Affiliation?: string;
    images?: ShinobiImagesSchema;
}
