import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import { useState } from 'react';

export let HookwithOperator=()=>
{
    const[uservalue,setUservalue]=useState("dresses")

    const[designop,setDesignop]=useState({backgroundImage:'url(./Dreeses.jpg)'})

    const[display,setDisplay]=useState("")

    const gettingvalue=(temp)=>
    {
        setUservalue(temp.target.value)
    }

    const TernaryOperator=()=>
    {
        // ()?
        // ...:

        (uservalue==='jackgets')?
        setDesignop({backgroundColor:'seagreen',textShadow:'4px 5px 6px pink'}):

        (uservalue==='Trousers')?
        setDesignop({backgroundImage:'url(./Trousers.jpg)'}):

        (uservalue==='Tshirts')?
        setDesignop({textTransform:'uppercase'}):

        setDesignop({backgroundImage:`url(${'Dreeses.jpg'})`,backgroundRepeat:'no-repeat',width:'200px',height:'500px'})
        
        setDisplay(uservalue);

    }

    return(
        <>
        <input className='form-control' placeholder='please tell us favoriate cloth type' onChange={gettingvalue} />
        <button onClick={TernaryOperator}>Click</button>
        <p style={designop}>
            {display}
        </p>
        </> 
    );
}