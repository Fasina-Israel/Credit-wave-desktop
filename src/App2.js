import Routes from "./routes";
import ThemeCustomization from "./themes";
import ScrollTop from "./components/ScrollTop";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import { persistor, store } from "./reduxStore";
import { PersistGate } from "redux-persist/integration/react";

// ==============================|| APP - THEME, ROUTER, LOCAL  ||============================== //

const App2 = () => (
  <Provider store={store}>
    <PersistGate persistor={persistor}>
      
    <ThemeCustomization>
      <Router>
        <ScrollTop>
          <Routes />
        </ScrollTop>
      </Router>
    </ThemeCustomization> 
    </PersistGate>
  </Provider>
);

export default App2;
