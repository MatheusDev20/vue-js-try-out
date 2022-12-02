<script setup>
import MusicSearchForm from "./components/MusicInput/MusicInput.vue";
import PageTitle from "./components/AppTitle/PageTitle.vue";
</script>

<template>
  <div class="bg-gray-900 flex flex-col h-screen w-screen items-center py-36">
    <!-- Content -->
    <div class="flex flex-col gap-6">
      <PageTitle />
      <!-- Search Input-->
      <MusicSearchForm />
      <!-- Searched Music Info -->
    </div>
  </div>
</template>
