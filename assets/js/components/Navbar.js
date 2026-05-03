export default class Navbar {
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

    setMenuColor() {
        if (!this.isOpen) {
            let hex = '#';
            const chars = '0123456789ABCDEF';
            for (let i = 0; i < 6; i++) {
                hex += chars[Math.floor(Math.random() * 16)];
            }
            this.menuContainer.style.backgroundColor = hex;
        } else {
            // Open → black
            this.menuContainer.style.backgroundColor = "#1A1A1A";
        }
    }

    toggleMenu() {
        this.isOpen ? this.closeMenu() : this.openMenu();
    }

    openMenu() {
        this.menuContainer.style.width = "100vw";
        this.showMenuItems();
        this.isOpen = true;
        this.setMenuColor();
    }

    closeMenu() {
        this.menuContainer.style.width = "5px";
        this.hideMenuItems();
        this.isOpen = false;
        this.setMenuColor();
    }

    hideMenuItems() {
        this.menuItems.forEach(item => item.classList.add("hidden"));
    }

    showMenuItems() {
        this.menuItems.forEach(item => item.classList.remove("hidden"));
    }
}
