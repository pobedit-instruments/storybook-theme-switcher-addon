import React from 'react';
import addons, {types} from '@storybook/addons';
import {ThemeSwitcher} from './components/switcher';
import {ADDON_ID, PARAM_KEY} from './config';

addons.register(ADDON_ID, () => {
    addons.add(ADDON_ID, {
        title: 'Theme Switcher',
        type: types.TOOL,
        paramKey: PARAM_KEY,
        render: () => <ThemeSwitcher />
    });
});
