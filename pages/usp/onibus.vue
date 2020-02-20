<template>
  <div>
    <h2>
      Ônibus – campus 1 x campus 2
    </h2>
    <a href="http://www.puspsc.usp.br/transporte-alimentacao-e-moradia/" target="_blank">http://www.puspsc.usp.br/transporte-alimentacao-e-moradia/</a><br>
    <a href="http://www.puspsc.usp.br/horario-de-onibus-areas-1-e-2/" target="_blank">http://www.puspsc.usp.br/horario-de-onibus-areas-1-e-2/</a>
    <p>O embarque no campus 1 é feito próximo a entrada da Arquitetura, no ponto de ônibus dentro do campus</p>
    <img src="~/assets/onibus.png" alt="horarios de onibus">
  </div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
 a {
   font-weight: bold;
   color: #028A38;
   text-decoration: underline;
 }

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
