import React, {useRef, useState} from 'react';
import arrow_left from '../../../assets/icons/Keyboard arrow left.png';
import arrow_right from '../../../assets/icons/Keyboard arrow right.png';
import arrow_up from '../../../assets/icons/Keyboard arrow up.png';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import moment from "moment";

function DateChange(props) {
    const [startDate, setStartDate] = useState(new Date());
    const ref = useRef();
    const previousDate = () => {
        const newDate = moment(startDate, "DD-MM-YYYY").subtract(1, 'days');
        setStartDate(new Date(newDate));
    }
    const nextDate = () => {
        const newDate = moment(startDate, "DD-MM-YYYY").add(1, 'days');
        setStartDate(new Date(newDate));
    }
    return (
        <div className="date-wrapper">
            <div className="date-wrapper__img" onClick={previousDate}><img src={arrow_left} alt="arrow left"/></div>
            <div className="date-wrapper__img" onClick={nextDate}><img src={arrow_right} alt="arrow right"/></div>
            <DatePicker ref={ref} selected={startDate} onChange={(date) => setStartDate(date)} minDate={new Date()}/>
            <div className="date-wrapper__img" onClick={() => ref.current.setOpen(true)}><img  src={arrow_up} alt="arrow up"/></div>
        </div>
    );
}

export default DateChange;
