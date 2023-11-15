type Modes = Record<string, string | boolean>;

export const classNames = (cls: string, modes?: Modes, additional?: string[]) => {
	return [
		cls,
		...additional,
		Object.entries(modes)
			.filter(([className, value]) => Boolean(value))
			.map(([className]) => className)
	].join(' ');
};

// const className = classNames('button', { hovered: true, visible: false }, ['btn']);
