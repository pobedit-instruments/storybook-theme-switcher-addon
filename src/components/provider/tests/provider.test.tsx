import React from 'react';
import {mount} from 'enzyme';

import {ThemeProvider} from '../provider';

describe('Test Button component', () => {
    it('renders', () => {
        const wrapper = mount(<ThemeProvider>Button</ThemeProvider>);

        expect(wrapper).toMatchSnapshot();
    });

    // it('user click on button', () => {
    //     const eventHandler = jest.fn();
    //     const wrapper = mount(<Button onClick={eventHandler} />);
    //
    //     wrapper.simulate('click');
    //
    //     expect(eventHandler).toHaveBeenCalled();
    // });
});
