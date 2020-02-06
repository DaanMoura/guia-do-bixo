<template>
  <div>
    <navbar />
    <transition name="page">
      <div class="main">
        <nuxt />
      </div>
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

.main {
  position: absolute;
  z-index: 0;
  margin-top: 64px;
}

</style>
