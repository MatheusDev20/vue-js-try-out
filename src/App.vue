<script setup>
import HelloWorld from "./components/CounterComponent.vue";
import TheWelcome from "./components/TheWelcome.vue";
</script>

<template>
  <header>
    <HelloWorld msg="You did it!" />
  </header>

  <main>
    <TheWelcome />
  </main>
</template>

<style scoped>
header {
  line-height: 1.5;
}

.logo {
  display: block;
  margin: 0 auto 2rem;
}

@media (min-width: 1024px) {
  header {
    display: flex;
    place-items: center;
    padding-right: calc(var(--section-gap) / 2);
  }
}
</style>
