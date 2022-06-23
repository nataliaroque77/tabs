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


// this data can be api call
const provincesContextList: ProvincesContextProps = {
    provinces: [
        {
            name: 'Alberta',
            key: 'AB',
            link: '#'
        },
        {
            name: 'British Columbia',
            key: 'BC',
            link: '#'
        },
        {
            name: 'Manitoba',
            key: 'MB',
            link: '#'
        },
        {
            name: 'New Brunswick',
            key: 'NB',
            link: '#'
        },
        {
            name: 'Newfoundland',
            key: 'NL',
            link: '#'
        },
        {
            name: 'Northwest Territories',
            key: 'NT',
            link: '#'
        },
        {
            name: 'Nova Scotia',
            key: 'NS',
            link: '#'
        },
        {
            name: 'Ontario',
            key: 'ON',
            link: '#'
        },
        {
            name: 'Prince Edward Island',
            key: 'PE',
            link: '#'
        },
        {
            name: 'Quebec',
            key: 'QC',
            link: '#'
        },
        {
            name: 'Saskatchewan',
            key: 'SK',
            link: '#'
        }
    ],
    fetchCountryProvinces: () =>console.log('Fetching all my provinces')
};
const provincesContext = createContext(provincesContextList);

export default  provincesContext;