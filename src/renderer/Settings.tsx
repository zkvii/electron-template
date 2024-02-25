

const ToggleTheme = async () => {
  await window.darkMode.toggle();
};

export function Settings() {
  return (
    <div>
      <h1>Settings</h1>
      <button onClick={ToggleTheme}>Toggle Theme</button>

    </div>
  );
}
