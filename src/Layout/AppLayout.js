import { Provider } from "react-redux";
import { store } from "../utils/store";

function AppLayout() {
  return (
    <Provider store={store}>
      <div className="min-h-[100vh] h-auto bg-[#0D1117]">
        <div className="logo h-[60px] md:hidden flex justify-center items-center">
          Hai
        </div>
      </div>
    </Provider>
  );
}

export default AppLayout;
