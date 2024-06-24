import { atom } from "recoil";

const nameState = atom({
    key: "nameState",
    default: "",
})
const passwordState = atom({
    key: "passwordState",
    default: ""
})
const emailState = atom({
    key: "emailState",
    default: ""
})
const loadingState = atom({
    key: "loadingState",
    default: false
})

export { nameState, passwordState, emailState, loadingState };