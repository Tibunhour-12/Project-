/**
 * Renders the Footer into a specific container.
 * Matches the specific 3-column layout with internal alignments.
 * @param {string} containerId - The ID of the div where the footer should be injected.
 */
function renderFooter(containerId) {
  const container = document.getElementById(containerId);
  if (!container) return;

  const footerHTML = `
    <footer class="bg-primary text-white pt-16 pb-8 border-t border-white/10 font-sans">
        <div class="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-12">
            
            <!-- TOP SECTION: Main 3 Columns -->
            <!-- 
               grid-cols-12 allows for asymmetric sizing.
               - Left: 3 cols
               - Middle: 6 cols (Wider to fit 2 lists)
               - Right: 3 cols
            -->
            <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
                
                <!-- 1. LEFT SECTION: Logo & Socials (Span 3) -->
                <div class="lg:col-span-3 flex flex-col items-start space-y-6">
                    <!-- Logo Group -->
                    <a href="/" class="flex items-center gap-3 group decoration-0">
                        <div class="text-accent group-hover:text-white transition-colors duration-300">
                            <i class="ph-fill ph-book-open-text text-4xl"></i>
                        </div>
                        <div class="flex flex-col">
                            <span class="font-extrabold text-2xl tracking-wider text-white">LIBRESHELF.</span>
                        </div>
                    </a>
                    
                    <p class="text-gray-400 text-sm leading-relaxed max-w-xs">
                        The open source library for everyone. Read, learn, and contribute to the community.
                    </p>

                    <!-- Social Icons -->
                    <div class="flex items-center gap-4 mt-2">
                        <!-- Telegram -->
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 border border-white/10">
                            <i class="ph-fill ph-telegram-logo text-xl"></i>
                        </a>
                        <!-- Facebook -->
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 border border-white/10">
                            <i class="ph-fill ph-facebook-logo text-xl"></i>
                        </a>
                        <!-- GitHub -->
                        <a href="#" class="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-accent hover:text-primary transition-all duration-300 border border-white/10">
                            <i class="ph-fill ph-github-logo text-xl"></i>
                        </a>
                    </div>
                </div>

                <!-- 2. MIDDLE SECTION: Book Category (Span 6) -->
                <!-- Flex container to center the block visually -->
                <div class="lg:col-span-6 flex lg:justify-center">
                    <div class="w-full max-w-md">
                        <h3 class="text-lg font-bold text-white mb-8 uppercase tracking-wider border-b border-accent/30 pb-2 inline-block">
                            Book Category
                        </h3>
                        
                        <!-- Two Vertical Columns of Links -->
                        <div class="grid grid-cols-2 gap-x-12 gap-y-4 text-gray-300 text-sm">
                            <!-- Col 1 -->
                            <div class="space-y-3 flex flex-col">
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> History
                                </a>
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Horror - Thriller
                                </a>
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Love Stories
                                </a>
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Science Fiction
                                </a>
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Business
                                </a>
                            </div>
                            
                            <!-- Col 2 -->
                            <div class="space-y-3 flex flex-col">
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Biography
                                </a>
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Astrology
                                </a>
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Digital Marketing
                                </a>
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Software Development
                                </a>
                                <a href="#" class="hover:text-accent transition-colors flex items-center gap-2 group">
                                    <i class="ph-bold ph-caret-right text-accent opacity-0 group-hover:opacity-100 transition-opacity"></i> Self-Help
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                <!-- 3. RIGHT SECTION: Sitemap (Span 3) -->
                <div class="lg:col-span-3 flex flex-col lg:items-end">
                    <div class="w-full lg:w-auto text-left lg:text-right">
                        <h3 class="text-lg font-bold text-white mb-8 uppercase tracking-wider border-b border-accent/30 pb-2 inline-block">
                            Sitemap
                        </h3>
                        <ul class="space-y-4 text-gray-300 text-sm">
                            <li><a href="/" class="hover:text-accent transition-colors">Home</a></li>
                            <li><a href="/categories.html" class="hover:text-accent transition-colors">Categories</a></li>
                            <li><a href="/about.html" class="hover:text-accent transition-colors">About Us</a></li>
                            <li><a href="/my-book.html" class="hover:text-accent transition-colors">My Books</a></li>
                            <li><a href="/contact.html" class="hover:text-accent transition-colors">Contact Support</a></li>
                        </ul>
                    </div>
                </div>

            </div>

            <!-- BOTTOM ROW: Copyright -->
            <div class="border-t border-white/10 pt-8 mt-8 flex flex-col md:flex-row justify-center items-center text-center">
                <p class="text-sm text-gray-500 font-medium">
                    &copy; 2025 LibreShelf Team. Built as a Final Project for ISTAD Web Design Course.
                </p>
            </div>

        </div>
    </footer>
    `;

  container.innerHTML = footerHTML;
}
