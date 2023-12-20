import { useContext } from 'react';
import { ThemeContext } from 'app/providers/ThemeProvider';
import { LOCAL_STORAGE_THEME_KEY, Themes } from './ThemeContext';

export interface IUseTheme {
	theme: Themes;
	toggleTheme: () => void;
}

const useTheme = (): IUseTheme => {
	const { theme, setTheme } = useContext(ThemeContext);

	const toggleTheme = () => {
		const newTheme = theme === Themes.LIGHT ? Themes.DARK : Themes.LIGHT;
		setTheme(newTheme);
		document.documentElement.setAttribute('data-theme', newTheme);
		localStorage.setItem(LOCAL_STORAGE_THEME_KEY, newTheme);
	};

	return { theme, toggleTheme };
};

export default useTheme;
