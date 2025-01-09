<template>
  <div id="app">
    <!-- Navigation -->
    <nav class="navbar" :class="{ 'navbar-scrolled': isScrolled }">
      <div class="nav-content">
        <router-link to="/" class="logo">
          WebTour
        </router-link>
        <div class="nav-links">
          <router-link to="/" class="nav-link">首页</router-link>
          <router-link to="/destinations" class="nav-link">目的地</router-link>
          <router-link to="/tours" class="nav-link">旅游套餐</router-link>
          <router-link to="/about" class="nav-link">关于我们</router-link>
        </div>
      </div>
    </nav>

    <!-- Main Content -->
    <main>
      <router-view></router-view>
    </main>

    <!-- Footer -->
    <footer class="footer">
      <div class="footer-content">
        <div class="footer-section">
          <h3>关于我们</h3>
          <p>WebTour致力于为您提供最优质的旅游体验，让每一次旅行都充满难忘的回忆。</p>
        </div>
        <div class="footer-section">
          <h3>联系方式</h3>
          <p>电话：400-123-4567</p>
          <p>邮箱：info@webtour.com</p>
          <p>地址：北京市朝阳区xxx大厦</p>
        </div>
        <div class="footer-section">
          <h3>快速链接</h3>
          <router-link to="/">首页</router-link>
          <router-link to="/destinations">目的地</router-link>
          <router-link to="/tours">旅游套餐</router-link>
          <router-link to="/about">关于我们</router-link>
        </div>
        <div class="footer-section">
          <h3>关注我们</h3>
          <div class="social-links">
            <a href="#" class="social-link"><i class="fab fa-weixin"></i></a>
            <a href="#" class="social-link"><i class="fab fa-weibo"></i></a>
            <a href="#" class="social-link"><i class="fab fa-instagram"></i></a>
          </div>
        </div>
      </div>
      <div class="footer-bottom">
        <p>&copy; 2024 WebTour. All rights reserved.</p>
      </div>
    </footer>
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      isScrolled: false
    }
  },
  mounted() {
    window.addEventListener('scroll', this.handleScroll)
  },
  unmounted() {
    window.removeEventListener('scroll', this.handleScroll)
  },
  methods: {
    handleScroll() {
      this.isScrolled = window.scrollY > 50
    }
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
@import url('https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.4/css/all.min.css');

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.6;
}

#app {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

/* Navigation */
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 1rem 0;
  transition: all 0.3s ease;
  background: transparent;
}

.navbar-scrolled {
  background: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.navbar-scrolled .nav-link,
.navbar-scrolled .logo {
  color: #333;
}

.nav-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.logo {
  font-size: 1.5rem;
  font-weight: 700;
  color: white;
  text-decoration: none;
}

.nav-links {
  display: flex;
  gap: 2rem;
}

.nav-link {
  color: white;
  text-decoration: none;
  font-weight: 500;
  transition: color 0.3s ease;
}

.nav-link:hover {
  color: #4CAF50;
}

/* Main Content */
main {
  flex: 1;
  margin-bottom: 0;
}

/* Footer */
.footer {
  background: #333;
  color: white;
  padding: 4rem 0 0 0;
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
}

.footer-section h3 {
  margin-bottom: 1rem;
  font-size: 1.2rem;
}

.footer-section a {
  color: white;
  text-decoration: none;
  display: block;
  margin-bottom: 0.5rem;
  transition: color 0.3s ease;
}

.footer-section a:hover {
  color: #4CAF50;
}

.social-links {
  display: flex;
  gap: 1rem;
}

.social-link {
  font-size: 1.5rem;
}

.footer-bottom {
  margin-top: 2rem;
  padding: 1rem 0;
  text-align: center;
  border-top: 1px solid rgba(255, 255, 255, 0.1);
}

@media (max-width: 768px) {
  .nav-content {
    flex-direction: column;
    gap: 1rem;
  }

  .nav-links {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }

  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }

  .social-links {
    justify-content: center;
  }
}
</style>
