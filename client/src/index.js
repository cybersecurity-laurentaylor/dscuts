import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider } from "@chakra-ui/react";
import App from "./App";

import { system } from "./theme"; // your custom system
import { Provider } from "./components/ui/provider";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider >   {/* <-- THIS is the correct v3 provider */}
      <App />
    </Provider>
  </React.StrictMode>
);

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { ChakraProvider } from "@chakra-ui/react";
// import { system } from "./theme";

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <ChakraProvider value={system}>
//     <App />
//   </ChakraProvider>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App.js";

// import { ChakraProvider } from "@chakra-ui/react";
// import { system } from "./theme/index.js";   // <-- your v3 system theme

// ReactDOM.createRoot(document.getElementById("root")).render(
//   <React.StrictMode>
//     <Provider >   {/* <-- THIS is the correct v3 provider */}
//       <App />
//     </Provider>
//   </React.StrictMode>
// );

// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import { Provider } from "./components/ui/provider";

// import { system } from "./theme";   // <-- your v3 system theme

// const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(
//   <React.StrictMode>
//     <Provider value={system}>   {/* <-- REQUIRED for Chakra v3 */}
//       <App />
//     </Provider>
//   </React.StrictMode>
// );
