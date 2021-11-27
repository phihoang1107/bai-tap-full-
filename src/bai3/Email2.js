import React from 'react'
import Email1 from './Email1'

const Email2 = ({age}) => {
    return (
        <>
            <h1>Email2</h1>
            <h1>{age}</h1>
           <Email1   phone="123"/>
        </>
    )
}

export default Email2
