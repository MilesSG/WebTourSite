<template>
  <div class="payment-modal" v-if="show">
    <div class="payment-modal-content">
      <div class="modal-header">
        <h2>支付确认</h2>
        <button class="close-btn" @click="closeModal">&times;</button>
      </div>
      
      <div class="order-summary">
        <h3>订单信息</h3>
        <div class="summary-item">
          <span>目的地:</span>
          <span>{{ destination.name }}</span>
        </div>
        <div class="summary-item">
          <span>价格:</span>
          <span>¥{{ destination.price }}</span>
        </div>
      </div>

      <div class="payment-methods">
        <h3>选择支付方式</h3>
        <div class="method-options">
          <label>
            <input type="radio" v-model="paymentMethod" value="credit" checked>
            <span>信用卡</span>
          </label>
          <label>
            <input type="radio" v-model="paymentMethod" value="wechat">
            <span>微信支付</span>
          </label>
          <label>
            <input type="radio" v-model="paymentMethod" value="alipay">
            <span>支付宝</span>
          </label>
        </div>
      </div>

      <div v-if="paymentMethod === 'credit'" class="credit-card-form">
        <div class="form-group">
          <label>卡号</label>
          <el-input v-model="cardNumber" placeholder="1234 5678 9012 3456" maxlength="19" />
        </div>
        <div class="form-row">
          <div class="form-group">
            <label>有效期</label>
            <el-input v-model="expiry" placeholder="MM/YY" maxlength="5" />
          </div>
          <div class="form-group">
            <label>CVV</label>
            <el-input v-model="cvv" placeholder="123" maxlength="3" />
          </div>
        </div>
      </div>

      <div v-else-if="paymentMethod === 'wechat'" class="qr-code">
        <img src="/qr-code-placeholder.png" alt="微信支付二维码">
        <p>请使用微信扫描二维码支付</p>
      </div>

      <div v-else class="qr-code">
        <img src="/qr-code-placeholder.png" alt="支付宝二维码">
        <p>请使用支付宝扫描二维码支付</p>
      </div>

      <div class="action-buttons">
        <el-button @click="closeModal">取消</el-button>
        <el-button type="primary" @click="processPayment" :loading="processing">
          {{ processing ? '处理中...' : '确认支付' }}
        </el-button>
      </div>
    </div>
  </div>
</template>

<script>
import { ElNotification } from 'element-plus'

export default {
  name: 'PaymentModal',
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
      paymentMethod: 'credit',
      cardNumber: '',
      expiry: '',
      cvv: '',
      processing: false
    }
  },
  methods: {
    closeModal() {
      this.$emit('close')
    },
    async processPayment() {
      this.processing = true
      
      // 模拟支付处理
      await new Promise(resolve => setTimeout(resolve, 2000))
      
      // 显示成功提示
      ElNotification({
        title: '支付成功',
        message: '您的订单已确认，感谢您的预订！',
        type: 'success',
        duration: 3000
      })
      
      this.$emit('payment-success')
      this.processing = false
      this.closeModal()
    }
  }
}
</script>

<style scoped>
.payment-modal {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
}

.payment-modal-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

.modal-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.close-btn {
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
}

.order-summary {
  background: #f8f9fa;
  padding: 1rem;
  border-radius: 4px;
  margin-bottom: 1.5rem;
}

.summary-item {
  display: flex;
  justify-content: space-between;
  margin: 0.5rem 0;
}

.payment-methods {
  margin-bottom: 1.5rem;
}

.method-options {
  display: flex;
  gap: 1rem;
  margin-top: 0.5rem;
}

.credit-card-form {
  margin-top: 1.5rem;
}

.form-group {
  margin-bottom: 1rem;
}

.form-group label {
  display: block;
  margin-bottom: 0.5rem;
}

.form-row {
  display: flex;
  gap: 1rem;
}

.qr-code {
  text-align: center;
  margin: 2rem 0;
}

.qr-code img {
  width: 200px;
  height: 200px;
  margin-bottom: 1rem;
}

.action-buttons {
  display: flex;
  justify-content: flex-end;
  gap: 1rem;
  margin-top: 2rem;
}
</style> 