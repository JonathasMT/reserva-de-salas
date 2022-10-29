import React, { useState, useEffect } from 'react';
import './styles.css';

import buildCalendar from './build';
import dayStyles, { beforeToday } from './styles';
import Header from './header';

export default function Calendar({ value, onChange}) {
    const [calendar, setCalendar] = useState([]);

    useEffect(() => {
        setCalendar(buildCalendar(value));
    }, [value]);

    return (
        <div className='calendar'>
            <Header value={value} setValue={onChange}/>
            
            <div className='body'>
                <div className='day-names'>
                    {
                        ['dom', 'seg', 'ter', 'qua', 'qui', 'sex', 'sab'].map(
                            (d) => <div className='week'>{d}</div>
                        )
                    }
                </div>
                {calendar.map((week) => (<div>
                                            {week.map((day) => (
                                                <div className='day' onClick={() => onChange(day)}>
                                                    <div className={dayStyles(day, value)}>
                                                        {day.format('DD').toString()}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                ))}
            </div>
        </div>
        );
}