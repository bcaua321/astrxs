"use client";

import {  DatePicker, DateValue } from "@nextui-org/react";
import { CalendarDate, getLocalTimeZone, today} from "@internationalized/date";
import { useState } from "react";


export default function Apod() {
    const [selectedDate, setSelectedDate] = useState<CalendarDate | null>(null);
    const dateMin = new CalendarDate(1995, 6, 16); // date of availability of the APOD API
    
    const handleDateChange = (date: CalendarDate | null ) => {
        setSelectedDate(date);
        console.log("Data selecionada:", date);
    };

    return (
        <>
            <div>
                <DatePicker 
                    onChange={handleDateChange} 
                    showMonthAndYearPickers  
                    minValue={dateMin} 
                    maxValue={today(getLocalTimeZone())} 
                    label="Select a date" 
                    className="max-w-[284px]" 
                    defaultValue={today(getLocalTimeZone())}/>
            </div>
        </>
    )
}