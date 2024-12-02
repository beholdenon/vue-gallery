<template>
  <div class="loading-screen"><div class="loader"></div></div>
</template>

<style scoped>
.loading-screen {
  position: fixed;
  width: 100vw;
  height: 100vh;
  background: #efefef;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 22333;
}

.loader {
  border: 4px solid #aaa;
  border-top: 4px solid rgba(0, 0, 0, 0.6);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
