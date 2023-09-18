import React from 'react'
import { useState, useEffect, useRef } from 'react';

const Timer = (props) => {

    const today = new Date();
    const countDown = "Loading...";
    const [timer, setTimer] = useState(countDown);

    const Ref = useRef(null);

    const getTimeRemaining = (e) => {
        const total = Date.parse(e) - Date.parse(new Date());
        const minutes = Math.floor((total/(1000*60))%60);
        const hours = Math.floor((total/(1000*60*60))%24);
        const days = Math.floor(total/(1000*60*60*24));

        return {
            total, days, hours, minutes
        };
    }


    const startTimer = (e) => {
        let { total, days, hours, minutes}
                    = getTimeRemaining(e);
        if (total >= 0) {
            setTimer(
                (days > 9 ? days : '0' + days) + '  :  ' +
                (hours > 9 ? hours : '0' + hours) + '  :  ' +
                (minutes > 9 ? minutes : '0' + minutes)
            )
        }
    }


    const clearTimer = (e) => {
        setTimer(countDown);

        if (Ref.current) clearInterval(Ref.current);
        const id = setInterval(() => {
            startTimer(e);
        }, 1000)
        Ref.current = id;
    }

    const getDeadTime = () => {
        let deadline = new Date();
        let offset = Math.floor(Math.abs(deadline.getTime()-props.end.getTime())/1000);

        deadline.setSeconds(offset);
        
        return deadline;
    }

    useEffect(() => {
        clearTimer(getDeadTime());
    }, []);

  return (
    <div>
        {/* <div className='text-2xl font-bold mx-auto'>{timer}</div> */}
        <div className='text-2xl font-bold mx-auto'>{timer}</div>
        <div className='grid grid-cols-3 font-inter font-semibold mb-8 mx-auto text-sm'>
        <div className='mr-2.5'>Days</div>
        <div>Hours</div>
        <div className='ml-2'>Mins</div>
        </div>

        </div>
  )
}

export default Timer