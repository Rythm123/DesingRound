import { useCallback, useState } from "react"

const StopWatch=()=>{

    const [miliSeconds,setMiliSeconds]=useState(0);
    const [seconds,setSeconds]=useState(0);
    const [minutes,setMinutes]=useState(0);
    const [timeStamp,setTimeStamp]=useState(0);

    const incrementTime=()=>{  
        // console.log(minutes,seconds,miliSeconds)   
        // if(miliSeconds==99){
        //     setSeconds((prev)=>(prev+1)%60)
        // }

        // if(seconds==59){
        //     setMinutes((prev)=>(prev+1))
        // }
        // setMiliSeconds((prev)=>(prev+1)%100);

        setTimeStamp((prev)=>prev+1);
   
    }

    const handleTimer=(e)=>{
        // start the timer
        let timer;
        if(e.target.value=='start'){
            timer=setInterval(()=>{
                incrementTime();
            },1)
        }
        if(e.target.value=='stop'){
            console.log('stop')
            clearInterval(timer)
        }
    
    }

    const handleReset=()=>{
        setTimeStamp(0)
    }

    return (<div className="stopwatch">
        {parseInt(timeStamp/(100*60)%60).toString()}:{parseInt((timeStamp/100)%60).toString()}:{timeStamp%100}
        <div className="buttons">
            <button className="start" value={"start"} onClick={handleTimer}>Start</button>
            <button className="stop" value={"stop"} onClick={handleTimer}>Stop</button>
            <button className="reset" onClick={handleReset}>Reset</button>
        </div>
    </div>)
}

export default StopWatch;