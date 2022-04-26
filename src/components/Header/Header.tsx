import useDarkMode from '../../hooks/useDarkMode';

export const Header = () => {
    const [darkTheme, setDarkTheme] = useDarkMode();
    const handleMode = () => setDarkTheme(!darkTheme);
  
    return (
      <header className='flex justify-between items-center w-full'>
        <h1 className='uppercase tracking-[0.3em] text-5xl font-bold text-white'>Todo</h1>
        <button className='h-full aspect-square' onClick={handleMode}>
          <div className='theme-toggle-icon relative h-full w-full'></div>
        </button>
      </header>
    )
  }