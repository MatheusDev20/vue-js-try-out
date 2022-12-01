<script setup>
import MusicInput from "./components/MusicInput/MusicInput.vue";
</script>

<template>
  <div class="bg-gray-900 flex flex-col h-screen w-screen items-center gap-12">
    <h1 class="mt-10 font-bold text-white text-4xl">My Music list</h1>

    <main class="flex flex-col gap-12">
      <!-- Main Input -->
      <MusicInput />
      <div>
        <h3>Engenheiros do Hawai Piano Bar</h3>
      </div>
    </main>
  </div>
</template>
