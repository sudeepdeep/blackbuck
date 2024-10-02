import ReactDOM from "react-dom/client";
import { QueryClient, QueryClientProvider } from "react-query";
import { Provider } from "react-redux";
import { ToastContainer } from "react-toastify";
import App from "./App";
import Helmet from "./components/Helmet";
import "./index.css";
import { store } from "./utils/store";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <Provider store={store}>
    <ToastContainer />
    <Helmet
      appTitle="HOME | BLACKBUCK"
      favicon={
        "https://firebasestorage.googleapis.com/v0/b/woid-582b2.appspot.com/o/snapnews.png?alt=media&token=ecf9f9ce-cc18-4035-8f44-ba7339640204"
      }
      description=""
    />
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </Provider>
);
