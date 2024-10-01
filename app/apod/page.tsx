"use client";

import {  DatePicker, DateValue, Skeleton, Image, Spinner } from "@nextui-org/react";
import { CalendarDate, getLocalTimeZone, today} from "@internationalized/date";
import { useEffect, useState } from "react";
import ApodContent from "@/components/apodContent";

export default function Apod() {
    const [selectedDate, setSelectedDate] = useState<DateValue | null>(null);
    const dateMin = new CalendarDate(1995, 6, 16); // date of availability of the APOD API
    const dateNow = today(getLocalTimeZone());

    useEffect(() => {
        setSelectedDate(dateNow);
    }, []);

    const handleDateChange = (date: DateValue ) => {
        setSelectedDate(date);
    };

    return (
        <>
                <div className="flex flex-col gap-3 justify-between items-center mt-2 md:flex-row md:justify-around max-w-[1980px]">
                    <h1 className="text-foreground text-xl text-center md:text-2xl font-bold">
                        APOD
                    </h1>
                    <DatePicker 
                        size="sm"
                        showMonthAndYearPickers  
                        onChange={handleDateChange} 
                        minValue={dateMin} 
                        maxValue={dateNow} 
                        label="Date" 
                        className="max-w-[200px] md:self-auto" 
                        defaultValue={dateNow}
                    />
                </div>
                <div className="flex flex-col items-center justify-center gap-y-5 flex-grow">
                    {
                        selectedDate && <ApodContent currentDate={selectedDate.toString()} />
                    }
                </div>

        </>
    )
}
