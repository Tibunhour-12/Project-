/**
 * Renders the Navigation Bar into a specific container.
 * @param {string} containerId - The ID of the div where the navbar should be injected.
 * @param {string} activePage - The name of the current page (to highlight the link).
 * Options: 'home', 'categories', 'about', 'mybook'
 */

function renderNavbar(containerId, activePage = "") {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Helper to determine if a link is active
  const getLinkClass = (pageName) => {
    const baseClass = "font-medium transition-colors duration-200";
    const activeClass = "text-primary font-bold";
    const inactiveClass = "text-primary hover:text-secondary";

    return activePage === pageName
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  // The HTML Template
  const navbarHTML = `
    <nav class="w-full z-50 bg-pure-white shadow-sm font-primary">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div class="flex justify-between items-center h-20">
                
                <!-- 1. LOGO -->
                <a href="/" class="flex-shrink-0 flex items-center gap-2 cursor-pointer decoration-0">
                  <img src="../img/Libreshelf.png" width="80">
                </a>

                <!-- 2. DESKTOP MENU -->
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="/" class="${getLinkClass("home")}">Home</a>
                    <!-- Note: link to other pages -->
                    <a href="/categories.html" class="${getLinkClass(
                      "categories"
                    )}">Categories</a>
                    <a href="/about.html" class="${getLinkClass(
                      "about"
                    )}">About Us</a>
                    <a href="/my-book.html" class="${getLinkClass(
                      "mybook"
                    )}">My Book</a>
                </div>

                <!-- 3. RIGHT ICONS & BUTTON -->
                <div class="hidden md:flex items-center gap-5">
                    <button class="text-dark-gray hover:text-primary transition-colors">
                        <i class="ph ph-moon text-2xl"></i>
                    </button>
                    <button class="text-dark-gray hover:text-red-500 transition-colors">
                        <i class="ph ph-heart text-2xl"></i>
                    </button>

                    <!-- Note: link to sign-in page --> 
                    <a href="./pages/signin.html" class="px-6 py-2.5 bg-primary text-pure-white font-medium rounded-lg hover:bg-secondary transition duration-300 shadow-md">
                        Sign In
                    </a>
                </div>

                <!-- 4. MOBILE MENU HAMBURGER -->
                <div class="md:hidden flex items-center gap-4">
                    <button id="mobile-menu-btn" class="text-primary focus:outline-none">
                        <i class="ph ph-list text-3xl"></i>
                    </button>
                </div>
            </div>
        </div>

        <!-- 5. MOBILE MENU DROPDOWN -->
        <div id="mobile-menu" class="mobile-menu md:hidden bg-pure-white shadow-lg overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out">
            <div class="px-4 py-4 space-y-3 flex flex-col">
                <a href="/" class="block px-4 py-2 rounded-lg ${
                  activePage === "home"
                    ? "bg-gray-50 text-primary font-bold"
                    : "text-primary hover:bg-gray-50"
                }">Home</a>
                <a href="/categories.html" class="block px-4 py-2 rounded-lg ${
                  activePage === "categories"
                    ? "bg-gray-50 text-primary font-bold"
                    : "text-primary hover:bg-gray-50"
                }">Categories</a>
                <a href="/about.html" class="block px-4 py-2 rounded-lg ${
                  activePage === "about"
                    ? "bg-gray-50 text-primary font-bold"
                    : "text-primary hover:bg-gray-50"
                }">About Us</a>
                <a href="/my-book.html" class="block px-4 py-2 rounded-lg ${
                  activePage === "mybook"
                    ? "bg-gray-50 text-primary font-bold"
                    : "text-primary hover:bg-gray-50"
                }">My Book</a>
                <hr class="border-gray-200">
                <a href="./html/signin.html" class="block text-center w-full px-6 py-3 bg-primary text-pure-white font-bold rounded-lg mt-2 hover:bg-secondary">
                    Sign In
                </a>
            </div>
        </div>
    </nav>
    `;

  // Inject HTML
  container.innerHTML = navbarHTML;

  // Attach Event Listeners for Mobile Menu
  const btn = container.querySelector("#mobile-menu-btn");
  const menu = container.querySelector("#mobile-menu");
  const icon = btn.querySelector("i");

  if (btn && menu) {
    btn.addEventListener("click", () => {
      if (menu.classList.contains("max-h-0")) {
        // Open Menu
        menu.classList.remove("max-h-0", "opacity-0");
        menu.classList.add("max-h-[500px]", "opacity-100");
        icon.classList.remove("ph-list");
        icon.classList.add("ph-x");
      } else {
        // Close Menu
        menu.classList.add("max-h-0", "opacity-0");
        menu.classList.remove("max-h-[500px]", "opacity-100");
        icon.classList.remove("ph-x");
        icon.classList.add("ph-list");
      }
    });
  }
}
