import { classNames } from './classNames';

describe('className', () => {
	test('add class', () => {
		expect(classNames('class')).toBe('class');
	});

	test('add class with additional', () => {
		const condition = classNames('class', ['class1', 'class2']);
		const expected = 'class class1 class2';

		expect(condition).toBe(expected);
	});

	test('add class with modes', () => {
		const condition = classNames('class', [], { filtered: true, collapsed: true });
		const expected = 'class filtered collapsed';

		expect(condition).toBe(expected);
	});

	test('add class with modes has false item', () => {
		const condition = classNames('class', [], { filtered: true, collapsed: false });
		const expected = 'class filtered';

		expect(condition).toBe(expected);
	});

	test('add class with all arguments', () => {
		const condition = classNames('class', ['class1', 'class2'], { filtered: true, collapsed: true });
		const expected = 'class class1 class2 filtered collapsed';

		expect(condition).toBe(expected);
	});

	test('add class with all arguments have undefined args', () => {
		const condition = classNames('class', ['class1', undefined], { filtered: true, collapsed: undefined });
		const expected = 'class class1 filtered';

		expect(condition).toBe(expected);
	});
});
