import { Provider } from "react-redux";
import { store } from "../utils/store";
import { Outlet } from "react-router-dom";

function AppLayout() {
  return (
    <Provider store={store}>
      <div className="min-h-[100vh] text-white font-poppins h-auto bg-[#000000]">
        <Outlet />
      </div>
    </Provider>
  );
}

export default AppLayout;
