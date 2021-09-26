import React from 'react'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

const HomeCard = (props) => {

    return (
        <div className="p-4 my-4 rounded-lg shadow-sm border-2 bg-green-50">
            <div className="mb-2">
                <p>{props.name}</p>
            </div>
            <div className="flex justify-between">
                <img className="w-16 h-9 rounded-xl" src={props.flag} alt="" />
                <h1>{props.region}</h1>
                <Link to={`/${props.name}`}><button className="px-3 py-1 bg-green-500 rounded-lg">Select</button></Link>
            </div>
        </div>
    )
}

export default HomeCard
