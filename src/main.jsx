import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import Home from "./Components/Home/Home.jsx";
import Gallery from "./Components/Gallery/Gallery.jsx";
import Team from "./Components/Team/Team.jsx";
import Faq from "./Components/FAQ/Faq.jsx";
import Error from "./Components/Error/Error.jsx";

// const router = createBrowserRouter([
//   {
//     path:"/",
//     element:<App/>,
//     children:[
//       {
//         path:"",

//         element:<Home/>

//       },
//       {
//         path:"Gallery",
//         element:<Gallery/>
//       },
//       {
//         path:"Features",
//         element:<Features/>
//       },
//       {
//         path:"Roadmap",
//         element:<Roadmap/>
//       },
//       {
//         path:"Team",
//         element:<Team/>
//       },
//       {
//         path:"Faq",
//         element:<Faq/>
//       },
//       {
//         element:<Error/>
//       }

//     ]
//   }
// ])
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route path="" element={<Home />} />
      <Route path="Gallery" element={<Gallery />} />
      <Route path="Team" element={<Team />} />
      <Route path="Faq" element={<Faq />} />
      <Route path="*" element={<Error/>} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
