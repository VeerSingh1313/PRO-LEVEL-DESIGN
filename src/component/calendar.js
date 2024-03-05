import { useState } from "react"
import Calendar from "react-calendar"

const MyCalendar = () => {
    const [data, setdata] = useState()
    const onChange = (date) => {
        setdata(date);
        console.log(date,'llllllllllllllllll')
    };
    return (<>
        <Calendar onChange={onChange} value={data} />
    </>)
}
export default MyCalendar