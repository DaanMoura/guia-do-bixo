<template>
  <div class="navbar">
    <nuxt-link to="/" class="brand">
      <img src="~/assets/logo.png" class="logo">
      <div>
        <strong>GUIA DO BIXO</strong><br>
        ABUSCar {{ activeTab }}
      </div>
    </nuxt-link>
    <nuxt-link :class="{ 'active': $nuxt.$route.name.includes('index') }" to="/" class="nav-item">
      Início
    </nuxt-link>
    <nuxt-link :class="{ 'active': $nuxt.$route.name.includes('ufscar') }" to="/ufscar" class="nav-item">
      UFSCar
    </nuxt-link>
    <nuxt-link :class="{ 'active': $nuxt.$route.name.includes('usp') }" to="/usp" class="nav-item">
      USP
    </nuxt-link>
    <nuxt-link :class="{ 'active': $nuxt.$route.name.includes('sao_carlos') }" to="/sao_carlos" class="nav-item">
      São Carlos
    </nuxt-link>
  </div>
</template>

<script>
export default {
  name: 'Navbar'
}
</script>

<style lang="scss">
a {
  position: relative;
  text-decoration: none;
  color: #222222;
}

body {
  margin: 0;
  padding: 0;
}

.brand {
  display: flex;
  align-items: center;
}

$thetransition: all .2s cubic-bezier(1,.50,0,.75) 0s;

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
}
</style>
