<template>
  <div class="tours">
    <header class="hero">
      <div class="hero-content">
        <h1>精选旅游套餐</h1>
        <p>为您打造难忘的旅行体验</p>
      </div>
    </header>

    <div class="tours-container">
      <div class="filters">
        <button 
          v-for="category in categories" 
          :key="category"
          :class="['filter-btn', { active: selectedCategory === category }]"
          @click="selectedCategory = category"
        >
          {{ category }}
        </button>
      </div>

      <div class="tours-grid">
        <div v-for="tour in filteredTours" :key="tour.id" class="tour-card">
          <div class="tour-image">
            <img :src="tour.image" :alt="tour.name">
            <span class="tour-duration">{{ tour.duration }}</span>
          </div>
          <div class="tour-content">
            <h3>{{ tour.name }}</h3>
            <p class="tour-description">{{ tour.description }}</p>
            <div class="tour-footer">
              <div class="price-container">
                <span class="price-label">价格</span>
                <span class="tour-price">¥{{ tour.price }}</span>
                <span class="price-unit">/人起</span>
              </div>
              <button class="book-btn" @click="showPaymentModal(tour)">立即预订</button>
            </div>
          </div>
        </div>
      </div>
    </div>

    <PaymentModal
      :show="showPayment"
      :destination="selectedTour"
      @close="showPayment = false"
      @payment-success="handlePaymentSuccess"
    />
  </div>
</template>

<script>
import PaymentModal from '../components/PaymentModal.vue'

export default {
  name: 'ToursView',
  components: {
    PaymentModal
  },
  data() {
    return {
      selectedCategory: '全部',
      categories: ['全部', '跟团游', '自由行', '定制游'],
      showPayment: false,
      selectedTour: null,
      tours: [
        {
          id: 1,
          name: '日本本州经典8日游',
          description: '东京-富士山-京都-大阪，体验日本传统文化与现代魅力',
          price: '12999',
          duration: '8天7晚',
          category: '跟团游',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 2,
          name: '巴厘岛浪漫度假6日',
          description: '私人海滩、SPA、美食，尽享热带岛屿风情，与家人团聚',
          price: '6999',
          duration: '6天5晚',
          category: '自由行',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 3,
          name: '欧洲三国深度游',
          description: '法国-意大利-瑞士，感受欧洲艺术与自然之美',
          price: '19999',
          duration: '12天11晚',
          category: '定制游',
          image: 'https://images.unsplash.com/photo-1499856871958-5b9627545d1a?auto=format&fit=crop&w=800&q=80'
        },
        {
          id: 4,
          name: '泰国清迈文化之旅',
          description: '古城寺庙、夜市美食、丛林探险，在普吉岛寻找你的那个Ta',
          price: '5999',
          duration: '5天4晚',
          category: '跟团游',
          image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?auto=format&fit=crop&w=800&q=80'
        }
      ]
    }
  },
  computed: {
    filteredTours() {
      if (this.selectedCategory === '全部') {
        return this.tours
      }
      return this.tours.filter(tour => tour.category === this.selectedCategory)
    }
  },
  methods: {
    showPaymentModal(tour) {
      this.selectedTour = tour
      this.showPayment = true
    },
    handlePaymentSuccess() {
      // 可以在这里添加支付成功后的其他处理逻辑
    }
  }
}
</script>

<style scoped>
.tours {
  min-height: 100vh;
}

.hero {
  height: 50vh;
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
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero p {
  font-size: 1.5rem;
}

.tours-container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
}

.filters {
  margin: 2rem 0;
  display: flex;
  justify-content: center;
  gap: 1rem;
}

.filter-btn {
  padding: 0.5rem 1.5rem;
  border: 2px solid #4CAF50;
  border-radius: 25px;
  background: transparent;
  color: #4CAF50;
  cursor: pointer;
  transition: all 0.3s ease;
}

.filter-btn.active,
.filter-btn:hover {
  background: #4CAF50;
  color: white;
}

.tours-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.tour-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
}

.tour-card:hover {
  transform: translateY(-5px);
}

.tour-image {
  position: relative;
}

.tour-image img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.tour-duration {
  position: absolute;
  bottom: 1rem;
  right: 1rem;
  background: rgba(0, 0, 0, 0.7);
  color: white;
  padding: 0.3rem 0.8rem;
  border-radius: 20px;
  font-size: 0.9rem;
}

.tour-content {
  padding: 1.5rem;
}

.tour-content h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.tour-description {
  color: #666;
  margin-bottom: 1rem;
}

.tour-footer {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 1rem;
  min-height: 48px;
}

.price-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.price-label {
  font-size: 0.9rem;
  color: #666;
  margin-bottom: 0.2rem;
}

.tour-price {
  font-size: 1.5rem;
  font-weight: bold;
  color: #e53935;
  line-height: 1;
  display: flex;
  align-items: baseline;
  gap: 0.3rem;
}

.price-unit {
  font-size: 0.9rem;
  color: #666;
}

.book-btn {
  background-color: #4CAF50;
  color: white;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
  height: 42px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.book-btn:hover {
  background-color: #45a049;
}
</style> 