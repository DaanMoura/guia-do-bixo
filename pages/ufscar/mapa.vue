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

$tablet-width: 768px;
$desktop-width: 1024px;

@mixin md {
  @media (max-width: #{$desktop-width}) {
      @content;
  }
}
  img {
    max-height: 90vh;
    width: auto;
    @include md {
      max-width: 80vw;
    }
  }
</style>
