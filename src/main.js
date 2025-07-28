import './style.css'

// App content
document.querySelector('#app').innerHTML = `
  <header class="header">
    <nav class="nav container">
      <div class="logo">PixelPals SMP</div>
      <ul class="nav-links">
        <li><a href="#home">Home</a></li>
        <li><a href="#server">Server Info</a></li>
        <li><a href="#features">Features</a></li>
        <li><a href="#contact">Contact</a></li>
      </ul>
    </nav>
  </header>

  <main>
    <section id="home" class="hero">
      <div class="container">
        <div class="hero-content fade-in-up">
          <h1>PixelPals SMP</h1>
          <p>Join our amazing Minecraft community! Experience survival multiplayer like never before with custom features, friendly players, and endless adventures.</p>
          <div class="cta-buttons">
            <a href="#server" class="btn btn-primary">
              🎮 Join Server
            </a>
            <a href="#features" class="btn btn-secondary">
              ✨ Learn More
            </a>
          </div>
        </div>
      </div>
    </section>

    <section id="server" class="server-info">
      <div class="container">
        <h2 class="section-title">Server Information</h2>
        <div class="info-grid">
          <div class="info-card">
            <h3>🌍 Server Type</h3>
            <p>Survival Multiplayer (SMP) with custom plugins and features designed to enhance your Minecraft experience.</p>
          </div>
          <div class="info-card">
            <h3>👥 Community</h3>
            <p>Friendly and welcoming community of players from around the world. All skill levels welcome!</p>
          </div>
          <div class="info-card">
            <h3>🛡️ Protection</h3>
            <p>Advanced grief protection and claim systems to keep your builds safe and secure.</p>
          </div>
          <div class="info-card">
            <h3>⚡ Performance</h3>
            <p>High-performance server with 99.9% uptime, running on dedicated hardware for the best experience.</p>
          </div>
        </div>
        
        <div class="server-address">
          <h3>Server Address</h3>
          <div class="address-display" id="serverAddress">pixelpals.minecraft.server</div>
          <button class="copy-btn" id="copyBtn">📋 Copy Address</button>
          <p style="margin-top: 1rem; color: var(--text-gray);">
            Java Edition 1.20+ | Bedrock Compatible
          </p>
        </div>
      </div>
    </section>

    <section id="features" class="features">
      <div class="container">
        <h2 class="section-title">Server Features</h2>
        <div class="features-grid">
          <div class="feature-card">
            <div class="feature-icon">🏰</div>
            <h3>Custom Builds</h3>
            <p>Showcase your creativity with our building competitions and featured build tours.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">💰</div>
            <h3>Economy System</h3>
            <p>Player-driven economy with shops, trading, and custom currency systems.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🎯</div>
            <h3>Custom Events</h3>
            <p>Regular events, mini-games, and seasonal celebrations to keep things exciting.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🔧</div>
            <h3>Quality of Life</h3>
            <p>Custom plugins for enhanced gameplay including teleportation, homes, and more.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">👑</div>
            <h3>Ranks & Rewards</h3>
            <p>Progression system with ranks, achievements, and exclusive rewards for active players.</p>
          </div>
          <div class="feature-card">
            <div class="feature-icon">🌐</div>
            <h3>Cross-Platform</h3>
            <p>Play with friends on Java Edition and Bedrock Edition seamlessly.</p>
          </div>
        </div>
      </div>
    </section>
  </main>

  <footer class="footer">
    <div class="container">
      <div class="footer-content">
        <div class="footer-section">
          <h3>PixelPals SMP</h3>
          <p>The ultimate Minecraft survival multiplayer experience. Join our community today!</p>
        </div>
        <div class="footer-section">
          <h3>Quick Links</h3>
          <p><a href="#home">Home</a></p>
          <p><a href="#server">Server Info</a></p>
          <p><a href="#features">Features</a></p>
        </div>
        <div class="footer-section">
          <h3>Community</h3>
          <p><a href="#">Discord Server</a></p>
          <p><a href="#">Reddit Community</a></p>
          <p><a href="#">YouTube Channel</a></p>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2025 PixelPals SMP. All rights reserved. | Minecraft is a trademark of Mojang Studios.</p>
      </div>
    </div>
  </footer>
`

// Copy server address functionality
const copyBtn = document.getElementById('copyBtn');
const serverAddress = document.getElementById('serverAddress');

copyBtn.addEventListener('click', async () => {
  try {
    await navigator.clipboard.writeText(serverAddress.textContent);
    copyBtn.textContent = '✅ Copied!';
    copyBtn.classList.add('copied');
    
    setTimeout(() => {
      copyBtn.textContent = '📋 Copy Address';
      copyBtn.classList.remove('copied');
    }, 2000);
  } catch (err) {
    // Fallback for older browsers
    const textArea = document.createElement('textarea');
    textArea.value = serverAddress.textContent;
    document.body.appendChild(textArea);
    textArea.select();
    document.execCommand('copy');
    document.body.removeChild(textArea);
    
    copyBtn.textContent = '✅ Copied!';
    copyBtn.classList.add('copied');
    
    setTimeout(() => {
      copyBtn.textContent = '📋 Copy Address';
      copyBtn.classList.remove('copied');
    }, 2000);
  }
});

// Smooth scrolling for navigation links
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

// Add scroll effect to header
window.addEventListener('scroll', () => {
  const header = document.querySelector('.header');
  if (window.scrollY > 100) {
    header.style.background = 'rgba(26, 26, 26, 0.98)';
  } else {
    header.style.background = 'rgba(26, 26, 26, 0.95)';
  }
});

// Add fade-in animation on scroll
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in-up');
    }
  });
}, observerOptions);

// Observe elements for animation
document.querySelectorAll('.info-card, .feature-card').forEach(el => {
  observer.observe(el);
});