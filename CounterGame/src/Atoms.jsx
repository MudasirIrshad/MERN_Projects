import { atom } from "recoil";

const countState = atom({
  key: "countState",
  default: 0,
});
export { countState };
