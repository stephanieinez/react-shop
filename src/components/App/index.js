import { ThemeProvider } from "styled-components/macro";
import { Header } from "../Header";
import { ProductGrid } from "../ProductGrid";
import { ProductProvider } from "../../context/ProductContext";
import { theme } from "../../theme";
import GlobalStyles from "../../components/GlobalStyles";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <ProductProvider>
        <Header />
        <ProductGrid />
      </ProductProvider>
      <GlobalStyles />
    </ThemeProvider>
  );
}

export default App;
