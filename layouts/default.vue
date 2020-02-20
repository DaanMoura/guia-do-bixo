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
  components: { Navbar },
  head () {
    return {
      title: 'Guia do Bixo',
      meta: [
        { charset: 'utf-8' },
        { name: 'viewport', content: 'width=device-width, initial-scale=1' },
        { hid: 'description', name: 'description', content: process.env.npm_package_description || '' }
      ],
      link: [
        { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/icon?family=Material+Icons' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css?family=Roboto|Roboto+Slab&display=swap' }
      ]
    }
  }
}
</script>

<style lang="scss">

.main {
  position: absolute;
  z-index: 0;
  margin-top: 64px;
}

$tablet-width: 768px;
$desktop-width: 1024px;

@mixin md {
  @media (max-width: #{$desktop-width}) {
      @content;
  }
}

body {
    margin: 0;
    padding: 0;
    scroll-behavior: smooth;
    overflow-wrap: break-word;
}

html {
    font-family: 'Roboto', sans-serif;
    color: #222222;
}

.content {
    // padding: 0 32px;
    p {
        padding: 0 3.2rem 0 8px;
        text-align: justify;
        @include md {
          padding: 0 2rem 0 8px;
        }
    }
}

.container {
    position: relative;
    margin: 0 8rem;
    min-height: calc(100vh - 64px);
    display: flex;
    flex-direction: column;
    z-index: 1;

    @include md {
        margin: 0 2rem;
    }
}

h1,
h2 {
    font-family: 'Roboto Slab', 'serif';
    font-weight: bold;
}

.display {
    font-size: 48px;
}

.page-enter-active,
.page-leave {
    transition: opacity 1s;
}

.page-enter,
.page-leave-active {
    opacity: 0;
    transition: opacity 1s;
}

.rounded {
   border-radius: 5px;
    object-fit: cover;
    margin: 8px;
    width: 95%;
    height: auto;
    max-height: 350px;
    @include md {
      max-height: 280px;
    }
}

.card {
  border-radius: 15px;
  border: 1px solid #CFCFCF;
  padding: 16px 24px;
  padding-top: 4px;
  margin: 8px;
}

.rounded-button {
    border-radius: 20px;
    font-size: 12px;
    color: #028A38;
    font-stretch: condensed;
    border: 1px solid #CFCFCF;
    padding: 8px 16px;
    background-color: transparent;
    transition: 0.4s;
    cursor: pointer;
    &:hover {
        background-color: #028A38;
        border: 1px solid #028A38;
        color: #ffffff;
        transition: 0.4s;
    }
}

</style>
