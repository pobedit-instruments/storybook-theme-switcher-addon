import {useEffect} from 'react';

const useWindowEvent = (event: string, callback: () => void) => {
    useEffect(() => {
        window.top.addEventListener(event, callback);

        return () => window.top.removeEventListener(event, callback);
    }, [event, callback]);
};

const listenTheme = (callback: () => void) => {
    return useWindowEvent('theme', callback);
};

export {listenTheme};
