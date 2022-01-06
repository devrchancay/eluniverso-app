export const screens = Object.freeze({
  HOME: "Home",
  START: "Start",
});

export const api = Object.freeze({
  endpoint:
    "https://eluniverso-el-universo-sandbox.cdn.arcpublishing.com/pf/api/v3",
});

export const system = Object.freeze({
  name: "El Universo",
  siteName: "el-universo",
});

export const fonts = {
  ["Mulish-Regular"]: require("../assets/fonts/Mulish-Regular.ttf"),
  ["Mulish-SemiBold"]: require("../assets/fonts/Mulish-SemiBold.ttf"),
  ["Mulish-Bold"]: require("../assets/fonts/Mulish-Bold.ttf"),
};

export default {
  screens,
  api,
  system,
};
