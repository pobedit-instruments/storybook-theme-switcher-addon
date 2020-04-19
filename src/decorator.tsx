import React from 'react';
import {makeDecorator} from '@storybook/addons';
import {ThemeProvider} from './components/provider';
import {PARAM_KEY} from './config';

export const withTheme = makeDecorator({
    name: 'withTheme',
    parameterName: PARAM_KEY,
    skipIfNoParametersOrOptions: false,
    wrapper: (getStory, context) => <ThemeProvider>{getStory(context)}</ThemeProvider>
});

