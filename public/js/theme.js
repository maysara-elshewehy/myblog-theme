(() => {
    "use strict";
    const THEME = "dark";

    const body = document.body;

    const initTheme = () => {
        document.documentElement.classList.add(THEME);
        document.documentElement.classList.remove("light");
    };

    // init theme ASAP, then do the rest.
    initTheme();
    requestAnimationFrame(() => body.classList.remove("notransition"));

    window.addEventListener("DOMContentLoaded", () => {
        // Blur the content when the menu is open
        const cbox = document.getElementById("menu-trigger");

        cbox.addEventListener("change", function () {
            const area = document.querySelector(".wrapper");
            if (this.checked) return area.classList.add("blurry");
            area.classList.remove("blurry");
        });
    });
})();
