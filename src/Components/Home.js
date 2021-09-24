import React, {useState} from 'react'

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

    let empty = 1;
    let emptyStyle = "mx-auto my-auto text-center";
    let darn = "bg-red-900"

    return (
        <div className="flex mx-auto bg-white max-w-3xl mt-10 h-96 border-2 border-gray-100 rounded-xl shadow-md">
            <div className="white">
                <div className="flex px-10 py-5">
                    <input className="mx-2" type="text" placeholder="Mau ke mana?" onChange={handleChange} name="destName" value={input.destName}/>
                    <input className="mx-2" type="date" placeholder="kapan nih?" onChange={handleChange} name="destDate" value={input.destDate}/>
                </div>
                <div>
                <button onClick={()=>{
                    props.onAdd(input.destName, input.destDate);
                }}>submit</button>
                </div>
            </div>
            <div className={empty? emptyStyle : darn}>
                <p>There's nothing to see here, yet...</p>
            </div>
        </div>
    )
}

export default Home
