import React, { useState } from "react";
import moment from 'moment';
import Watch from "./Watch";


function WorldWatches() {
    const handleSubmit = evt => {
        evt.preventDefault();

        //При нажатии на ДОБАВИТЬ создаем объект с данными для часов, который потом добавим в состояние к другим часам массив watches
        const newWatches = {
            name: form.name,
            timeDifference: form.timeDifference,
            id: Date.now() // Уникальный идентификатор для удаления
        }

        // Добавляем новые часы в массив watches
        setWatches([...watches, newWatches]);

        // Очищаем форму после добавления
        setForm({ name: '', timeDifference: '' });
    }

    //Состояние для формы
    const [form, setForm] = useState({
        name: '',
        timeDifference: ''
    })

    //Функция для изменения данных в полях инпут
    const handletimeDifference = ({ target }) => {
        setForm({ ...form, [target.name]: target.value })
    }

    //Состояние для хранения добавленных мировых часов
    const [watches, setWatches] = useState([]);

    //Функция удаления часов
    const removeWatch = (id) => {
        setWatches(watches.filter(watch => watch.id !== id));
    };

    return (
        <>
            <form onSubmit={handleSubmit} >
                <div>
                    <label>Название</label>
                    <input type="text" it='name' name='name' value={form.name} onChange={handletimeDifference} />
                </div>
                <div>
                    <label>Временная зона</label>
                    <input type="number" id='timeDifference' name='timeDifference' value={form.timeDifference} onChange={handletimeDifference} />
                </div>
                <div>
                    <button type='submit'>Добавить</button>
                </div>
            </form>

            <div className="watches">
                {watches.map((watch) => (
                    <Watch
                        key={watch.id}
                        name={watch.name}
                        timeDifference={watch.timeDifference}
                        onRemove={() => removeWatch(watch.id)}
                    />
                ))}
            </div>
        </>
    )
}

export default WorldWatches;