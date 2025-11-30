function renderNavbar(containerId, activePage = "") {
  const container = document.getElementById(containerId);
  if (!container) return;

  // Get the current path
  const path = window.location.pathname;
  let pathPrefix = ".";

  // Logic:
  // 1. We assume your project structure puts all sub-pages inside a folder named "pages".
  // 2. We find where "/pages/" starts in the URL.
  // 3. We count how many slashes appear AFTER "/pages/".
  // 4. Each slash represents a deeper folder level requiring a "../" to go back up.

  if (path.includes("/pages/")) {
    const parts = path.split(/\/pages\//);
    const subPath = parts[1];
    const slashCount = (subPath.match(/\//g) || []).length;
    const depth = 1 + slashCount;
    pathPrefix = "../".repeat(depth);
    pathPrefix = "../".repeat(depth).slice(0, -1);
  }

  // Auth checking
  // Check if user is logged in by looking for the token in LocalStorage
  const accessToken = localStorage.getItem("access_token");
  const userRole = localStorage.getItem("user_role");
  const userName = localStorage.getItem("user_name") || "User";
  const isLoggedIn = !!accessToken;

  // Active Link
  const getLinkClass = (pageName) => {
    const baseClass =
      "font-medium transition-colors duration-200 dark:text-gray-300";
    const activeClass = "text-primary font-bold dark:text-accent";
    const inactiveClass =
      "text-primary hover:text-secondary dark:hover:text-white";

    return activePage === pageName
      ? `${baseClass} ${activeClass}`
      : `${baseClass} ${inactiveClass}`;
  };

  // Dynamic Sign-up/Sign-in Button
  let authButtonHTML = "";
  if (isLoggedIn) {
    // User is Logged In -> Show Logout
    authButtonHTML = `
        <div class="flex items-center gap-4">
            <span class="hidden lg:inline text-sm font-semibold text-primary dark:text-white capitalize">
                Hi, ${userName}
            </span>
            <button id="logout-btn" class="px-5 py-2 bg-primary text-pure-white border font-semibold rounded-lg hover:bg-primary transition shadow-sm flex items-center gap-2">
                <i class="ph-bold ph-sign-out"></i> Logout
            </button>
        </div>
      `;
  } else {
    // If user is public user, shows sign in button
    authButtonHTML = `
        <a href="${pathPrefix}/pages/signin.html" class="px-6 py-2.5 bg-primary text-pure-white font-semibold rounded-lg hover:bg-secondary transition duration-300 shadow-md">
            Sign In
        </a>
      `;
  }

  // bg-white/10 backdrop-blur-md border border-white/20
  const navbarHTML = `
    <nav class="fixed w-full z-50 bg-pure-white dark:bg-slate-900 shadow-sm font-primary">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            <div class="flex justify-between items-center h-20">
                
                <!-- LOGO -->
                <a href="${pathPrefix}/index.html" class="flex-shrink-0 flex items-center gap-2 cursor-pointer decoration-0">
                   <!-- Ensure images folder is accessible -->
                   <img src="${pathPrefix}/img/Libreshelf.png" class="w-15 md:w-20 dark:hidden" alt="Light Logo">
                   <img src="${pathPrefix}/img/Libreshelf-dark-mode.png" class="w-15 md:w-20 hidden dark:block" alt="Dark Logo">
                </a>

                <!-- DESKTOP MENU -->
                <div class="hidden md:flex space-x-8 items-center">
                    <a href="${pathPrefix}/index.html" class="${getLinkClass(
    "home"
  )}">Home</a>
                    <a href="${pathPrefix}/pages/categories.html" class="${getLinkClass(
    "categories"
  )}">Categories</a>
                    <a href="${pathPrefix}/pages/about-us.html" class="${getLinkClass(
    "about"
  )}">About Us</a>
                    <a href="${pathPrefix}/pages/book.html" class="${getLinkClass(
    "mybook"
  )}">My Book</a>
                </div>

                <!-- RIGHT ICONS & BUTTON -->
                <div class="hidden md:flex items-center gap-5">
                    <button id="theme-toggle" class="text-dark-gray hover:text-primary dark:text-gray-300 dark:hover:text-accent transition-colors">
                        <i class="ph ph-moon text-2xl"></i>
                    </button>

                    <!-- Favorite Icon (Only functional if logged in) -->
                    <button class="text-dark-gray hover:text-secondary dark:text-gray-300 transition-colors relative">
                        <i class="ph ph-heart text-2xl"></i>
                        ${
                          isLoggedIn
                            ? '<span class="absolute -top-1 -right-1 w-2 h-2 bg-secondary rounded-full"></span>'
                            : ""
                        }
                    </button>
                    
                    <!-- Dynamic Auth Button -->
                    ${authButtonHTML}
                </div>
                <!-- MOBILE MENU HAMBURGER -->
                <div class="md:hidden flex items-center gap-4">
                    <button id="mobile-menu-btn" class="text-primary dark:text-white focus:outline-none">
                        <i class="ph ph-list text-3xl"></i>
                    </button>
                </div>
                </div>
                </div>
            </div>
        </div>

        <!-- 5. MOBILE MENU DROPDOWN -->
        <div id="mobile-menu" class="mobile-menu md:hidden bg-pure-white dark:bg-slate-900 shadow-lg overflow-hidden max-h-0 opacity-0 transition-all duration-300 ease-in-out">
            <div class="px-4 py-4 space-y-3 flex flex-col">
                <a href="${pathPrefix}/index.html" class="block px-4 py-2 rounded-lg ${
    activePage === "home"
      ? "bg-gray-50 dark:bg-slate-800 text-primary font-bold"
      : "text-primary dark:text-accent hover:bg-gray-50 dark:hover:bg-slate-800"
  }">Home</a>
                <a href="${pathPrefix}/pages/categories.html" class="block px-4 py-2 rounded-lg ${
    activePage === "categories"
      ? "bg-gray-50 dark:bg-slate-800 text-primary  dark:text-accent font-bold"
      : "text-primary dark:text-gray-300 hover:bg-gray-50 dark:bg-slate-800"
  }">Categories</a>
                <a href="${pathPrefix}/pages/about-us.html" class="block px-4 py-2 rounded-lg ${
    activePage === "about"
      ? "bg-gray-50 dark:bg-slate-800 text-primary dark:text-accent font-bold"
      : "text-primary dark:text-gray-300 hover:bg-gray-50 "
  }">About Us</a>
                <a href="${pathPrefix}/pages/my-book.html" class="block px-4 py-2 rounded-lg ${
    activePage === "mybook"
      ? "bg-gray-50 dark:bg-slate-800 text-primary dark:text-accent font-bold"
      : "text-primary dark:text-gray-300 hover:bg-gray-50"
  }">My Book</a>
                <hr class="border-gray-200">

                <!-- Mobile Theme Toggle -->
                <button id="mobile-theme-toggle" class="flex items-center justify-between w-full px-4 py-2 text-text-black dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-slate-800 rounded-lg">
                    <span>Dark Mode</span>
                    <i class="ph ph-moon text-xl"></i>
                </button>
                 <!-- Mobile Auth Button -->
                ${
                  isLoggedIn
                    ? `<button id="mobile-logout-btn" class="block text-center w-full px-6 py-3 bg-primary text-pure-white font-bold rounded-lg mt-2">Logout</button>`
                    : `<a href="${pathPrefix}/pages/signin.html" class="block text-center w-full px-6 py-3 bg-primary text-pure-white font-bold rounded-lg mt-2 hover:bg-secondary">Sign In</a>`
                }
            </div>
        </div>
    </nav>
    `;

  // Inject HTML
  container.innerHTML = navbarHTML;

  // Event Listener
  const btn = container.querySelector("#mobile-menu-btn");
  const menu = container.querySelector("#mobile-menu");
  const icon = btn ? btn.querySelector("i") : null;

  if (btn && menu) {
    btn.addEventListener("click", () => {
      const isOpen = !menu.classList.contains("max-h-0");
      if (isOpen) {
        // Close
        menu.classList.add("max-h-0", "opacity-0");
        menu.classList.remove("max-h-[500px]", "opacity-100");
        if (icon) {
          icon.classList.remove("ph-x");
          icon.classList.add("ph-list");
        }
      } else {
        // Open
        menu.classList.remove("max-h-0", "opacity-0");
        menu.classList.add("max-h-[500px]", "opacity-100");
        if (icon) {
          icon.classList.remove("ph-list");
          icon.classList.add("ph-x");
        }
      }
    });
  }

  // Logout Logic (Desktop & Mobile)
  const handleLogout = () => {
    if (confirm("Are you sure you want to log out?")) {
      localStorage.removeItem("access_token");
      localStorage.removeItem("user_role");
      window.location.reload(); // Refresh page to update navbar
    }
  };

  const logoutBtn = document.getElementById("logout-btn");
  const mobileLogoutBtn = document.getElementById("mobile-logout-btn");

  if (logoutBtn) logoutBtn.addEventListener("click", handleLogout);
  if (mobileLogoutBtn) mobileLogoutBtn.addEventListener("click", handleLogout);

  const updateIcons = () => {
    // Check if html tag has .dark class
    const isDark = document.documentElement.classList.contains("dark");
    const iconClass = isDark ? "ph-sun" : "ph-moon"; // Swap Icon: Sun for Dark, Moon for Light

    const desktopIcon = document.querySelector("#theme-toggle i");
    const mobileIcon = document.querySelector("#mobile-theme-toggle i");

    if (desktopIcon) {
      desktopIcon.className = `ph ${iconClass} text-2xl`;
    }
    if (mobileIcon) {
      mobileIcon.className = `ph ${iconClass} text-xl`;
    }
  };

  // Run once on load to set initial icon
  updateIcons();

  // Listen for clicks
  const toggleBtn = document.getElementById("theme-toggle");
  const mobileToggleBtn = document.getElementById("mobile-theme-toggle");

  const handleToggle = () => {
    // Call the global Theme Manager we created in theme.js
    if (window.LibreTheme) {
      window.LibreTheme.toggle();
      updateIcons();
    } else {
      console.error("LibreTheme not found. Make sure theme.js is loaded!");
    }
  };

  if (toggleBtn) toggleBtn.addEventListener("click", handleToggle);
  if (mobileToggleBtn) mobileToggleBtn.addEventListener("click", handleToggle);
}
