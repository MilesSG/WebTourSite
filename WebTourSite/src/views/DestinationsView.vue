<template>
  <div class="destinations">
    <header class="hero">
      <div class="hero-content">
        <h1>探索世界各地的精彩目的地</h1>
        <p>发现令人惊叹的景点，体验独特的文化</p>
      </div>
    </header>

    <div class="destinations-grid">
      <div v-for="destination in destinations" 
           :key="destination.id" 
           class="destination-card"
           @click="showDestinationDetails(destination)">
        <img :src="destination.image" :alt="destination.name">
        <div class="destination-info">
          <h3>{{ destination.name }}</h3>
          <p>{{ destination.description }}</p>
          <div class="card-footer">
            <div class="price-container">
              <span class="price-label">价格</span>
              <span class="price">¥{{ destination.price }}</span>
              <span class="price-unit">/人起</span>
            </div>
            <button class="explore-btn">探索详情</button>
          </div>
        </div>
      </div>
    </div>

    <DestinationModal
      :show="showModal"
      :destination="selectedDestination"
      @close="showModal = false"
      @payment-success="handlePaymentSuccess"
    />
  </div>
</template>

<script>
import DestinationModal from '../components/DestinationModal.vue'

export default {
  name: 'DestinationsView',
  components: {
    DestinationModal
  },
  data() {
    return {
      showModal: false,
      selectedDestination: null,
      destinations: [
        {
          id: 1,
          name: '巴厘岛',
          description: '印度尼西亚的天堂岛屿，拥有美丽的海滩和丰富的文化遗产',
          image: 'https://images.unsplash.com/photo-1537996194471-e657df975ab4?auto=format&fit=crop&w=800&q=80',
          price: 4999,
          bestTime: '4月至10月（旱季）',
          recommendedDays: '5-7天',
          attractions: [
            '乌布皇宫',
            '德格拉朗梯田',
            '金巴兰海滩',
            '圣猴森林公园',
            '水神庙',
            '海神庙'
          ],
          foods: [
            '印尼炒饭',
            '沙爹烤肉',
            '峇厘烤鸭',
            '咖啡',
            '热带水果'
          ]
        },
        {
          id: 2,
          name: '巴黎',
          description: '浪漫之都，艺术与美食的完美结合',
          image: 'https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=800&q=80',
          price: 12999,
          bestTime: '4月至6月或9月至11月',
          recommendedDays: '5-7天',
          attractions: [
            '埃菲尔铁塔',
            '卢浮宫',
            '凯旋门',
            '圣母院',
            '香榭丽舍大街',
            '凡尔赛宫'
          ],
          foods: [
            '法式可颂',
            '马卡龙',
            '法式蜗牛',
            '鹅肝',
            '法式红酒'
          ]
        },
        {
          id: 3,
          name: '京都',
          description: '日本传统文化的精髓，千年古都的优雅魅力',
          image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?auto=format&fit=crop&w=800&q=80',
          price: 7999,
          bestTime: '3月至5月（樱花季）或10月至11月（枫叶季）',
          recommendedDays: '4-6天',
          attractions: [
            '金阁寺',
            '清水寺',
            '伏见稻荷大社',
            '二条城',
            '岚山竹林',
            '祇园地区'
          ],
          foods: [
            '怀石料理',
            '抹茶甜点',
            '京都拉面',
            '八桥',
            '京都豆腐'
          ]
        },
        {
          id: 4,
          name: '圣托里尼',
          description: '希腊爱琴海上的明珠，蓝白相间的梦幻之岛',
          image: 'https://images.unsplash.com/photo-1469796466635-455ede028aca?auto=format&fit=crop&w=800&q=80',
          price: 9999,
          bestTime: '4月至10月',
          recommendedDays: '4-5天',
          attractions: [
            '伊亚小镇',
            '菲拉小镇',
            '红沙滩',
            '黑沙滩',
            '古费拉考古遗址',
            '蓝顶教堂'
          ],
          foods: [
            '希腊沙拉',
            '烤章鱼',
            '穆萨卡',
            '希腊酸奶',
            '当地葡萄酒'
          ]
        }
      ]
    }
  },
  methods: {
    showDestinationDetails(destination) {
      this.selectedDestination = destination
      this.showModal = true
    },
    handlePaymentSuccess() {
      // 可以在这里添加支付成功后的其他处理逻辑
    }
  }
}
</script>

<style scoped>
.destinations {
  min-height: 100vh;
}

.hero {
  height: 60vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1488085061387-422e29b40080?auto=format&fit=crop&w=1920&q=80');
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

.destinations-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

.destination-card {
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease;
  cursor: pointer;
}

.destination-card:hover {
  transform: translateY(-5px);
}

.destination-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.destination-info {
  padding: 1.5rem;
}

.destination-info h3 {
  margin: 0 0 0.5rem 0;
  font-size: 1.5rem;
}

.destination-info p {
  margin: 0 0 1rem 0;
  color: #666;
}

.card-footer {
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

.price {
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

.explore-btn {
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

.explore-btn:hover {
  background-color: #45a049;
}

@media (max-width: 768px) {
  .hero h1 {
    font-size: 2.5rem;
  }

  .hero p {
    font-size: 1.2rem;
  }
}
</style> 