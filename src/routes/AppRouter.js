import { Route, Routes } from "react-router-dom";
import EyeAccountCreationPage from "../pages/eyeAccount/EyeAccountCreationPage";
import EyeAccountListingPage from "../pages/eyeAccount/EyeAcountListingPage";

// routes
const routes = [
  {
    path: "*",
    exact: true,
    element: () => "Page Not Found",
  },
  {
    path: "/",
    exact: true,
    element: () => "Hub page TBC",
  },
  {
    path: "/dashboard",
    exact: true,
    element: () => "Dashboard",
  },
  {
    path: "/eyeAccount",
    exact: true,
    element: () => <EyeAccountListingPage />,
  },
  {
    path: "/headmate-meeting-space",
    exact: true,
    element: () => "Headmate Meeting Space",
  },
  {
    path: "/system-map",
    exact: true,
    element: () => "System Map",
  },
  {
    path: "/expressway",
    exact: true,
    element: () => "Expressway",
  },
  {
    path: "/reminders",
    exact: true,
    element: () => "Reminders",
  },
  {
    path: "/system-rules",
    exact: true,
    element: () => "body1" > "System Rules",
  },
  {
    path: "/appreciation-station",
    exact: true,
    element: () => "Appreciation Station",
  },
  {
    path: "/treatment-hub",
    exact: true,
    element: () => "Treatment Hub",
  },
  {
    path: "/resources",
    exact: true,
    element: () => "Resources",
  },
  {
    path: "/guide",
    exact: true,
    element: () => "Guide",
  },
  {
    path: "/settings",
    exact: true,
    element: () => "Settings",
  },
  {
    path: "/leave-a-review",
    exact: true,
    element: () => "Leave a Review",
  },
  {
    path: "/sign-out",
    exact: true,
    element: () => "Sign Out",
  },
  {
    path: "/eyeAccount/new",
    exact: true,
    element: () => <EyeAccountCreationPage />,
  },
];

const AppRouter = () => {
  return (
    <Routes>
      {routes.map((route) => (
        <Route path={route.path} element={route.element()} key={route.path} />
      ))}
    </Routes>
  );
};

export default AppRouter;
