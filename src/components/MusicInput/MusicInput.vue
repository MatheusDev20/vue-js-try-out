<script setup>
import { ref } from "vue";
import DeezerService from "../../services/Deezer/Deezer";

const searchedSong = ref("");
const isEmpty = ref(false);

const onFormSubmit = async (e) => {
  console.log(searchedSong.value);
  e.preventDefault();
  if (!searchedSong.value) isEmpty.value = true;
  console.log(await DeezerService.searchTrack(searchedSong.value));
};
</script>

<template lang="">
  <div class="flex flex-row gap-8 items-center w-96">
    <form class="w-full flex flex-row gap-4">
      <!-- Input Control -->
      <div class="flex flex-col gap-3 w-full">
        <input
          v-model="searchedSong"
          placeholder="Search for your favorite song ..."
          class="form-control block w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
        />
        <small v-if="isEmpty" class="text-red-700 font-bold">
          Search at least for one song <span class="ml-3">😓</span>
        </small>
      </div>
      <button
        @click="onFormSubmit"
        class="w-24 h-10 inline-block px-6 py-2.5 bg-blue-600 text-white font-bold text-xs leading-tight uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
      >
        Go !
      </button>
    </form>
  </div>
</template>

<style lang=""></style>
