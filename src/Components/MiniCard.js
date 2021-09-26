import React from 'react'

const MiniCard = (props) => {

    return (
        <div className="flex py-2 my-2 px-2 bg-gray-200 text-xs rounded-md">
            <p>{props.name}</p>
        </div>
    )
}

export default MiniCard
