<template>
    <div class="logo-container">
      <img :src="logoSrc" alt="Cloud Servers Logo" class="logo" />
    </div>
  </template>

  <script>
  // Import the logo image
  import logoSrc from './Cloud Serves_transparent2.png';

  export default {
    data() {
      return {
        // Use the imported image as the logo source
        logoSrc
      };
    }
  };
  </script>

<style scoped>
.logo-container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 120px;
  padding: 0 20px;
  background-color: #f8f8f8;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  border-bottom: 1px solid #e7e7e7;
  margin-bottom: 20px;
}

.logo {
  width: 200px;
  height: auto;
  display: block;
  margin-top: 20px;
}

</style>
