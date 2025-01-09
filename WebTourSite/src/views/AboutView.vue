<template>
  <div class="about">
    <header class="about-hero">
      <div class="hero-content">
        <h1>关于我们</h1>
        <p>您值得信赖的旅行伙伴</p>
      </div>
    </header>

    <section class="about-content">
      <div class="about-section">
        <h2>我们的故事</h2>
        <p>WebTour成立于2024年，是一家专注于为客户提供高品质旅游服务的在线旅游平台。我们致力于为每位旅行者打造独特而难忘的旅行体验，让您的每一次出行都充满惊喜与期待。</p>
      </div>

      <div class="values-grid">
        <div class="value-card">
          <i class="fas fa-heart"></i>
          <h3>以客为尊</h3>
          <p>始终将客户需求放在首位，提供贴心周到的服务</p>
        </div>
        <div class="value-card">
          <i class="fas fa-gem"></i>
          <h3>品质保证</h3>
          <p>严选优质旅游产品，确保旅行体验的每个细节</p>
        </div>
        <div class="value-card">
          <i class="fas fa-handshake"></i>
          <h3>诚信经营</h3>
          <p>坚持透明定价，诚信服务，赢得客户信赖</p>
        </div>
        <div class="value-card">
          <i class="fas fa-globe"></i>
          <h3>创新发展</h3>
          <p>不断探索新的旅行方式，为客户带来更好的体验</p>
        </div>
      </div>

      <div class="team-section">
        <h2>我们的团队</h2>
        <div class="team-grid">
          <div class="team-member" v-for="member in teamMembers" :key="member.id">
            <img :src="member.image" :alt="member.name">
            <h3>{{ member.name }}</h3>
            <p class="position">{{ member.position }}</p>
            <p class="description">{{ member.description }}</p>
          </div>
        </div>
      </div>

      <div class="contact-section">
        <h2>联系我们</h2>
        <div class="contact-info">
          <div class="contact-item">
            <i class="fas fa-map-marker-alt"></i>
            <div>
              <h3>公司地址</h3>
              <p>北京市朝阳区xxx大厦</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-phone"></i>
            <div>
              <h3>联系电话</h3>
              <p>400-123-4567</p>
            </div>
          </div>
          <div class="contact-item">
            <i class="fas fa-envelope"></i>
            <div>
              <h3>电子邮箱</h3>
              <p>info@webtour.com</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'AboutView',
  data() {
    return {
      teamMembers: [
        {
          id: 1,
          name: '张明',
          position: '创始人 & CEO',
          description: '拥有15年旅游行业经验，致力于为客户创造完美的旅行体验。',
          image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&h=400&q=80'
        },
        {
          id: 2,
          name: '李华',
          position: '产品总监',
          description: '专注于开发独特的旅游产品，让每次旅行都与众不同。',
          image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=400&h=400&q=80'
        },
        {
          id: 3,
          name: '王芳',
          position: '客户服务总监',
          description: '确保为每位客户提供最优质的服务支持。',
          image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=400&h=400&q=80'
        }
      ]
    }
  }
}
</script>

<style scoped>
.about {
  min-height: 100vh;
}

.about-hero {
  height: 50vh;
  background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1920&q=80');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}

.hero-content h1 {
  font-size: 3rem;
  margin-bottom: 1rem;
}

.hero-content p {
  font-size: 1.5rem;
}

.about-content {
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 20px;
}

.about-section {
  text-align: center;
  margin-bottom: 4rem;
}

.about-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
}

.about-section p {
  max-width: 800px;
  margin: 0 auto;
  font-size: 1.1rem;
  color: #666;
}

.values-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-bottom: 4rem;
}

.value-card {
  text-align: center;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card i {
  font-size: 2.5rem;
  color: #4CAF50;
  margin-bottom: 1rem;
}

.value-card h3 {
  margin-bottom: 1rem;
}

.team-section {
  text-align: center;
  margin-bottom: 4rem;
}

.team-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.team-member {
  text-align: center;
}

.team-member img {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  margin-bottom: 1rem;
  object-fit: cover;
}

.team-member h3 {
  margin-bottom: 0.5rem;
}

.team-member .position {
  color: #4CAF50;
  font-weight: 500;
  margin-bottom: 1rem;
}

.team-member .description {
  color: #666;
}

.contact-section {
  text-align: center;
}

.contact-section h2 {
  font-size: 2rem;
  margin-bottom: 2rem;
}

.contact-info {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

.contact-item {
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 2rem;
  background: #f9f9f9;
  border-radius: 8px;
}

.contact-item i {
  font-size: 2rem;
  color: #4CAF50;
}

.contact-item h3 {
  margin-bottom: 0.5rem;
}

.contact-item p {
  color: #666;
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }

  .hero-content p {
    font-size: 1.2rem;
  }

  .contact-item {
    flex-direction: column;
    text-align: center;
  }
}
</style>
