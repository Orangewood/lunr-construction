import React, { useEffect, useState } from 'react'
import { connect, PromiseState, PropsMap } from 'react-refetch';
// import AsyncSelect from 'react-select/async';


interface KioskOuterProps {
};

interface KioskInnerProps extends KioskOuterProps {
    userStatsFetch: PromiseState<any>
}


function Kiosk(props: KioskInnerProps) {

    const [test, setTest] = useState<boolean>(false)

    useEffect(() => {
        if (props.userStatsFetch.fulfilled) console.log(props.userStatsFetch.value)
    }, [])

    

    return (
        <div>
            {/* <pre>inputValue: "{this.state.inputValue}"</pre>
            <AsyncSelect
                cacheOptions
                loadOptions={test}
                defaultOptions
                onInputChange={this.handleInputChange}
            /> */}
        </div>
    );
}

export default connect<KioskInnerProps>(props => ({
    userStatsFetch: {
        url: `https://rest.tsheets.com/api/v1/managed_clients`,
        force: true,
        method: 'GET',
        headers: {
            'Authorization' : 'Bearer <TOKEN>'
        }
    }
}))(Kiosk)