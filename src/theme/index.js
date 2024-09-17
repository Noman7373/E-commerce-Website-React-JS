import { Button, extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

export const theme = extendTheme(
  {
    colors: {
      purple: {
        500: "#5F00d9",
      },
      p: {
        purple: "#5F00d9",
        black: "#171717",
      },
      black: {
        5: "#f3f7f7",
        10: "#eeeef4",
        20: "#D8DDE2",
        40: "#BABAC4",
        60: "#797E82",
        80: "#535D66",
      },

      fonts: {
        heading: "Ubuntu",
        body: "Ubuntu",
      },
      // 1. Using a style object
      textStyle: {
        h1: {
          fontSize: {
            base: "30px",
            md: "32px",
          },
          color: "p.black",
          lineHeight: {
            base: "34px",
            md: "36px",
          },
        },
        h2: {
          fontSize: {
            base: "24px",
            md: "28px",
          },
          color: "p.black",
          lineHeight: {
            base: "28px",
            md: "32px",
          },
        },
        h3: {
          fontSize: {
            base: "22px",
            md: "24px",
            xl: "32px",
          },
          color: "p.black",
          lineHeight: {
            base: "26px",
            md: "28px",
            xl: "36px",
          },
        },
        h5: {
          fontSize: {
            base: "18px",
            md: "20px",
          },
          color: "p.black",
          lineHeight: {
            base: "22px",
            md: "24px",
          },
        },
        h6: {
          fontSize: {
            base: "16px",
            md: "18px",
          },
          color: "p.black",
          lineHeight: {
            base: "20px",
            md: "22px",
          },
        },
      },
      fontSize: {
        xs: "12px",
        sm: "14px",
        base: { base: "16px", md: "18px" },
        lg: { base: "18px", md: "20px" },
        xl: { base: "20px", md: "22px" },
        "2xl": { base: "22px", md: "24px" },
        "3xl": { base: "24px", md: "28px" },
        "4xl": { base: "30px", md: "32px" },
      },
      styles: {
        global: {
          "html, body": {
            bg: "white",
          },
        },
      },
    },
    components: {
      Button: {
        baseStyle: {
          fontWeight: "bold",
          borderRadius: "10px",
        },
      },
      FormLabel: {
        baseStyle: {
          fontSize: "sm",
        },
      },
      variants: {
        outlines: {
          field: {
            h: "28px",
            borderRadius: "8px",
            fontSize: "sm",
            colorScheme: "blue",
          },
        },
      },
    },
  },
  withDefaultColorScheme({ colorScheme: "purple" })
);
