import { createSystem, defaultConfig } from "@chakra-ui/react"

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
heading: "Inter, sans-serif",
body: "Inter, sans-serif",
},
    }
}
});


