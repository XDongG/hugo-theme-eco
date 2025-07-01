// ===== THEME MANAGEMENT =====
class ThemeManager {
  constructor() {
    this.theme = localStorage.getItem('theme') || 'light';
    this.init();
  }

  init() {
    this.setTheme(this.theme);
    this.bindEvents();
  }

  setTheme(theme) {
    this.theme = theme;
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem('theme', theme);
    
    // Update theme toggle button
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.setAttribute('aria-label', 
        theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'
      );
    }
  }

  toggleTheme() {
    const newTheme = this.theme === 'light' ? 'dark' : 'light';
    this.setTheme(newTheme);
  }

  bindEvents() {
    const themeToggle = document.getElementById('theme-toggle');
    if (themeToggle) {
      themeToggle.addEventListener('click', () => this.toggleTheme());
    }
  }
}

// ===== NAVIGATION MANAGEMENT =====
class NavigationManager {
  constructor() {
    this.mobileToggle = document.getElementById('mobile-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.init();
  }

  init() {
    this.bindEvents();
    this.handleScroll();
  }

  bindEvents() {
    // Mobile menu toggle
    if (this.mobileToggle && this.navMenu) {
      this.mobileToggle.addEventListener('click', () => this.toggleMobileMenu());
    }

    // Close mobile menu when clicking on links
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach(link => {
      link.addEventListener('click', () => this.closeMobileMenu());
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', (e) => {
      if (!this.mobileToggle?.contains(e.target) && !this.navMenu?.contains(e.target)) {
        this.closeMobileMenu();
      }
    });

    // Handle scroll for header styling
    window.addEventListener('scroll', () => this.handleScroll());

    // Language switcher
    this.initLanguageSwitcher();
  }

  toggleMobileMenu() {
    const isActive = this.navMenu.classList.contains('active');
    
    if (isActive) {
      this.closeMobileMenu();
    } else {
      this.openMobileMenu();
    }
  }

  openMobileMenu() {
    this.navMenu.classList.add('active');
    this.mobileToggle.classList.add('active');
    document.body.classList.add('no-scroll');
  }

  closeMobileMenu() {
    this.navMenu.classList.remove('active');
    this.mobileToggle.classList.remove('active');
    document.body.classList.remove('no-scroll');
  }

  handleScroll() {
    const header = document.querySelector('.site-header');
    if (header) {
      if (window.scrollY > 100) {
        header.classList.add('scrolled');
      } else {
        header.classList.remove('scrolled');
      }
    }
  }

  initLanguageSwitcher() {
    const languageToggle = document.getElementById('language-toggle');
    const languageMenu = document.getElementById('language-menu');

    if (languageToggle && languageMenu) {
      languageToggle.addEventListener('click', (e) => {
        e.stopPropagation();
        languageMenu.classList.toggle('active');
      });

      // Close language menu when clicking outside
      document.addEventListener('click', () => {
        languageMenu.classList.remove('active');
      });
    }
  }
}

// ===== SEARCH MANAGEMENT =====
class SearchManager {
  constructor() {
    this.searchToggle = document.getElementById('search-toggle');
    this.searchOverlay = document.getElementById('search-overlay');
    this.searchClose = document.getElementById('search-close');
    this.searchInput = document.getElementById('search-input');
    this.searchResults = document.getElementById('search-results');
    this.searchData = [];
    this.init();
  }

  init() {
    this.loadSearchIndex();
    this.bindEvents();
  }

  async loadSearchIndex() {
    try {
      const response = await fetch('/index.json');
      if (response.ok) {
        this.searchData = await response.json();
      }
    } catch (error) {
      console.warn('Search index not available:', error);
    }
  }

  bindEvents() {
    // Toggle search overlay
    if (this.searchToggle) {
      this.searchToggle.addEventListener('click', () => this.openSearch());
    }

    if (this.searchClose) {
      this.searchClose.addEventListener('click', () => this.closeSearch());
    }

    // Close on escape key
    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.searchOverlay?.classList.contains('active')) {
        this.closeSearch();
      }
    });

    // Close when clicking on overlay background
    if (this.searchOverlay) {
      this.searchOverlay.addEventListener('click', (e) => {
        if (e.target === this.searchOverlay) {
          this.closeSearch();
        }
      });
    }

    // Search functionality
    if (this.searchInput) {
      this.searchInput.addEventListener('input', (e) => this.performSearch(e.target.value));
    }
  }

  openSearch() {
    if (this.searchOverlay) {
      this.searchOverlay.classList.add('active');
      document.body.classList.add('no-scroll');
      
      // Focus on input after animation
      setTimeout(() => {
        if (this.searchInput) {
          this.searchInput.focus();
        }
      }, 300);
    }
  }

  closeSearch() {
    if (this.searchOverlay) {
      this.searchOverlay.classList.remove('active');
      document.body.classList.remove('no-scroll');
      
      if (this.searchInput) {
        this.searchInput.value = '';
      }
      
      if (this.searchResults) {
        this.searchResults.innerHTML = '';
      }
    }
  }

  performSearch(query) {
    if (!this.searchResults) return;

    const trimmedQuery = query.toLowerCase().trim();
    
    if (trimmedQuery.length < 2) {
      this.searchResults.innerHTML = '';
      return;
    }

    const results = this.searchData.filter(item => 
      item.title.toLowerCase().includes(trimmedQuery) ||
      item.content.toLowerCase().includes(trimmedQuery) ||
      (item.tags && item.tags.some(tag => tag.toLowerCase().includes(trimmedQuery))) ||
      (item.categories && item.categories.some(cat => cat.toLowerCase().includes(trimmedQuery)))
    ).slice(0, 10);

    if (results.length > 0) {
      this.searchResults.innerHTML = results.map(item => this.renderSearchResult(item, trimmedQuery)).join('');
    } else {
      this.searchResults.innerHTML = '<div class="no-results">No results found</div>';
    }
  }

  renderSearchResult(item, query) {
    const highlightText = (text, query) => {
      const regex = new RegExp(`(${query})`, 'gi');
      return text.replace(regex, '<mark>$1</mark>');
    };

    const title = highlightText(item.title, query);
    const summary = item.summary || item.content.substring(0, 150);
    const highlightedSummary = highlightText(summary, query);
    
    const tags = item.tags ? item.tags.map(tag => `<span class="tag">${tag}</span>`).join('') : '';
    const date = new Date(item.date).toLocaleDateString();

    return `
      <div class="search-result">
        <h4><a href="${item.permalink}">${title}</a></h4>
        <p>${highlightedSummary}...</p>
        <div class="search-meta">
          <time>${date}</time>
          ${tags ? `<div class="tags">${tags}</div>` : ''}
        </div>
      </div>
    `;
  }
}

// ===== SCROLL MANAGEMENT =====
class ScrollManager {
  constructor() {
    this.backToTopBtn = document.getElementById('back-to-top');
    this.init();
  }

  init() {
    this.bindEvents();
    this.handleScroll();
  }

  bindEvents() {
    window.addEventListener('scroll', () => this.handleScroll());
    
    if (this.backToTopBtn) {
      this.backToTopBtn.addEventListener('click', () => this.scrollToTop());
    }
  }

  handleScroll() {
    if (this.backToTopBtn) {
      if (window.scrollY > 300) {
        this.backToTopBtn.classList.add('visible');
      } else {
        this.backToTopBtn.classList.remove('visible');
      }
    }

    // Update reading progress for single posts
    this.updateReadingProgress();
  }

  scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  }

  updateReadingProgress() {
    const progressBar = document.querySelector('.reading-progress');
    if (progressBar) {
      const article = document.querySelector('.post-content');
      if (article) {
        const articleTop = article.offsetTop;
        const articleHeight = article.offsetHeight;
        const windowHeight = window.innerHeight;
        const scrollTop = window.scrollY;
        
        const progress = Math.max(0, Math.min(100, 
          ((scrollTop - articleTop + windowHeight) / articleHeight) * 100
        ));
        
        progressBar.style.width = `${progress}%`;
      }
    }
  }
}

// ===== UTILITIES =====
class Utils {
  static debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  static throttle(func, limit) {
    let inThrottle;
    return function() {
      const args = arguments;
      const context = this;
      if (!inThrottle) {
        func.apply(context, args);
        inThrottle = true;
        setTimeout(() => inThrottle = false, limit);
      }
    };
  }

  static fadeIn(element, duration = 300) {
    element.style.opacity = 0;
    element.style.display = 'block';
    
    const start = performance.now();
    
    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = progress;
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    }
    
    requestAnimationFrame(animate);
  }

  static fadeOut(element, duration = 300) {
    const start = performance.now();
    const startOpacity = parseFloat(getComputedStyle(element).opacity);
    
    function animate(currentTime) {
      const elapsed = currentTime - start;
      const progress = Math.min(elapsed / duration, 1);
      
      element.style.opacity = startOpacity * (1 - progress);
      
      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        element.style.display = 'none';
      }
    }
    
    requestAnimationFrame(animate);
  }
}

// ===== INITIALIZATION =====
document.addEventListener('DOMContentLoaded', function() {
  // Initialize all managers
  const themeManager = new ThemeManager();
  const navigationManager = new NavigationManager();
  const searchManager = new SearchManager();
  const scrollManager = new ScrollManager();

  // Add smooth scrolling to anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
        target.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Lazy loading for images
  if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const img = entry.target;
          img.src = img.dataset.src;
          img.classList.remove('lazy');
          observer.unobserve(img);
        }
      });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
      imageObserver.observe(img);
    });
  }

  // External links handling
  document.querySelectorAll('a[href^="http"]').forEach(link => {
    if (!link.hostname.includes(window.location.hostname)) {
      link.setAttribute('target', '_blank');
      link.setAttribute('rel', 'noopener noreferrer');
    }
  });

  // Copy code blocks functionality
  document.querySelectorAll('pre code').forEach(block => {
    const button = document.createElement('button');
    button.className = 'copy-code-btn';
    button.textContent = 'Copy';
    button.addEventListener('click', () => {
      navigator.clipboard.writeText(block.textContent).then(() => {
        button.textContent = 'Copied!';
        setTimeout(() => {
          button.textContent = 'Copy';
        }, 2000);
      });
    });
    
    block.parentNode.style.position = 'relative';
    block.parentNode.appendChild(button);
  });

  console.log('EcoTheme initialized successfully! 🌱');
});

