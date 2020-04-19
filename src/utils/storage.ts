import {ADDON_ID, Theme} from '../config';

export const setTheme = (value: string): void => {
    return window.top.localStorage.setItem(ADDON_ID, value || Theme.LIGHT);
};

export const getTheme = (): string => {
    return window.top.localStorage.getItem(ADDON_ID) || Theme.LIGHT;
};

export const switchTheme = (): string => {
    const theme = getTheme() === Theme.DARK ? Theme.LIGHT : Theme.DARK;

    setTheme(theme);

    return theme;
};
