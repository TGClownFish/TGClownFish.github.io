//const { document } = require("postcss");

(function () {
    "use strict";

    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");
    navToggle.addEventListener("click", function () {
      root.classList.toggle("show-nav");
    });

    // const eventPP = document.querySelector('#js-eventPP');

    // if(eventPP) {
    //     const eventOpenBtn = document('#js-eventOpenBtn');

    //     eventOpenBtn.addEventListener("click", function() {
    //         root.classList.add("show-event-popup");
    // });

    // eventPP.addEventListener("click", function(event){
    //     if (
    //         event.target === this || 
    //         event.target.classList.contains("js-ppCloseBtn")
    //     ) {
    //         root.classList.remove("show-event-popup");
    //     }
    // });
    // }
})();