import { createContext } from "react";

type ProvincesProps = {
    name: string,
    key: string,
    link?: string,
    dataTrackId?: String,
    dataTrackClick?: String,
    onClick?: () => void,
    labelText?: string,
    id?: string,
}

type ProvincesContextProps = {
    provinces: ProvincesProps[]
    fetchCountryProvinces: Function
}


// this data can be generated in api call, depending of country selected
const provincesContextList: ProvincesContextProps = {
    provinces: [
        {
            name: 'Alberta',
            key: 'AB'
        },
        {
            name: 'British Columbia',
            key: 'BC'
        },
        {
            name: 'Manitoba',
            key: 'MB'
        },
        {
            name: 'New Brunswick',
            key: 'NB'
        },
        {
            name: 'Newfoundland',
            key: 'NL'
        },
        {
            name: 'Northwest Territories',
            key: 'NT'
        },
        {
            name: 'Nova Scotia',
            key: 'NS'
        },
        {
            name: 'Ontario',
            key: 'ON'
        },
        {
            name: 'Prince Edward Island',
            key: 'PE'
        },
        {
            name: 'Quebec',
            key: 'QC'
        },
        {
            name: 'Saskatchewan',
            key: 'SK'
        }
    ],
    fetchCountryProvinces: () =>console.log('Fetching all my provinces')
};
const provincesContext = createContext(provincesContextList);

export default  provincesContext;
