import React from 'react'

const Navbar = (props) => {


    return (
        <div className="flex bg-blue-300 h-18 justify-between">
            <div className="flex px-5 py-5">
                <p className="text-white font-extrabold">Trev.el</p>
            </div>
            <div className="flex px-3 py-5">
                <p>✈️</p>
            </div>
            <div className="flex px-3 py-5">
                <p>Yay</p>
            </div>
        </div>
    )
}

export default Navbar
