import React from 'react';

export interface SpinnerProps {
    show: boolean
    children: React.ReactNode;
}

export function Spinner(props: SpinnerProps) {
    return (

        props?.show ?
            <div className='d-flex justify-content-center align-items-lg-center'>
                <div className='spinner-border primary' role='status'></div>
            </div> : props?.children

    )
}

export default Spinner;