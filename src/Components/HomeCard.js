import React from 'react'

const HomeCard = (props) => {
    return (
        <div className="bg-green-200 p-4 my-4 rounded-lg">
            <div className="mb-2">
                <p>{props.name}</p>
            </div>
            <div>
                <img className="w-16 h-9 rounded-xl" src={props.flag} alt="" />
            </div>
        </div>
    )
}

export default HomeCard
