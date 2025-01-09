<template>
  <transition name="modal">
    <div v-if="show" class="modal-mask">
      <div class="modal-container">
        <div class="modal-header">
          <h3>{{ destination.name }}</h3>
          <button class="close-button" @click="$emit('close')">&times;</button>
        </div>
        <div class="modal-body">
          <div class="modal-image">
            <img :src="destination.image" :alt="destination.name">
          </div>
          <div class="modal-content">
            <h4>目的地介绍</h4>
            <p>{{ destination.description }}</p>
            <div class="price-section">
              <span class="price-label">价格</span>
              <span class="price-amount">¥{{ destination.price }}</span>
              <span class="price-unit">/人起</span>
            </div>
            <div class="destination-details">
              <div class="detail-item">
                <h5>最佳旅行时间</h5>
                <p>{{ destination.bestTime }}</p>
              </div>
              <div class="detail-item">
                <h5>推荐游玩天数</h5>
                <p>{{ destination.recommendedDays }}</p>
              </div>
              <div class="detail-item">
                <h5>主要景点</h5>
                <ul>
                  <li v-for="(spot, index) in destination.attractions" :key="index">
                    {{ spot }}
                  </li>
                </ul>
              </div>
              <div class="detail-item">
                <h5>特色美食</h5>
                <ul>
                  <li v-for="(food, index) in destination.foods" :key="index">
                    {{ food }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <div class="action-buttons">
            <router-link :to="'/tours'" class="view-tours-btn">查看相关旅游套餐</router-link>
            <button class="book-now-btn" @click="handleBookNow">立即预定</button>
          </div>
        </div>
      </div>
    </div>
  </transition>

  <PaymentModal
    :show="showPayment"
    :destination="destination"
    @close="closePaymentModal"
    @payment-success="handlePaymentSuccess"
  />
</template>

<script>
import PaymentModal from './PaymentModal.vue'

export default {
  name: 'DestinationModal',
  components: {
    PaymentModal
  },
  props: {
    show: {
      type: Boolean,
      default: false
    },
    destination: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      showPayment: false
    }
  },
  methods: {
    handleBookNow() {
      this.showPayment = true
      this.$emit('close') // 关闭目的地详情模态框
    },
    closePaymentModal() {
      this.showPayment = false
    },
    handlePaymentSuccess() {
      this.showPayment = false
      this.$emit('payment-success')
    }
  },
  emits: ['close', 'payment-success']
}
</script>

<style scoped>
.modal-mask {
  position: fixed;
  z-index: 9998;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
}

.modal-container {
  width: 90%;
  max-width: 1000px;
  max-height: 90vh;
  background-color: white;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.33);
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  overflow: hidden;
}

.modal-header {
  padding: 1.5rem;
  border-bottom: 1px solid #eee;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.modal-header h3 {
  margin: 0;
  font-size: 1.8rem;
  color: #333;
}

.close-button {
  background: none;
  border: none;
  font-size: 2rem;
  cursor: pointer;
  color: #666;
  transition: color 0.3s ease;
}

.close-button:hover {
  color: #333;
}

.modal-body {
  padding: 1.5rem;
  overflow-y: auto;
  display: flex;
  gap: 2rem;
}

.modal-image {
  flex: 0 0 50%;
}

.modal-image img {
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 8px;
}

.modal-content {
  flex: 1;
}

.modal-content h4 {
  margin: 0 0 1rem 0;
  font-size: 1.5rem;
  color: #333;
}

.price-section {
  margin: 1.5rem 0;
  padding: 1rem;
  background-color: #f8f9fa;
  border-radius: 4px;
  display: flex;
  align-items: baseline;
  gap: 0.5rem;
}

.price-label {
  font-size: 1.1rem;
  color: #666;
}

.price-amount {
  font-size: 1.8rem;
  font-weight: bold;
  color: #e53935;
}

.price-unit {
  color: #666;
}

.destination-details {
  margin-top: 2rem;
}

.detail-item {
  margin-bottom: 1.5rem;
}

.detail-item h5 {
  margin: 0 0 0.5rem 0;
  color: #4CAF50;
  font-size: 1.1rem;
}

.detail-item ul {
  margin: 0;
  padding-left: 1.2rem;
}

.detail-item li {
  margin-bottom: 0.3rem;
  color: #666;
}

.modal-footer {
  padding: 1.5rem;
  border-top: 1px solid #eee;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
}

.view-tours-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #fff;
  color: #4CAF50;
  text-decoration: none;
  border-radius: 4px;
  border: 1px solid #4CAF50;
  transition: all 0.3s ease;
  white-space: nowrap;
}

.view-tours-btn:hover {
  background-color: #f0f8f0;
}

.book-now-btn {
  display: inline-block;
  padding: 0.8rem 2rem;
  background-color: #4CAF50;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  transition: background-color 0.3s ease;
  white-space: nowrap;
}

.book-now-btn:hover {
  background-color: #45a049;
}

.modal-enter-active,
.modal-leave-active {
  transition: all 0.3s ease;
}

.modal-enter-from,
.modal-leave-to {
  opacity: 0;
  transform: scale(0.9);
}

@media (max-width: 768px) {
  .modal-body {
    flex-direction: column;
  }

  .modal-image {
    flex: none;
  }

  .modal-image img {
    height: 250px;
  }
}
</style> 