import React, { useEffect, useState } from 'react'
import AsyncSelect from 'react-select/async';


type KioskProps = {
    inputValue: string,
};


export default function Kiosk(props: KioskProps) {
    
    const [test, setTest] = useState<boolean>(false)

    return (
        <div>
            <pre>inputValue: "{this.state.inputValue}"</pre>
            <AsyncSelect
                cacheOptions
                loadOptions={test}
                defaultOptions
                onInputChange={this.handleInputChange}
            />
        </div>
    );
}