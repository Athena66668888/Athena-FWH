<script setup>
import { useRouter } from 'vitepress'
const router = useRouter()
</script>

<template>
  <div class="not-found-container">
    <h1 class="not-found-title">🥂 页面走丢了</h1>
    <p class="not-found-desc">不过没关系，香槟还在，你也在，我们可以从头开始探索。</p >
    <button class="not-found-btn" @click="router.go('/')">回到首页</button>
  </div>
</template>

<style scoped>
.not-found-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  min-height: 70vh;
  text-align: center;
  padding: 2rem;
}
.not-found-title {
  font-size: 2.8rem;
  font-weight: 600;
  color: #3D3A33;
  margin-bottom: 1rem;
  background: linear-gradient(135deg, #E0CDB8, #D4B89C);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}
.not-found-desc {
  font-size: 1.2rem;
  color: #6B6558;
  margin-bottom: 2rem;
}
.not-found-btn {
  background-color: #E0CDB8;
  border: none;
  padding: 0.8rem 2.4rem;
  border-radius: 30px;
  font-size: 1rem;
  color: #1A1A1A;
  cursor: pointer;
  transition: all 0.3s ease;
  box-shadow: 0 4px 14px rgba(224, 205, 184, 0.3);
}
.not-found-btn:hover {
  background-color: #D4B89C;
  transform: translateY(-2px);
  box-shadow: 0 8px 28px rgba(212, 184, 156, 0.4);
}
</style>