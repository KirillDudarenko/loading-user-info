import React, { useEffect, useState } from 'react';
import { TEXT } from '../../constants';
import { LoadingCard } from '../loading-card/LoadingCard';
import { getRandom } from '../../common';

const Wrapper = () => {
    const [loading, setIsLoading] = useState(false);
    useEffect(()=> {
        setIsLoading(true);
        const delay = getRandom();
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