# @pobedit/storybook-theme-switcher-addon

[![License](https://img.shields.io/badge/license-MIT-brightgreen.svg)](LICENSE.txt)

This addon can be used to switch themes of stories in [Storybook](https://storybook.js.org/).

![Light theme](./src/static/example-light.png)

![Dark Theme](./src/static/example-dark.png)


## Installation

Install with npm or Yarn:

**npm**:

```
npm install @pobedit/storybook-theme-switcher-addon --save
```

**Yarn**:

```
yarn add @pobedit/storybook-theme-switcher-addon
```

## Basic usage

**.storybook/addons.ts**:

```js
import '@pobedit/storybook-theme-switcher-addon/register';
```

**.storybook/config.tsx**:

```js
import {configure, addDecorator} from '@storybook/react';

addDecorator(withTheme);
```

**Component**:

```typescript
import React, {PureComponent} from 'react';
import { ThemeContext, ThemeColor } from '@pobedit/storybook-theme-switcher-addon'; 
import {background} from '@storybook/theming';

export enum Color {
    dark = '#2B3648',
    light = '#fafafa'
}

class StoryWrapper extends PureComponent<null> {
    static contextType: React.Context<string> = ThemeContext;

    render() {
        return <div style={{backgroundColor: ThemeColor[this.context]}}> { YOUR_STORY } </div>;
    }
}
```

## Contributing

Feel free to submit a pull request if you find any bugs.
Please make sure all commits are properly documented.

## Tests

```
npm test
```

## Publishing

```
npm publish --access public --verbose
```

## License

MIT
