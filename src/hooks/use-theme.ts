import {useState} from 'react';
import {Theme} from '../config';
import {switchTheme, getTheme} from '../utils/storage';

const useTheme = (): [boolean, () => void] => {
    const savedTheme = getTheme();
    const [currentTheme, setTheme] = useState<string>(savedTheme);

    const handleTheme = () => {
        const theme = switchTheme();

        setTheme(theme);

        const themeEvent = new CustomEvent('theme', {
            detail: theme
        });

        window.top.dispatchEvent(themeEvent);
    };

    const isDarkMode = currentTheme === Theme.DARK;

    return [isDarkMode, handleTheme];
};

export {useTheme};
