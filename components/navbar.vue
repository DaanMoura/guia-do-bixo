<template>
  <div v-click-outside="handleVisibility" class="navbar">
    <div @click="visible = !visible" class="nav-icon">
      <i class="material-icons">
        menu
      </i>
    </div>
    <nav>
      <nuxt-link to="/" class="brand">
        <img src="~/assets/logo.png" class="logo">
        <div>
          <strong>GUIA DO BIXO</strong><br>
          ABUSCar 2020
        </div>
      </nuxt-link>

      <a
        v-for="(link,index) in links"
        :key="index"
        :class="{ '--is-hidden': !visible, 'active': $nuxt.$route.name.includes(link.route) }"
        @click="pushTo(link.route)"
        class="nav-item"
      >
        {{ link.title }}
      </a>
    </nav>
  </div>
</template>

<script>
import ClickOutside from 'vue-click-outside'

export default {
  name: 'Navbar',
  directives: {
    ClickOutside
  },
  data () {
    return {
      visible: false,
      links: [
        { title: 'UFSCar', route: 'ufscar' },
        { title: 'USP', route: 'usp' },
        { title: 'São Carlos', route: 'sao_carlos' },
        { title: 'ABU', route: 'abu' },
        { title: 'Contato', route: 'contato' }
      ]
    }
  },
  mounted () {
    // prevent click outside event with popupItem.
    this.popupItem = this.$el
  },
  methods: {
    handleVisibility () {
      if (this.visible) { this.visible = false }
    },
    pushTo (route) {
      this.handleVisibility()
      this.$router.push('/' + route)
    }
  }
}
</script>

<style lang="scss">
$tablet-width: 768px;
$desktop-width: 1024px;

@mixin md {
  @media (max-width: #{$desktop-width}) {
    @content;
  }
}

$thetransition: all .2s cubic-bezier(1,.50,0,.75) 0s;

a {
  position: relative;
  text-decoration: none;
  color: #222222;
  font-weight: normal;
  &:hover {
    cursor: pointer;
  }
}

body {
  margin: 0;
  padding: 0;
}

nav {
  display: flex;
  align-items: center;

  @include md {
    flex-direction: column;
    align-items: flex-start;
  }

  transition: 0.4s;
}

.nav-icon {
  display: none;
  border-radius: 25px;
  padding: 4px 6px;
  transition: $thetransition;
  &:hover {
    cursor: pointer;
    background-color: #dddddd;
    transition: $thetransition;
  }
  &:active {
    background-color: #aaaaaa;
    transition: $thetransition;
  }

  @include md {
    display: block;
  }
}

.brand {
  display: flex;
  align-items: center;
}

.--is-hidden {
  display: block;
  @include md {
    display: none;
  }
}

.nav-item {
  margin-left: 48px;
  padding: 4px;

  &:before {
    content: "";
    position: absolute;
    width: 100%;
    height: 1px;
    bottom: 0;
    left: 0;
    height: 2px;
    background-color: #222222;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: $thetransition;
    transition: $thetransition;
  }
  &:hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }

  @include md {
    margin-left: 12px;
    padding: 6px;
  }
}

.active {
  font-weight: bold;
}

.logo {
  height: 48px;
  width: 48px;
  padding-right: 4px;
}

.navbar {
  box-shadow: 0 2px 15px #00000060;
  display: flex;
  padding: 8px 32px;
  align-items: center;
  position: fixed;
  background-color: #ffffff;
  width: 100%;
  z-index: 999;
  transition: 0.4s;
}
</style>
