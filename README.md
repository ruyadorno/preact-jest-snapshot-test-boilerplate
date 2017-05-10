# preact-jest-snapshot-test-boilerplate

[![Build Status](https://travis-ci.org/ruyadorno/preact-jest-snapshot-test-boilerplate.svg?branch=master)](https://travis-ci.org/ruyadorno/preact-jest-snapshot-test-boilerplate)
[![license](http://img.shields.io/badge/license-MIT-blue.svg?style=flat)](https://raw.githubusercontent.com/ruyadorno/preact-jest-snapshot-test-boilerplate/master/LICENSE)

A boilerplate for a very minimal setup running [Jest snapshot](https://facebook.github.io/jest/docs/snapshot-testing.html) tests on [Preact](https://github.com/developit/preact) components using [preact-render-to-string](https://github.com/developit/preact-render-to-string) rendering.

## Requirements

The following are the very minimal requirements in order to use the Jest snapshot tests.

- Jest
 - `jest-serializer-html-string` plugin dependency
 - extra config added on `package.json` file
- Preact
 - `preact-render-to-string`
- Babel
 - `babel-plugin-transform-react-jsx`

## Example walkthrough

### Component example

A very simple stateless functional component is defined on the `./thing.js` file:

```js
module.exports = ({ name, link }) => (
	<a href={ link }>{ name }</a>
);
```

### Snapshot testing

The boilerplate on how to snapshot-test using Jest is available on `./__tests__/thing.js`:

```js
const render = require('preact-render-to-string');
const Thing = require('../thing');

describe('Thing component', () => {
	it('should render with a provided name', () => {
		const tree = render(
			<Thing name="Lorem Ipsum" />
		);
		expect(tree).toMatchSnapshot();
	});
});
```

### Snapshots

Snapshot of expected rendering are stored on `./__tests__/__snapshots__/thing.js.snap`:

```
// Jest Snapshot v1, https://goo.gl/fbAQLP

exports[`Thing component should render a thing containing a link 1`] = `<a href="https://mobile.twitter.com">Lorem Ipsum</a>`;
```

## Running tests

If you need more info about Jest please visit their [documentation](https://facebook.github.io/jest/docs/getting-started.html). In order to run the tests from this example just run:

`npm test`

### Updating snapshots

Keep in mind that when working with snapshots and modifying components, the snapshots needs to be updated in order for tests to pass. To do so just run:

`npm test -- -u`

## License

MIT © [Ruy Adorno](http://ruyadorno.com)

