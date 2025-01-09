<template>
  <div class="home">
    <!-- Hero Section -->
    <section class="hero">
      <div class="hero-content">
        <h1>探索世界的每个角落</h1>
        <p>让我们为您打造完美的旅行体验</p>
        <div class="search-box">
          <input type="text" placeholder="搜索目的地...">
          <button class="search-btn">搜索</button>
        </div>
      </div>
    </section>

    <!-- Features Section -->
    <section class="features">
      <div class="feature-container">
        <div class="feature">
          <i class="fas fa-map-marked-alt"></i>
          <h3>精选路线</h3>
          <p>专业规划，品质保证</p>
        </div>
        <div class="feature">
          <i class="fas fa-hotel"></i>
          <h3>舒适住宿</h3>
          <p>精选酒店，安心入住</p>
        </div>
        <div class="feature">
          <i class="fas fa-user-shield"></i>
          <h3>安全保障</h3>
          <p>全程保险，无忧出行</p>
        </div>
        <div class="feature">
          <i class="fas fa-headset"></i>
          <h3>专业服务</h3>
          <p>24小时客服支持</p>
        </div>
      </div>
    </section>

    <!-- Popular Destinations -->
    <section class="popular-destinations">
      <h2>热门目的地</h2>
      <div class="destinations-grid">
        <div v-for="destination in popularDestinations" 
             :key="destination.id" 
             class="destination-card"
             :style="{ backgroundImage: 'url(' + destination.image + ')' }">
          <div class="destination-info">
            <h3>{{ destination.name }}</h3>
            <p>{{ destination.description }}</p>
            <router-link :to="'/destinations'" class="explore-btn">探索更多</router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- Special Offers -->
    <section class="special-offers">
      <h2>特惠活动</h2>
      <div class="offers-grid">
        <div v-for="offer in specialOffers" :key="offer.id" class="offer-card">
          <img :src="offer.image" :alt="offer.title">
          <div class="offer-content">
            <h3>{{ offer.title }}</h3>
            <p>{{ offer.description }}</p>
            <div class="offer-price">
              <span class="original-price">¥{{ offer.originalPrice }}</span>
              <span class="current-price">¥{{ offer.currentPrice }}</span>
            </div>
            <router-link to="/tours" class="book-btn">立即预订</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'HomeView',
  data() {
    return {
      popularDestinations: [
        {
          id: 1,
          name: '日本',
          description: '体验传统与现代的完美融合',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          name: '巴厘岛',
          description: '热带天堂的完美假期',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 3,
          name: '巴黎',
          description: '浪漫之都的艺术气息',
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 4,
          name: '圣托里尼',
          description: '爱琴海上的白色明珠',
          image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=800&q=80'
        }
      ],
      specialOffers: [
        {
          id: 1,
          title: '日本温泉之旅',
          description: '含东京-富士山-京都-大阪8日游',
          originalPrice: '15999',
          currentPrice: '12999',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          title: '巴厘岛浪漫假期',
          description: '含SPA、美食、游艇出海6日游',
          originalPrice: '8999',
          currentPrice: '6999',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  }
}
</script>

<style scoped>
.home {
  min-height: 100vh;
}

.hero {
  height: 80vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content {
  max-width: 800px;
  padding: 0 20px;
}

.hero h1 {
  font-size: 3.5rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
  margin-bottom: 2rem;
}

.search-box {
  display: flex;
  max-width: 600px;
  margin: 0 auto;
}

.search-box input {
  flex: 1;
  padding: 1rem;
  border: none;
  border-radius: 4px 0 0 4px;
  font-size: 1rem;
}

.search-btn {
  padding: 1rem 2rem;
  background: #4CAF50;
  color: white;
  border: none;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  font-size: 1rem;
}

.features {
  padding: 4rem 0;
  background: #f9f9f9;
}

.feature-container {
  max-width: 1200px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  padding: 0 20px;
}

.feature {
  text-align: center;
  padding: 2rem;
}

.feature i {
  font-size: 3rem;
  color: #4CAF50;
  margin-bottom: 1rem;
}

.popular-destinations,
.special-offers {
  padding: 4rem 0;
  max-width: 1200px;
  margin: 0 auto;
}

.popular-destinations h2,
.special-offers h2 {
  text-align: center;
  margin-bottom: 2rem;
  font-size: 2.5rem;
}

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  padding: 0 20px;
}

.destination-card {
  height: 300px;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
  background-size: cover;
  background-position: center;
}

.destination-info {
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding: 2rem;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8));
  color: white;
}

.offers-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 0 20px;
}

.offer-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.offer-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.offer-content {
  padding: 1.5rem;
}

.offer-price {
  margin: 1rem 0;
}

.original-price {
  text-decoration: line-through;
  color: #999;
  margin-right: 1rem;
}

.current-price {
  color: #4CAF50;
  font-size: 1.5rem;
  font-weight: bold;
}

.explore-btn,
.book-btn {
  display: inline-block;
  padding: 0.5rem 1.5rem;
  background: #4CAF50;
  color: white;
  text-decoration: none;
  border-radius: 4px;
  transition: background-color 0.3s ease;
}

.explore-btn:hover,
.book-btn:hover {
  background: #45a049;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }
  
  .hero p {
    font-size: 1.2rem;
  }
  
  .search-box {
    flex-direction: column;
  }
  
  .search-box input {
    border-radius: 4px;
    margin-bottom: 1rem;
  }
  
  .search-btn {
    border-radius: 4px;
  }
}
</style>
