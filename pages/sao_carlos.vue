<template>
  <main>
    <sidebar :items="items" class="hide-sm" />
    <div class="content">
      <h1 class="display">
        São Carlos
      </h1>
      <dropdown :items="items" class="show-sm" />
      <nuxt-child :key="$route.params.id" />
    </div>
  </main>
</template>

<script>
import Sidebar from '@/components/sidebar'
import Dropdown from '@/components/dropdown'

export default {
  components: { Sidebar, Dropdown },
  scrollToTop: true,
  data () {
    return {
      items: [
        { name: 'Início', route: '/sao_carlos' },
        { name: 'Saúde', route: '/sao_carlos/saude' },
        { name: 'Ônibus', route: '/sao_carlos/onibus' },
        { name: 'Restaurantes', route: '/sao_carlos/restaurantes' },
        { name: 'Pizzarias', route: '/sao_carlos/pizzarias' },
        { name: 'Lanches', route: '/sao_carlos/lanches' },
        { name: 'Açaí e Sorvetes', route: '/sao_carlos/acai_sorvetes' },
        { name: 'Mercados', route: '/sao_carlos/mercados' },
        { name: 'Farmácias', route: '/sao_carlos/farmacias' },
        { name: 'Cinema', route: '/sao_carlos/cinema' },
        { name: 'Papelaria', route: '/sao_carlos/papelaria' },
        { name: 'Academias', route: '/sao_carlos/academias' },
        { name: 'Lavanderias', route: '/sao_carlos/lavanderias' },
        { name: 'Igrejas Locais', route: '/sao_carlos/igrejas' }
      ]
    }
  }
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

main {
  display: flex;
  flex-direction: row;

  .hide-sm {
    display: block;
    @include md {
      display: none;
    }
  }

  .show-sm {
    display:none;
    @include md {
      display: block;
    }
  }
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
