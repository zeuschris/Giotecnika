import { useTheme } from '../../Context/ThemeContext';
import { BsSun, BsMoon } from 'react-icons/bs';
import './ThemeToggle.scss';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle theme"
      title={theme === 'light' ? 'Activar modo oscuro' : 'Activar modo claro'}
    >
      <div className="toggle-icon-wrapper">
        {theme === 'light' ? (
          <BsMoon className="toggle-icon moon" />
        ) : (
          <BsSun className="toggle-icon sun" />
        )}
      </div>
    </button>
  );
};

export default ThemeToggle;