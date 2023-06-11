<template>
  <!-- Navigation bar -->
  <nav>
    <div class="flycontainer">
      <!-- Company logo -->
      <a href="index.html"><img class="logo" src="../assets/images/logo.png"></a>
      <!-- menu and it's items linking to other pages -->
      <div class="menu">
        <a href="#">Home</a>
        <a href="#">Products</a>
        <a href="#">About Us</a>
        <a href="#">Contact Us</a>
        <a href="index.html" class="is-active">Cart</a>
        <a href="#">Account</a>
      </div>
      <!-- Hamburger menu button for responsive design -->
      <button class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </nav>
  <!-- Mobile navigation menu -->
  <nav class="mobile-nav" :class="{ 'is-active': isActive }">
    <a href="#">Home</a>
    <a href="#">Products</a>
    <a href="#">About Us</a>
    <a href="#">Contact Us</a>
    <a href="index.html" class="is-active">Cart</a>
    <a href="#">Account</a>
  </nav>
  <br><br><br><br><br><br>
</template>

<script>
// defineProps({

// })
export default {
  name: 'Header',
  // Here you can add data and methods
  data() {
    return {
      // The isActive variable is a reactive data property used to toggle the mobile navigation menu
      isActive: false,
    };
  },
  methods: {
    // The toggleMenu method is used to toggle the isActive variable, which controls the visibility of the mobile navigation menu
    toggleMenu() {
      this.isActive = !this.isActive;
    }
  }
}
</script>

<style scoped></style>



