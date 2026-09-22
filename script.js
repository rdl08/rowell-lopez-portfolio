document.addEventListener("DOMContentLoaded", function () {

    const root = document.documentElement;
    const toggle = document.getElementById("themeToggle");

    if (!toggle) {
        return;
    }

    const savedTheme = localStorage.getItem("rowell-theme");

    if (savedTheme) {
        root.setAttribute("data-theme", savedTheme);
    }

    function updateToggle() {
        const isDark = root.getAttribute("data-theme") === "dark";

        toggle.innerHTML = isDark ? "☀" : "☾";

        toggle.setAttribute(
            "aria-label",
            isDark
                ? "Switch to light mode"
                : "Switch to dark mode"
        );
    }

    toggle.addEventListener("click", function () {

        const isDark =
            root.getAttribute("data-theme") === "dark";

        const newTheme = isDark ? "light" : "dark";

        root.setAttribute("data-theme", newTheme);

        localStorage.setItem(
            "rowell-theme",
            newTheme
        );

        updateToggle();
    });

    updateToggle();

});