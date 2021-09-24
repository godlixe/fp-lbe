import React from 'react'

const Navbar = (props) => {


    return (
        <div className="flex bg-blue-300 h-18 justify-between">
            <div className="flex px-5 py-5">
                <p>{props.name}</p>
            </div>
            <div className="flex px-3 py-5">
                <p>something here</p>
            </div>
            <div className="flex px-3 py-5">
                <p>{props.date}</p>
            </div>
        </div>
    )
}

export default Navbar
