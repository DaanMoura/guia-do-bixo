<template>
  <div>
    <h2>Mapa</h2>
    <p>Clique na imagem para abrir em tela cheia</p>
    <a href="/mapa.jpeg" target="_blank">
      <img src="~/assets/mapa.jpeg">
    </a>
  </div>
</template>

<script>
export default {
  name: 'Mapa'
}
</script>

<style lang="scss" scoped>
  img {
    max-height: 90vh;
    width: auto;
  }
</style>
