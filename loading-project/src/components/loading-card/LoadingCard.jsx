import React, { useEffect, useState } from 'react';
import { getRandom } from '../../common';
import { CARD_NOTES, NOTE_DELAY } from '../../constants';
import { Spinner, Minus, Plus } from '../icons';

const LoadingCard = (props) => {
    const { loading } = props;
    const [currentNote, setCurrentNote] = useState('');
    const [isExpanded, setIsExpanded] = useState(true);
    const [intervalId, setIntervalId] = useState();
    const Icon = isExpanded ? Minus : Plus;
    const dropInterval = () => {
        clearInterval(intervalId);
        setIntervalId(undefined);
    }
    const handleExpandClick = () => {
        setIsExpanded(!isExpanded);
    }
    const switchNote = () => {
        let notes = JSON.parse(localStorage.getItem('notes'));
        if (!notes || notes.length === 0) {
            notes = [...CARD_NOTES]
            localStorage.setItem('notes', JSON.stringify(notes));
        }
        const index = getRandom(0, notes.length - 1);
        console.log(notes);
        setCurrentNote(notes[index]);
        notes.splice(index, 1);
        localStorage.setItem('notes', JSON.stringify(notes));
    }
    useEffect (() => {
        if (loading) {
            document.body.style.overflow = 'hidden'; //Решил стилями убрать скролл - вариант с обработчиком не очень нравится
            switchNote();
            const newIntervalId = setInterval(() => {
               switchNote();
            }, NOTE_DELAY * 1000);
            setIntervalId(+newIntervalId)
        } else {
            document.body.style.overflow = 'auto';
            dropInterval();
        }
        return () => {
            document.body.style.overflow = 'auto';
            dropInterval();
        }
    }, [loading])
    if (!loading) {
        return false;
    }
    return (
        <div className='loading-card'>
            <div className='loading-card-header'>
                <div className='flex content-center'>
                    <Spinner className={'spinner'}/>
                </div>
                <span className='loading-card-header-text'>Идёт загрузка данных</span>
            </div>
            <div className='loading-card-body'>
                <div className='flex'>
                    <div className='flex items-center'>
                        <button className='expander' onClick={handleExpandClick}>
                            <Icon className="expander-icon"/>
                        </button>
                    </div>
                    <span className='question-text'>А вы знали?</span>
                </div>
                {isExpanded &&
                <span className='info-text'>
                    {currentNote}
                </span>
                }
            </div>
        </div>
    )
}

export { LoadingCard }