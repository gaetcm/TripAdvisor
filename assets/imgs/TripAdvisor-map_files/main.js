const $ = document;
$.addEventListener("DOMContentLoaded", () => {
  let e = $.querySelector(".modal"),
    t = $.querySelector("body"),
    s = $.querySelector("header");
  $.querySelector("#contact-form"),
    $.querySelector("#submit-btn"),
    window.addEventListener("scroll", () => {
      0 !== window.scrollY
        ? s.classList.add("bordered")
        : s.classList.remove("bordered");
    }),
    $.querySelector(".btn-signup").addEventListener("click", () => {
      e.classList.remove("hidden"), t.classList.add("disable");
    }),
    $.querySelector(".icon-times").addEventListener("click", () => {
      e.classList.add("hidden"), t.classList.remove("disable");
    });
  let r = $.querySelector("#surprise");
  r.addEventListener("click", () => {
    let e = r.getAttribute("src");
    "./assets/img/favicon-tripadvisor.svg" === e
      ? r.setAttribute("src", "./assets/img/logo.png")
      : r.setAttribute("src", "./assets/img/favicon-tripadvisor.svg");
  });
});
