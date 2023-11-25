type Modes = Record<string, string | boolean>;

export const classNames = (cls: string, additional: Array<string> = [], modes: Modes = {}) => {
	const modesClasses = Object.entries(modes)
		.filter(([className, value]) => Boolean(value))
		.map(([className]) => className);

	return [cls, ...additional.filter(Boolean), ...modesClasses].join(' ');
};
