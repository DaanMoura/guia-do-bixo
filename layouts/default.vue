<template>
  <div>
    <navbar />
    <transition>
      <nuxt />
    </transition>
  </div>
</template>

<script>
import Navbar from '@/components/navbar'

export default {
  components: { Navbar }
}
</script>

<style lang="scss" scoped>

</style>
