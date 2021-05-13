import React from 'react'
import './Headings.css'
export default function Headings(props) {
    return (
        <div>
            <h1  className="d-flex justify-content-center head">{props.mainheading}</h1>
             <p  className="d-flex justify-content-center sub">{props.subheading}</p>
        </div>
    )
}
