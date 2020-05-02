import React from 'react';
import {IconButton} from '@storybook/components';
import {useTheme} from '../../hooks';
import {Sun, Moon} from './icons';
import {getTheme} from '../../utils/storage';

type Props = {};

export const ThemeSwitcher: React.FunctionComponent<Props> = () => {
    const theme = getTheme();
    const [isDarkMode, handleTheme] = useTheme(theme);

    return (
        <IconButton
            active={isDarkMode}
            title={isDarkMode ? 'Change theme to light mode' : 'Change theme to dark mode'}
            onClick={handleTheme}
        >
            {isDarkMode ? <Moon /> : <Sun />}
        </IconButton>
    );
};
