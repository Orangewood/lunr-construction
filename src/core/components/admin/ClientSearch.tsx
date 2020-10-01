import React from 'react';
import AsyncSelect from 'react-select/async';

interface ClientSearchProps {
    selectedClient?: (client: string) => void //Probably string from api
}

export default function ClientSearch(props: ClientSearchProps) {
    return (
        <div className="client-search">
            <AsyncSelect></AsyncSelect>
        </div>
    )
}