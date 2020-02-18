<template>
  <div>
    <h2>Mapas</h2>
    <h4>Campus 1</h4>
    <embed src="/mapa_usp_campus1.pdf" type="application/pdf" width="600px" height="600px"><br>
    <a href="/mapa_usp_campus1.pdf" target="_blank"> Baixar Mapa </a>
    <h4>Campus 2</h4>
    <embed src="/mapa_usp_campus2.pdf" type="application/pdf" width="600px" height="600px"><br>
    <a href="/mapa_usp_campus2.pdf" target="_blank"> Baixar Mapa </a>
  </div>
</template>

<script>
export default {

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

 a {
   font-weight: bold;
   color: #028A38;
   text-decoration: underline;
 }

 embed {
     @include md {
         display: none;
     }
 }
</style>
