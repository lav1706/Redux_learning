import { createStore } from "https://cdn.skypack.dev/redux@5.0.1";
import cookieReducer from "./cookieReducer.js";

const store = createStore(cookieReducer);

store.subscribe(() => {
  console.log(store.getState());
  updateCookieCount();
});

const addCookie = document.querySelector("#addCookie");
const removeCookie = document.querySelector("#removeCookie");
const cookie = document.querySelector("#cookie");

const addCookieHandler = () => {
  store.dispatch({ type: "cookies/added" });
};

const removeCookieHandler = () => {
  store.dispatch({ type: "cookies/remove" });
};

addCookie.addEventListener("click", addCookieHandler);
removeCookie.addEventListener("click", removeCookieHandler);

function updateCookieCount() {
  cookie.textContent = store.getState().value;
}

updateCookieCount();
