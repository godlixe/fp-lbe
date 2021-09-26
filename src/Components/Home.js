import React, { useState, useEffect, useMemo } from 'react'
import HomeCard from './HomeCard';
import MiniCard from './MiniCard';

const Home = (props) => {


    const [input, setInput] = useState({
        destName: "",
        destDate: ""
    });

    function handleChange(e){
        const {name, value} = e.target;

        setInput(prev => {
            return{
                ...prev,
                [name] : value
            }
        })
    }

    const [resList, setResList] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/name/' + input.destName)
        .then(res => res.json())
        .then(data => setResList(data))
    }, [input])

    const [comList, setComList] = useState([]);

    useEffect(() => {
        fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => setComList(data))
    }, [])

    let empty = 1;
    let emptyStyle = "mx-auto my-auto text-center";
    let darn = "bg-red-900"

    return (
        <div className="flex mx-auto bg-white max-w-5xl mt-10 min-h-xl border-2 border-gray-100 rounded-xl shadow-md ">
            <div className="white border-r-4">
                <div className="flex px-10 py-5">
                    <div className="flex">
                        <label className="mx-2 mr-0 p-2 bg-green-300 rounded-l-md" htmlFor="i">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </label>
                        <input className="mx-2 ml-0 p-2 bg-gray-100 rounded-r-md focus:outline-none text-gray-400 focus:text-black focus:bg-gray-50" type="text" placeholder="Mau ke mana?" onChange={handleChange} name="destName" value={input.destName}/>
                    </div>
                    <div className="flex">
                        <label className="mx-2 mr-0 p-2 bg-green-300 rounded-l-md" htmlFor="i">
                            <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                        </label>
                        <input className="mx-2 ml-0 p-2 bg-gray-100 rounded-r-md text-gray-400 focus:text-black focus:outline-none appearance-none focus:bg-gray-50" type="date" placeholder="kapan nih?" onChange={handleChange} name="destDate" value={input.destDate}/>
                    </div>
                </div>
                <div className="mx-12">
                    {input.destName === "" && <h1 className="pb-5 font-bold">Use the search bar to search for any country, and choose a date you would like to go at.</h1>}
                    {input.destName.length > 0 && resList.length > 0 && resList.map((index, key)=>{
                        return <HomeCard name={index.name} flag={index.flags[0]} region={index.continent}/>
                    })}
                </div>
            </div>
            <div className="max-w-xl mx-auto py-3 px-6">
                <div>
                    <p>You can also choose from this list :</p>
                </div>
                <div className="">
                    {comList.map((index, key) => {
                        return <MiniCard name={index.name} />
                    })}
                </div>
            </div>
        </div>
    )
}

export default Home
