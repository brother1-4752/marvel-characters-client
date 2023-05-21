import { ThemeProvider } from "styled-components";
import DarkMode from "./components/DarkMode";
import GlobalStyle from "./GlobalStyle";
import { useRecoilValue } from "recoil";
import { darkMode, lightMode } from "./theme";
import { isDarkState } from "./atoms";
import { RouterProvider } from "react-router-dom";
import { router } from "./Router";

function App() {
  const isDark = useRecoilValue(isDarkState);

  return (
    <ThemeProvider theme={isDark ? darkMode : lightMode}>
      <DarkMode />
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
