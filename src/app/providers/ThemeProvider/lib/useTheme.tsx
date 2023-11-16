import { useContext } from 'react';
import { LOCAL_STORAGE_THEME_KEY, ThemeContext, Themes } from 'app/providers/ThemeProvider';

export interface IUseTheme {
	theme: Themes;
	toggleTheme: () => void;
}

const useTheme = (): IUseTheme => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
		setTheme(newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
};

export default useTheme;
