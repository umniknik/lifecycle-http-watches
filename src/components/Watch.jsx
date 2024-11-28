import React, { useState, useEffect } from "react";
import moment from 'moment';

function Watch({ name, timeDifference, onRemove }) {
    //utcOffset — это значение, которое указывает разницу во времени между определённой временной зоной и временем по всемирному координированному времени (UTC)
    const [currentTime, setCurrentTime] = useState(moment().utcOffset(timeDifference * 60).format('HH:mm:ss'));  //Создаем сотояние для хранения времени данных часов, чтобы потом изменять с интеррвалом через setCurrentTime

    useEffect(() => {
        const intervalId = setInterval(() => {
            setCurrentTime(moment().utcOffset(timeDifference * 60).format('HH:mm:ss')); //Через каждую секунду будем записывать в состояние currentTime актульное значение времени смешенное на timeDifference
        }, 1000);

        return () => clearInterval(intervalId); // Очистка интервала при размонтировании, например при удалении из DOM этого элемента
    }, []);

    return (
        <div className="watch">
            <div className="city" >{name}</div>
            <div className="time" > {currentTime} </div>
            <button onClick={onRemove}>❌</button>
        </div>
    );
}

export default Watch;