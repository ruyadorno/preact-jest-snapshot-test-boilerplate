const render = require('preact-render-to-string');
const Thing = require('../thing');

describe('Thing component', () => {
	it('should render with a provided name', () => {
		const tree = render(
			<Thing name="Lorem Ipsum" />
		);
		expect(tree).toMatchSnapshot();
	});
	it('should render a thing containing a link', () => {
		const tree = render(
			<Thing name="Lorem Ipsum" link="https://mobile.twitter.com"/>
		);
		expect(tree).toMatchSnapshot();
	});
});

