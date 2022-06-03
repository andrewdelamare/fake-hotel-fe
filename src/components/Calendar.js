import { format, compareAsc, getMonth, getWeeksInMonth, getDaysInMonth, eachDayOfInterval, getYear } from "date-fns";
import { startOfToday } from "date-fns";
import { useState } from "react";

const Date = (updateDayStart, updateDayEnd, dateIndex) => {


};

const Month = (month) => {
  const daysInMonth = getDaysInMonth(month.mon)
  //const allDays = eachDayOfInterval() 
  return (
  <div>
    <div className="grid grid-cols-7"> <div>S</div><div>M</div><div>T</div><div>W</div><div>T</div><div>F</div><div>S</div></div>
    <div className="grid grid-cols-7">
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
          console.log(selectedMonth)
          console.log(nextMonth);
          break
        }else if (selectedMonth.mon === 12){
          setSelectedMonth({mon: 1, yr: selectedMonth.yr + 1});
          setNextMonth({mon: 2, yr: nextMonth.yr});
          console.log(selectedMonth)
          console.log(nextMonth);
          break
        }else{
          setSelectedMonth({mon: selectedMonth.mon + 1, yr: selectedMonth.yr});
          setNextMonth({mon: nextMonth.mon + 1, yr: nextMonth.yr});
          console.log(selectedMonth)
          console.log(nextMonth);
          break;
        }   
      case '-': 
        setSelectedMonth(selectedMonth - 1);
        setNextMonth(nextMonth - 1);
        console.log(nextMonth)
        break;
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
      <Month month={selectedMonth} />
      <Month month={nextMonth} />  
    </div>
  )

};
