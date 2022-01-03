import {Box} from '@mui/material';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { CssBaseline } from '@mui/material';
import { ThemeProvider } from '@mui/material/styles';
import lightTheme from "./styles/main-theme";
import Navbar from "./components/navbar/navbar";
import HomePageLayout from "./components/layout/home-page-layout";
import Homepage from "./components/pages/homepage";
import ManShoesPage from "./pages/mens-shoes-page";
import WomensShoesPage from "./pages/womens-shoes-page";
import Annoucment from './components/advertisement/annoucment';

function App() {

  return (
   <ThemeProvider theme={lightTheme}>
        <CssBaseline>
           <BrowserRouter>
           <Annoucment/>
              <Navbar />
                <Routes>
                    <Route path="/" element={<HomePageLayout />}>
                      <Route index element={<Homepage />} />
                      <Route path="man-shoes-page" element={<ManShoesPage />} />
                      <Route path="women-shoes-page" element={<WomensShoesPage />} />
                    </Route>
                </Routes>
           </BrowserRouter>
        </CssBaseline>
   </ThemeProvider>


  );
}

export default App;
