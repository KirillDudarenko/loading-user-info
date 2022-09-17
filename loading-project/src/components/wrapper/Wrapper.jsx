import React, { useEffect, useState } from 'react';
import { TEXT } from '../../constants';
import { LoadingCard } from '../loading-card/LoadingCard';

const getRandomDelay = (min = 12, max = 30) => Math.random() * (max - min) + min;

const Wrapper = () => {
    const [loading, setIsLoading] = useState(false);
    useEffect(()=> {
        setIsLoading(true);
        const delay = getRandomDelay();
        setTimeout(() => setIsLoading(false), delay * 1000)
    }, [])
    return (
        <div>
            <span>{TEXT}</span>
            <LoadingCard loading={loading} />
        </div>
    )
}

export { Wrapper };