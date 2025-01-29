//const { document } = require("postcss"); я не знаю откуда это взялось

(function () {
    "use strict";

    //логика для бургера на мобилках
    const root = document.documentElement;
    const navToggle = document.querySelector("#js-navToggle");
    navToggle.addEventListener("click", function () {
      root.classList.toggle("show-nav");
    });

    // логика для попапа "Заполните форму и мы подберем площадку"
    const eventPP = document.querySelector("#js-eventPP");
    if (eventPP) {
      const eventOpenBtn = document.querySelector("#js-eventOpenBtn");
      const closeEventPP = function (event) {
        function close() {
          document.removeEventListener("keyup", closeEventPP);
          eventPP.removeEventListener("click", closeEventPP);
          root.classList.remove("show-event-popup");
        }
        switch (event.type) {
          case "keyup":
            if (event.key === "Escape" || event.keyCode === 27) close();
            break;
          case "click":
            if (
              event.target === this ||
              event.target.classList.contains("js-ppCloseBtn")
            )
              close();
            break;
        }
      };
      eventOpenBtn.addEventListener("click", function () {
        root.classList.add("show-event-popup");
        document.addEventListener("keyup", closeEventPP);
        eventPP.addEventListener("click", closeEventPP);
      });
    }
})();