export default class Menu {
    constructor() {
        this.menuArrow = document.querySelector(".menu-arrow");
        this.menuContainer = document.querySelector(".menu-container");
        this.menuItems = document.querySelectorAll(".menu-item");
        this.closeBtn = document.querySelector(".closeBtn");

        this.isOpen = false;

        this.init();
    }

    init() {
        this.hideMenuItems();
        this.menuArrow.addEventListener("click", () => this.toggleMenu());
        if (this.closeBtn) {
            this.closeBtn.addEventListener("click", () => this.toggleMenu());
        }
        this.menuItems.forEach(item => {
            item.addEventListener("click", () => this.closeMenu());
        });

    }

    toggleMenu() {
        this.isOpen ? this.closeMenu() : this.openMenu();
    }

    openMenu() {
        this.menuContainer.style.width = "100vw";
        this.showMenuItems();
        this.isOpen = true;
    }

    closeMenu() {
        this.menuContainer.style.width = "2px";
        this.hideMenuItems();
        this.isOpen = false;
    }

    hideMenuItems() {
        this.menuItems.forEach(item => item.classList.add("hidden"));
    }

    showMenuItems() {
        this.menuItems.forEach(item => item.classList.remove("hidden"));
    }
}
