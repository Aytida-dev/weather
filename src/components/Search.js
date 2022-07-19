import React from "react";
import { AsyncPaginate } from "react-select-async-paginate";
import { geoApiOptions } from "./api";
import { GEO_API_URL } from "./api";

export default function Search(props) {

    const [search, setSearch] = React.useState(null);

    function handleOnChange(searchData) {
        setSearch(searchData);
        props.onSearchChange(searchData);
    }

    function loadOptions(inputValue) {
        return ( 
            fetch(`${GEO_API_URL}/cities?namePrefix=${inputValue}`, geoApiOptions)
                .then(response => response.json())
                .then(response => {
                    return{
                        options: response.data.map(city => {
                            return {
                                value: `${city.latitude} ${city.longitude}`,
                                label: `${city.name}, ${city.countryCode}`
                            }
                        })
                    }

                    
                }).catch(error => {console.log(error)})

        )
    }

    return (
        <AsyncPaginate
            placeholder="Search for a city"
            debounceTimeout={600}
            value={search}
            onChange={handleOnChange}
            loadOptions={loadOptions}
        />
    );
}