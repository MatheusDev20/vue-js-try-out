<script setup>
import { ref, onMounted } from "vue";

const count = ref(0);

function increment() {
  count.value++;
}

function decrement() {
  count.value--;
}

onMounted(() => {
  console.log(`The initial count is ${count.value}`);
});
</script>

<template>
  <div class="wrapper">
    <button @click="increment">Increment</button>

    <button @click="decrement">Decrement</button>

    <span>{{ count }}</span>
  </div>
</template>

<style scoped>
button {
  font-weight: bold;
}
.wrapper {
  display: flex;
  gap: 1rem;
  flex-direction: column;
}
</style>
