type DeepPartial<T> = T extends object
	? {
			[P in keyof T]?: DeepPartial<T[P]>;
			// eslint-disable-next-line no-mixed-spaces-and-tabs
	  }
	: T;

declare module '*.scss' {
	interface IClassNames {
		[className: string]: string;
	}
	const classNames: IClassNames;
	export = classNames;
}
