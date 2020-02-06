<template>
  <div class="flex">
    <img src="https://www.concursos.ufscar.br/imagens/portal.jpg" class="img-card">
    <div class="card">
      <div>
        <h2>Ônibus</h2>
        <p>L64 - ESTAÇÃO NORTE X UFSCar (USE - Via Trevo Norte)</p>
        <p>64 - Estação Norte - UFSCar USE</p>
        <p> 01 - Pacaembu X UFSCar Norte</p>
        <p>03 - Azulville X Estação Norte via UFSCar Sul</p>
        <p>53 - Astolpho X Jóquei Clube via UFSCar USE</p>
      </div>
      <button class="rounded-button">
        MAIS INFORMAÇÕES
      </button>
    </div>
    <div class="card">
      <div>
        <h2>Restaurante Universitário </h2>
        <p class="subtitle">
          Almoço {{ almoco.data }} ({{ almoco['dia-semana'] }})
        </p>
      </div>
      <div>
        <p><strong>Prato Principal: </strong> {{ almoco.prato }}</p>
        <p><strong>Guarnição: </strong> {{ almoco.guarnicao }}</p>
        <p><strong>Arroz: </strong> {{ almoco.arroz }}</p>
        <p><strong>Feijão: </strong> {{ almoco.feijao }}</p>
        <p><strong>Salada: </strong> {{ almoco.salada }}</p>
        <p><strong>Sobremesa: </strong> {{ almoco.sobremesa }}</p>
      </div>
      <button class="rounded-button">
        MAIS INFORMAÇÕES
      </button>
    </div>
  </div>
</template>

<script>

export default {
  async asyncData ({ $axios }) {
    const cardapio = await $axios.$get('http://ufscar-utilities-server.herokuapp.com/cardapio/hoje')
    return { almoco: cardapio[0], janta: cardapio[1] }
  }
}
</script>

<style lang="scss" scoped>
.flex {
  display: flex;
  flex-wrap: wrap;
}

.card {
  display: flex;
  flex-direction: column
}

.img-card {
  height: 400px;
}

button {
  margin-top: auto;
  width: fit-content;

}

</style>
