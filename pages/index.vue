<template>
  <div class="container">
    <Hero />
    <LargeCardDisplay
      v-for="cardInfo in largeCardInfo"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
    <SmallCardDisplay
      v-for="cardInfo in smallCardSections"
      :key="cardInfo.id"
      :cardsSection="cardInfo"
    />
  </div>
</template>

<script>
import Hero from "../components/Hero";
import LargeCardDisplay from "../components/LargeCardDisplay.vue";
import { largeCardSections, smallCardSections } from "@/assets/data.js";

export default {
  components: { Hero, LargeCardDisplay },
  data() {
    return {
      largeCardInfo: largeCardSections,
      smallCardSections,
    };
  },
};
</script>

<style>
</style>
