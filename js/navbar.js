/**
 * Renders the Navigation Bar into a specific container.
 * Uses robust "Depth Counting" to calculate relative paths automatically.
 * * @param {string} containerId - The ID of the div where the navbar should be injected.
 * @param {string} activePage - The name of the current page ('home', 'categories', 'about', 'mybook').
 */

function renderNavbar(containerId, activePage = "") {
  const container = document.getElementById(containerId);
  if (!container) return;

  // --- 1. ROBUST DEPTH COUNTING LOGIC ---

  // Get the current path (e.g., "/pages/auth/login.html" or "/index.html")
  const path = window.location.pathname;

  let pathPrefix = "."; // Default for root (index.html)

  // Logic:
  // 1. We assume your project structure puts all sub-pages inside a folder named "pages".
  // 2. We find where "/pages/" starts in the URL.
  // 3. We count how many slashes appear AFTER "/pages/".
  // 4. Each slash represents a deeper folder level requiring a "../" to go back up.

  if (path.includes("/pages/")) {
    // Split the path at "pages/"
    // Example: "/project/pages/auth/login.html" -> ["/project/", "auth/login.html"]
    const parts = path.split("/pages/");

    // The part after "pages/" tells us the depth
    // "auth/login.html" -> has 1 slash -> depth is 2 (pages + auth)
    // "about.html" -> has 0 slashes -> depth is 1 (pages)
    const subPath = parts[1];

    // Count slashes in the sub-path
    const slashCount = (subPath.match(/\//g) || []).length;

    // Base depth is 1 (because we are inside 'pages'), plus any extra folders (slashCount)
    const depth = 1 + slashCount;

    // Create the prefix string (e.g., "../" or "../../")
    pathPrefix = "../".repeat(depth);

    // Remove the trailing slash from the prefix if it exists (e.g. "../../" -> "../..")
    // to match standard relative linking styles, though keeping the slash is also valid HTML.
    // For cleaner code generation below, we'll keep the trailing slash and remove the leading dots' slash in the HTML if needed,
    // OR we just use it as is. Let's strip the last slash for cleaner joining:
    pathPrefix = pathPrefix.slice(0, -1);
  }

  // --- 2. HELPER FOR ACTIVE LINKS ---
  const getLinkClass = (pageName) => {
    const baseClass = "font-medium transition-colors duration-200";
    const activeClass = "text-primary font-bold";
    const inactiveClass = "text-primary hover:text-secondary";

    return activePage === pageName
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  // --- 3. HTML TEMPLATE ---
  // We use `${pathPrefix}/` before every link.

  const navbarHTML = `
    <nav class="w-full z-50 bg-pure-white shadow-sm font-primary">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div class="flex justify-between items-center h-20">
                
                <!-- LOGO -->
                <a href="${pathPrefix}/index.html" class="flex-shrink-0 flex items-center gap-2 cursor-pointer decoration-0">
                   <!-- Ensure images folder is accessible -->
                   <img src="${pathPrefix}/img/Libreshelf.png" width="80" alt="Logo">
                </a>

                <!-- DESKTOP MENU -->
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="${pathPrefix}/index.html" class="${getLinkClass(
    "home"
  )}">Home</a>
                    <a href="${pathPrefix}/pages/categories.html" class="${getLinkClass(
    "categories"
  )}">Categories</a>
                    <a href="${pathPrefix}/pages/about.html" class="${getLinkClass(
    "about"
  )}">About Us</a>
                    <a href="${pathPrefix}/pages/my-book.html" class="${getLinkClass(
    "mybook"
  )}">My Book</a>
                </div>

                <!-- RIGHT ICONS & BUTTON -->
                <div class="hidden md:flex items-center gap-5">
                    <button class="text-dark-gray hover:text-primary transition-colors">
                        <i class="ph ph-moon text-2xl"></i>
                    </button>
                    <button class="text-dark-gray hover:text-red-500 transition-colors">
                        <i class="ph ph-heart text-2xl"></i>
                    </button>
                    <!-- Sign In Link -->
                    <a href="${pathPrefix}/html/signin.html" class="px-6 py-2.5 bg-primary text-pure-white font-semibold rounded-lg hover:bg-secondary transition duration-300 shadow-md">
                        Sign In
                    </a>
                </div>

                <!-- MOBILE MENU HAMBURGER -->
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
                <a href="${pathPrefix}/index.html" class="block px-4 py-2 rounded-lg ${
    activePage === "home"
      ? "bg-gray-50 text-primary font-bold"
      : "text-primary hover:bg-gray-50"
  }">Home</a>
                <a href="${pathPrefix}/pages/categories.html" class="block px-4 py-2 rounded-lg ${
    activePage === "categories"
      ? "bg-gray-50 text-primary font-bold"
      : "text-primary hover:bg-gray-50"
  }">Categories</a>
                <a href="${pathPrefix}/pages/about.html" class="block px-4 py-2 rounded-lg ${
    activePage === "about"
      ? "bg-gray-50 text-primary font-bold"
      : "text-primary hover:bg-gray-50"
  }">About Us</a>
                <a href="${pathPrefix}/pages/my-book.html" class="block px-4 py-2 rounded-lg ${
    activePage === "mybook"
      ? "bg-gray-50 text-primary font-bold"
      : "text-primary hover:bg-gray-50"
  }">My Book</a>
                <hr class="border-gray-200">
                <a href="${pathPrefix}/html/signin.html" class="block text-center w-full px-6 py-3 bg-primary text-pure-white font-bold rounded-lg mt-2 hover:bg-secondary">
                    Sign In
                </a>
            </div>
        </div>
    </nav>
    `;

  // Inject HTML
  container.innerHTML = navbarHTML;

  // --- 4. EVENT LISTENERS ---
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
