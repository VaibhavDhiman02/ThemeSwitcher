import { useEffect, useState } from "react";
import { ThemeProvider } from './context/Theme';
import Card from '../src/components/Card';
import ThemeBtn from '../src/components/ThemeBtn';


function App() {

  const [themeMode , setThemeMode] = useState("light");

  const darkTheme = () => {
    setThemeMode("dark");
  }

  const LightTheme = () => {
    setThemeMode("light");
  }

  useEffect(() => {

    let html = document.querySelector("html");
    html.classList.remove("light" , "dark");
    html.classList.add(themeMode);

  } , [themeMode] );

  return (
    <ThemeProvider value={{themeMode , darkTheme , LightTheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
          <div className="w-full">
              <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                  <ThemeBtn />
              </div>

              <div className="w-full max-w-sm mx-auto">
                  <Card />
              </div>
          </div>
      </div>
    </ThemeProvider>
  )
}

export default App;