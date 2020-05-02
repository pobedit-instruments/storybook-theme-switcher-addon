import {useState} from 'react';
import {Theme} from '../config';
import {switchTheme} from '../utils/storage';
import {PARAM_KEY} from '../config';
import 'custom-event-polyfill';

const useTheme = (theme: string): [boolean, () => void] => {
    const [currentTheme, setTheme] = useState<string>(theme);

    const handleTheme = () => {
        const theme = switchTheme();

        setTheme(theme);

        const themeEvent = new CustomEvent(PARAM_KEY, {
            detail: theme
        });

        window.top.dispatchEvent(themeEvent);
    };

    const isDarkMode = currentTheme === Theme.DARK;

    return [isDarkMode, handleTheme];
};

export {useTheme};
