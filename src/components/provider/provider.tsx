import React, {ReactNode, useState} from 'react';
import {getTheme} from '../../utils/storage';
import {listenTheme} from '../../hooks';
import {Theme} from '../../config';

type Props = {
    children: ReactNode;
};

export const ThemeContext = React.createContext(Theme.LIGHT.toString());

export const ThemeProvider: React.FunctionComponent<Props> = (props) => {
    const [theme, setTheme] = useState<string>(getTheme());

    listenTheme(() => {
        setTheme(getTheme());
    });

    return <ThemeContext.Provider {...props} value={theme} />;
};
