import {useEffect} from 'react';
import {PARAM_KEY} from '../config';

const useWindowEvent = (event: string, callback: () => void) => {
    useEffect(() => {
        window.top.addEventListener(event, callback);

        return () => window.top.removeEventListener(event, callback);
    }, [event, callback]);
};

const listenTheme = (callback: () => void) => {
    return useWindowEvent(PARAM_KEY, callback);
};

export {listenTheme};
