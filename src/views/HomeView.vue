<script setup>
import welcomeAnim from "../assets/welcome.json";
</script>

<template>
  <div class="w-100 h-100">
    <Vue3Lottie
      class="mx-auto my-auto"
      :animationData="welcomeAnim"
      width="50%"
    />
  </div>
</template>
