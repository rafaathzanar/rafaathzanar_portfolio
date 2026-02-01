import { useTheme } from "../context/ThemeContext";

const ThemeToggle = ({ className }) => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className={`relative w-10 h-10 flex items-center justify-center rounded-full transition-colors ${className || ""}`}
      style={{
        backgroundColor: theme === "dark" ? "#1B1B2E" : "#e5e5eb",
      }}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
    >
      {/* Sun icon - shown in dark mode */}
      <svg
        className={`w-5 h-5 transition-all duration-300 absolute ${
          theme === "dark" ? "opacity-100 rotate-0" : "opacity-0 rotate-90"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="#FFC876"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
        />
      </svg>
      {/* Moon icon - shown in light mode */}
      <svg
        className={`w-5 h-5 transition-all duration-300 absolute ${
          theme === "light" ? "opacity-100 rotate-0" : "opacity-0 -rotate-90"
        }`}
        fill="none"
        viewBox="0 0 24 24"
        stroke="#5c5c7a"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={2}
          d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
        />
      </svg>
    </button>
  );
};

export default ThemeToggle;
