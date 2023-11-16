type Modes = Record<string, string | boolean>;

export const classNames = (cls: string, additional?: string[], modes?: Modes) => {
	return [
		cls,
		...additional,
		modes
			? Object.entries(modes)
					.filter(([className, value]) => Boolean(value))
					.map(([className]) => className)
			: ''
	].join(' ');
};

// const className = classNames('button', { hovered: true, visible: false }, ['btn']);
