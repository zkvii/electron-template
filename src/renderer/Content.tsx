import './Content.scss';

const ToggleTheme = async () => {
  await window.darkMode.toggle();
};

export function Content() {
  return (
    <div className="content">
      <h1>Electron React Boilerplate</h1>
      <button onClick={ToggleTheme}>Toggle Theme</button>
    </div>
  );
}
