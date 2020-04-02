const headerHeight = "5rem";

module.exports = {
  theme: {
    colors: {
      // white: "#f1f2ed",
      white: "#f5f3ef",
      yellow: "#ede38a",
      black: "#232010",
      blue: "#517789",
      brown: "#5c482b",
      green: "#76833e",
      transparent: "transparent"
    },
    fontFamily: {
      title: ["Alegreya Sans", "Times New Roman", "serif"],
      body: ["Lora", "Helvetica", "san serif"]
    },
    extend: {
      opacity: {
        "80": ".8",
        "90": ".9"
      },
      spacing: {
        "almost-full": "90vh",
        header: headerHeight
      },
      inset: {
        headerHeight: headerHeight
      },
      transitionProperty: {
        height: "height",
        opacity: "opacity"
      }
    }
  },
  variants: {
    height: ["group-hover"],
    opacity: ["group-hover"],
    color: ["hover"],
    fontWeight: ["hover"],
    outlineColor: ["focus"]
  }
};
