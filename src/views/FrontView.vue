<template>
    <NavbarView />
    <RouterView></RouterView>
    <FooterView></FooterView>
</template>

<script>
import NavbarView from '@/components/NavbarView.vue'
import FooterView from '@/components/FooterView.vue'
import { RouterView } from 'vue-router'

export default {
  components: {
    NavbarView,
    RouterView,
    FooterView
  }
}
</script>

<style scoped>

</style>
