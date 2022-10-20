import React, { useEffect } from 'react'
import { getVaccineData } from '../../../API'
import { sortBy } from 'lodash';
import HeaderVaccine from './header';
import DataVaccinesWorld from './dataVaccinesWorld';
import DataVaccinesCoutry from './country/DataVaccinesCoutry'
import CoutryVaccines from './country';
import CountrySelect from './country/CountrySelect';
import FooterPages from '../../footer'
import TableVaccinesCountry from '../../table/TableVaccinesCountry';
function Vaccines() {
    const [vaccine, setVaccine] = React.useState([]);
    const [selectedCountryId, setSelectedCountryId] = React.useState('');
    const [report, setReport] = React.useState([]);
    useEffect(() => {
        getVaccineData().then((res) => {
            console.log('VaccineData', res);
            const { data } = res;
            const vaccine = sortBy(data, 'country');
            setVaccine(vaccine);
            setSelectedCountryId('Vietnam');
        })
    }, []);

    const handleOnChange = React.useCallback((e) => {
        setSelectedCountryId(e.target.value);
    }, []);

    useEffect(() => {
        if (selectedCountryId) {
            const selectedCountry = vaccine.find(
                (country) => country.country === selectedCountryId.toString()
            );
            console.log('test1', selectedCountry);
            setReport(selectedCountry.data)
        }
    }, [selectedCountryId, vaccine]);
    return (
        <div className=' tablet:p-3 md:p-3 lg:p-0'>
            <div className='max-w-[1250px]  m-auto justify-center items-center mb-9'>
                <img src='https://images.unsplash.com/photo-1618961734760-466979ce35b0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1332&q=80' alt=""
                 className=' p-0 tablet:w-[100%] tablet:h-[100%] md:w-[100%] md:h-[100%] lg:w-[1250px] lg:h-[646px] rounded-3xl object-cover' />
                <HeaderVaccine />
            </div>
            <div className='max-w-[1250px]  m-auto justify-center items-center'>

                <DataVaccinesWorld vaccine={vaccine} />
                <CoutryVaccines />
                <CountrySelect
                    handleOnChange={handleOnChange}
                    vaccine={vaccine}
                    value={selectedCountryId}

                />
                <DataVaccinesCoutry
                    report={report}
                />
                <TableVaccinesCountry />
                <FooterPages />
            </div>
        </div>
    )
}

export default Vaccines
