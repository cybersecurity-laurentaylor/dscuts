import { createSystem, defaultConfig } from "@chakra-ui/react"
import "@fontsource/inter/400.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/allura/400.css";
export const system = createSystem(defaultConfig,{
theme: {
    tokens: {
        colors: {
gold: {
50: "#fff8db",
100: "#fcefb2",
200: "#f7e589",
300: "#f2db60",
400: "#edd237",
500: "#d4af37", // Primary gold
600: "#b38f2c",
700: "#927022",
800: "#715118",
900: "#50320e",
},
},
fonts: {
heading: {value: "Allura, cursive"},
body: {value: "Inter, sans-serif"},
},
    }
}
});


// import { createSystem, defineConfig, defineTokens } from "@chakra-ui/react";
// import "@fontsource/inter/400.css";
// import "@fontsource/inter/600.css";
// import "@fontsource/inter/700.css";

// const tokens = defineTokens({
//   colors: {
//     gold: {
//       500: { value: "#D4AF37" },
//     },
//   },
//   fonts: {
//     heading: { value: "Inter, sans-serif" },
//     body: { value: "Inter, sans-serif" },
//   },
// });

// const config = defineConfig({
//   theme: {
//     tokens,
//   },
// });

// export const system = createSystem(config);
