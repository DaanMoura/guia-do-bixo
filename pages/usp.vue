<template>
  <main>
    <sidebar :items="items" image="/usp.png" />
    <div class="content">
      <h1 class="display">
        USP
      </h1>
      <nuxt-child :key="$route.params.id" />
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/sidebar'

export default {
  components: { Sidebar },
  data () {
    return {
      items: [
        { name: 'Início', route: '/usp/' },
        { name: 'Manual do Calouro', route: '/usp/manual' },
        { name: 'Mapa', route: '/usp/mapa' },
        { name: 'USP Virtual', route: '/usp/usp_virtual' },
        { name: 'Ônibus', route: '/usp/onibus' },
        { name: 'Restaurante Universitário', route: '/usp/bandeijao' },
        { name: 'Portarias e Guaritas', route: '/usp/portarias' },
        { name: 'Bibliotecas', route: '/usp/bibliotecas' },
        { name: 'Cultura e Esportes', route: '/usp/cultura_e_esportes' },
        { name: 'Bancos', route: '/usp/bancos' },
        { name: 'Bolsas sociais', route: '/usp/bolsas' },
        { name: 'Centro Acadêmico', route: '/usp/caaso' },
        { name: 'Unidade Básica de Atendimento à Saúde', route: '/usp/ubas' },
        { name: 'Rede wi-fi', route: '/usp/wifi' },
        { name: 'Encontros abu', route: '/usp/abu' }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
main {
    display: flex;
    flex-direction: row;
}

.content {
  margin-left: 24px;
}

.page-enter-active, .page-leave-active {
  transition: all .4s cubic-bezier(.55,0,.1,1);
  opacity: 1;
}
.page-enter, .page-leave-active {
  opacity: 0;
  transition: all .4s cubic-bezier(.55,0,.1,1);
}

</style>
