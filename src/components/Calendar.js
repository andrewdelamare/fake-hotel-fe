import { format, compareAsc, getMonth, getWeeksInMonth, getDaysInMonth, eachDayOfInterval, getYear, startOfMonth, endOfMonth, parseISO } from "date-fns";
import { startOfToday } from "date-fns";
import { useState } from "react";

const Date = (updateDayStart, updateDayEnd, dateIndex) => {


};

const Month = ({month}) => {
  const intYr = month.yr
  const intMon = month.mon < 10 ? `0${month.mon}` : month.mon
  const day = parseISO(`${intYr}-${intMon}-15`)
  const start = startOfMonth(day)
  const end = endOfMonth(day);
 
  const allDays = eachDayOfInterval({
    start: start, 
    end: end
  }) 
  console.log(intMon)
  return (
  <div>
    <div className="grid grid-cols-7 pt-3"> <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div></div>
    <div className="grid gap-3 grid-cols-7 pt-3 ">
      {
        allDays.map(day => {
          const dayOfWeek = day.getDay();
          let stylez = ''
          switch (dayOfWeek){  
            case 0: stylez = 'col-start-1 col-end-1 rounded-full border-slate-800'; break;
            case 1: stylez = 'col-start-2 col-end-2 rounded-full border-slate-800'; break;
            case 2: stylez = 'col-start-3 col-end-3 rounded-full border-slate-800'; break;
            case 3: stylez = 'col-start-4 col-end-4 rounded-full border-slate-800'; break;
            case 4: stylez = 'col-start-5 col-end-5 rounded-full border-slate-800'; break;
            case 5: stylez = 'col-start-6 col-end-6 rounded-full border-slate-800'; break;
            case 6: stylez = 'col-start-7 col-end-7 rounded-full border-slate-800'; break;
            default: stylez = 'rounded-full border-slate-800'; break;
          }
          return(
            <div className={stylez} key={day} >{day.getDate()}</div>
          )
        })
      }
    </div>
  </div>  
  )
};

export const Calendar = () => {
  let today = startOfToday();
  // If today is 6 October 2014:
  //=> Mon Oct 6 2014 00:00:00

  let month = getMonth(today);
  let year = getYear(today);

  const [selectedDayStart, setSelectedDayStart] = useState(today);
  const [selectedDayEnd, setSelectedDayEnd] = useState();
  const [selectedMonth, setSelectedMonth] = useState({mon: month, yr: year});
  const [nextMonth, setNextMonth] = useState({mon: month === 12 ? 1 : month + 1 , yr: month === 12 ? year + 1 : year});

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
          setSelectedMonth({mon: 12, yr: selectedMonth.yr});
          setNextMonth({mon: 1, yr: nextMonth.yr + 1});
          
          break
        }else if (selectedMonth.mon === 12){
          setSelectedMonth({mon: 1, yr: selectedMonth.yr + 1});
          setNextMonth({mon: 2, yr: nextMonth.yr});
          
          break
        }else{
          setSelectedMonth({mon: selectedMonth.mon + 1, yr: selectedMonth.yr});
          setNextMonth({mon: nextMonth.mon + 1, yr: nextMonth.yr});
          
          break;
        }   
      case '-': 
      if (selectedMonth.mon === 1){
        setSelectedMonth({mon: 12, yr: selectedMonth.yr - 1 });
        setNextMonth({mon: 1, yr: nextMonth.yr});
        break
      }else if (selectedMonth.mon === 12){
        setSelectedMonth({mon: 11, yr: selectedMonth.yr});
        setNextMonth({mon: 12, yr: nextMonth.yr - 1});
        break
      }else{
        setSelectedMonth({mon: selectedMonth.mon - 1, yr: selectedMonth.yr});
        setNextMonth({mon: nextMonth.mon - 1, yr: nextMonth.yr});
        break;
      }   
      default:
        console.log("please enter + or - to change the month") 
        break;
    }
    

  }

  return (
    <div className="flex flex-col">
      <div className="flex-row mx-auto">
        <button className="mx-5" onClick={() => updateMonth('-')}>-</button>
        <button className="mx-5" onClick={() => updateMonth('+')}>+</button>
      </div>
      <div className="flex-row mx-auto">
        <Month month={selectedMonth} />
        <Month month={nextMonth} />  
      </div>
     
    </div>
  )

};
