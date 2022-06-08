import { format, compareAsc, getMonth, getWeeksInMonth, getDaysInMonth, eachDayOfInterval, getYear, startOfMonth, endOfMonth, parseISO, startOfTomorrow } from "date-fns";
import { startOfToday } from "date-fns";
import { useState } from "react";

// ------------------------------------------------------------------------

const Date = ({updateDayStart, updateDayEnd, day, selected}) => {
  const dayOfWeek = day.getDay();
  
  let stylez = ''
  switch (dayOfWeek){  
    case 0: stylez = 'col-start-1 col-end-1 m-2 w-6 h-6 place-self-center justify-around flex'; break;
    case 1: stylez = 'col-start-2 col-end-2 m-2 w-6 h-6 place-self-center justify-around flex'; break;
    case 2: stylez = 'col-start-3 col-end-3 m-2 w-6 h-6 place-self-center justify-around flex'; break;
    case 3: stylez = 'col-start-4 col-end-4 m-2 w-6 h-6 place-self-center justify-around flex'; break;
    case 4: stylez = 'col-start-5 col-end-5 m-2 w-6 h-6 place-self-center justify-around flex'; break;
    case 5: stylez = 'col-start-6 col-end-6 m-2 w-6 h-6 place-self-center justify-around flex'; break;
    case 6: stylez = 'col-start-7 col-end-7 m-2 w-6 h-6 place-self-center justify-around flex'; break;
    default: stylez = ''; break;
  }

  let selStylez = selected != false ? 'bg-black text-white rounded-full' : '';

  return (
    <div className={`${stylez} ${selStylez}` }  >{day.getDate()}</div>
  )
};

// ------------------------------------------------------------------------

const Month = ({month, className, updateDayStart, updateDayEnd, selectedDayStart, selectedDayEnd}) => {
  const intYr = month.yr
  const intMon = month.mon < 10 ? `0${month.mon}` : month.mon
  const day = parseISO(`${intYr}-${intMon}-15`)
  const start = startOfMonth(day)
  const end = endOfMonth(day);
  console.log(intMon, intYr)
  const allDays = eachDayOfInterval({
    start: start, 
    end: end
  }) 
  return (
  <div className={className}>
    <div className="flex">
      <h1 className="self-center text-xl mx-auto">{day.toLocaleString('default', { month: 'long', year: 'numeric' })}</h1>
    </div>
      
    <div className="grid gap-3 grid-cols-7 pt-3 mx-4"> 
      <div className="place-self-center">S</div>
      <div className="place-self-center">M</div>
      <div className="place-self-center">T</div>
      <div className="place-self-center">W</div>
      <div className="place-self-center">T</div>
      <div className="place-self-center">F</div>
      <div className="place-self-center">S</div>
    </div>
    <div className="grid gap-3 grid-cols-7 pt-3 mx-4">
      {
        allDays.map(day => (
          day.getTime() === selectedDayStart.getTime() ? <Date day={day} key={day} updateDayStart={updateDayStart} updateDayEnd={updateDayEnd} selected={true}/>
          : day.getTime() === selectedDayEnd.getTime() ? <Date day={day} key={day} updateDayStart={updateDayStart} updateDayEnd={updateDayEnd} selected={true}/>
          : <Date day={day} key={day} updateDayStart={updateDayStart} updateDayEnd={updateDayEnd} selected={false}/>
        ))
      }
    </div>
  </div>  
  )
};

// ------------------------------------------------------------------------

export const Calendar = () => {
  let today = startOfToday();
  // If today is 6 October 2014:
  //=> Mon Oct 6 2014 00:00:00
  let tomorrow = startOfTomorrow();

  let month = getMonth(today);
  let year = getYear(today);

  const [selectedDayStart, setSelectedDayStart] = useState(today);
  const [selectedDayEnd, setSelectedDayEnd] = useState(tomorrow);
  const [selectedMonth, setSelectedMonth] = useState({mon: month, yr: year});
  const [smStyleState, setSmS] = useState("");
  const [nextMonth, setNextMonth] = useState({mon: month === 12 ? 1 : month + 1 , yr: month === 12 ? year + 1 : year});
  const [nmStyleState, setNmS] = useState("");
  const [nextNextMonth, setNextNextMonth] = useState({mon: month === 12 ? 2 : month === 11 ? 1 : month + 2 , yr: month === 12 ? year + 1 : month === 11 ? year + 1 : year});
  const [nnmStyleState, setNnMs] = useState("opacity-0");
  const [lastMonth, setLastMonth] = useState({mon: month === 1 ? 12 : month - 1 , yr: month === 1 ? year - 1 : year});
  const [lmStyleState, setLmS] = useState("opacity-0");

  const lmStyles = "opacity-0 "
  const lmTransitionR = "opacity-100 transition duration-300 translate-x-full"

  const smStyles = "opacity-100";
  const smTransitionL = "opacity-0 transition duration-300 -translate-x-full  ";
  const smTransitionR = " transition duration-300 translate-x-full";

  const nmStyles = "opacity-100";
  const nmTransitionL = " transition duration-300 -translate-x-full ";
  const nmTransitionR = "transition duration-300 opacity-0 translate-x-full";

  const nNmStyles = "opacity-0";
  const nNmTransitionL = "opacity-100 transition duration-300 -translate-x-full";


  const updateDayStart = (date) => {
    setSelectedDayStart(date)
  }

  const updateDayEnd = (date) => {
    setSelectedDayEnd(date)
  }

  const updateMonth = (direction) => {
    switch (direction){
      case '+':
        if (selectedMonth.mon === 11){
          //move calendars
          setSmS(smTransitionL);
          setNmS(nmTransitionL);
          setNnMs(nNmTransitionL);
          setTimeout(() => {
            //set new data
            setLastMonth({mon: selectedMonth.mon, yr: selectedMonth.yr})
            setSelectedMonth({mon: selectedMonth.mon + 1, yr: selectedMonth.yr});
            setNextMonth({mon: 1, yr: nextMonth.yr + 1});
            setNextNextMonth({mon: nextNextMonth.mon + 1, yr: nextNextMonth.yr});
            //revert styles
            setSmS(smStyles);
            setNmS(nmStyles);
            setNnMs(nNmStyles);
          }, 300);
          
          break
        }else if (selectedMonth.mon === 12){
          //move calendars
          setSmS(smTransitionL);
          setNmS(nmTransitionL);
          setNnMs(nNmTransitionL);
                      setTimeout(() => {
            //set new data
            setLastMonth({mon: selectedMonth.mon, yr: selectedMonth.yr})
            setSelectedMonth({mon: 1, yr: selectedMonth.yr + 1});
            setNextMonth({mon: 2, yr: nextMonth.yr});
            setNextNextMonth({mon: nextNextMonth.mon + 1, yr: nextNextMonth.yr});
            //revert styles
            setSmS(smStyles);
            setNmS(nmStyles);
            setNnMs(nNmStyles);
          }, 300);
          
          break
        }else if (selectedMonth.mon === 10){
          //move calendars
          setSmS(smTransitionL);
          setNmS(nmTransitionL);
          setNnMs(nNmTransitionL);
          setTimeout(() => {
            //set new data
            setLastMonth({mon: selectedMonth.mon, yr: selectedMonth.yr})
            setSelectedMonth({mon: selectedMonth.mon + 1, yr: selectedMonth.yr});
            setNextMonth({mon: nextMonth.mon + 1, yr: nextMonth.yr});
            setNextNextMonth({mon: 1, yr: nextNextMonth.yr + 1});
            //revert styles
            setSmS(smStyles);
            setNmS(nmStyles);
            setNnMs(nNmStyles);
          }, 300);
          
          break
        }else{
          //move calendars
          setSmS(smTransitionL);
          setNmS(nmTransitionL);
          setNnMs(nNmTransitionL);
          setTimeout(() => {
            //set new data
            setLastMonth({mon: selectedMonth.mon, yr: selectedMonth.yr})
            setSelectedMonth({mon: selectedMonth.mon + 1, yr: selectedMonth.yr});
            setNextMonth({mon: nextMonth.mon + 1, yr: nextMonth.yr});
            setNextNextMonth({mon: nextNextMonth.mon + 1, yr: nextNextMonth.yr});
            //revert styles
            setSmS(smStyles);
            setNmS(nmStyles);
            setNnMs(nNmStyles);
          }, 300)
          
          break;
        }   
      case '-': 
      if (selectedMonth.mon === 1){
        //move calendars
        setLmS(lmTransitionR);
        setSmS(smTransitionR);
        setNmS(nmTransitionR);
        setTimeout(() => {
          //set new data
          setLastMonth({mon: lastMonth.mon - 1, yr: selectedMonth.yr})
          setNextMonth({mon: selectedMonth.mon, yr: selectedMonth.yr});
          setNextNextMonth({mon: nextNextMonth.mon - 1, yr: nextNextMonth.yr});
          setSelectedMonth({mon: 12, yr: selectedMonth.yr - 1 });
          //revert styles
          setLmS(lmStyles)
          setSmS(smStyles);
          setNmS(nmStyles);
        }, 300);
        
        

        break
      }else if  (selectedMonth.mon === 2){
        //move calendars
        setLmS(lmTransitionR);
        setSmS(smTransitionR);
        setNmS(nmTransitionR);
        setTimeout(() => {
          //set new data
          setLastMonth({mon: 12, yr: lastMonth.yr - 1})
          setNextMonth({mon: selectedMonth.mon, yr: selectedMonth.yr});
          setNextNextMonth({mon: nextNextMonth.mon - 1, yr: nextNextMonth.yr});
          setSelectedMonth({mon: selectedMonth.mon - 1, yr: selectedMonth.yr});
          //revert styles
          setLmS(lmStyles)
          setSmS(smStyles);
          setNmS(nmStyles);
        }, 300);
       
        break
      }else if  (selectedMonth.mon === 12){
        //move calendars
        setLmS(lmTransitionR);
        setSmS(smTransitionR);
        setNmS(nmTransitionR);
        setTimeout(() => {
          //set new data
          setLastMonth({mon: lastMonth.mon - 1, yr: selectedMonth.yr})
          setSelectedMonth({mon: selectedMonth.mon - 1, yr: selectedMonth.yr});
          setNextMonth({mon: 12, yr: nextMonth.yr});
          setNextNextMonth({mon: nextNextMonth.mon - 1, yr: nextNextMonth.yr});

          //revert styles
          setLmS(lmStyles)
          setSmS(smStyles);
          setNmS(nmStyles);
        }, 300);
        
        break
      }else if  (selectedMonth.mon === 11){
        //move calendars
        setLmS(lmTransitionR);
        setSmS(smTransitionR);
        setNmS(nmTransitionR);
        setTimeout(() => {
          //set new data
          setLastMonth({mon: lastMonth.mon - 1, yr: selectedMonth.yr})
          setSelectedMonth({mon: selectedMonth.mon - 1, yr: selectedMonth.yr});
          setNextMonth({mon: nextMonth.mon - 1, yr: nextMonth.yr});
          setNextNextMonth({mon: 12, yr: nextNextMonth.yr - 1});
          
          //revert styles
          setLmS(lmStyles)
          setSmS(smStyles);
          setNmS(nmStyles);
        }, 300);
      
        break;
      }else{
        //move calendars
        setLmS(lmTransitionR);
        setSmS(smTransitionR);
        setNmS(nmTransitionR);
        setTimeout(() => {
          //set new data
          setLastMonth({mon: lastMonth.mon - 1, yr: selectedMonth.yr});
          setNextMonth({mon: selectedMonth.mon, yr: selectedMonth.yr});
          setNextNextMonth({mon: nextNextMonth.mon - 1, yr: nextNextMonth.yr});
          setSelectedMonth({mon: selectedMonth.mon - 1, yr: selectedMonth.yr});
          //revert styles
          setLmS(lmStyles)
          setSmS(smStyles);
          setNmS(nmStyles);
        }, 300);
       
        break;
      }
      default:
        console.log("please enter + or - to change the month") 
        break;
    }
  }

  return (
    <div className="absolute -left-64 w-1400 overflow-hidden ">
      <div className="flex justify-center flex-row mx-auto">
        <button className="mx-5 self-center" onClick={() => updateMonth('-')}>-</button>
        <button className="mx-5 self-center" onClick={() => updateMonth('+')}>+</button>
      </div>
      <div className="flex flex-row overflow-hidden ">
        <Month month={lastMonth} className={lmStyleState} selectedDayStart={selectedDayStart} selectedDayEnd={selectedDayEnd}/>
        <Month month={selectedMonth} className={smStyleState} selectedDayStart={selectedDayStart} selectedDayEnd={selectedDayEnd}/>
        <Month month={nextMonth} className={nmStyleState} selectedDayStart={selectedDayStart} selectedDayEnd={selectedDayEnd}/>
        <Month month={nextNextMonth} className={nnmStyleState} selectedDayStart={selectedDayStart} selectedDayEnd={selectedDayEnd}/>  
      </div>
    </div>
  )
};
