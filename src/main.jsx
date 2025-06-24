import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import routes from "./routes";
import { RouterProvider } from "react-router";
import "./i18n";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});
if (!queryClient.getQueryData(["cart"])) {
  queryClient.setQueryData(["cart"], []);
}
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ToastContainer position="top-right" autoClose={2000} />
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={routes}>
        <App />
      </RouterProvider>
    </QueryClientProvider>
  </StrictMode>
);
