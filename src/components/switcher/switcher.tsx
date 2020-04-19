import React from 'react';
import {IconButton} from '@storybook/components';
import {useTheme} from '../../hooks';
import {Sun, Moon} from './icons';

type Props = {};

export const ThemeSwitcher: React.FunctionComponent<Props> = () => {
    const [isDarkMode, handleTheme] = useTheme();

    return (
        <IconButton
            key="dark-mode"
            active={isDarkMode}
            title={isDarkMode ? 'Change theme to light mode' : 'Change theme to dark mode'}
            onClick={handleTheme}
        >
            {isDarkMode ? <Moon /> : <Sun />}
        </IconButton>
    );
};
