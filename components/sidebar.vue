<template>
  <div class="sidebar">
    <!-- <img :src="image"> -->
    <ul>
      <li v-for="(item,index) in items" :key="index" :class="{'active': $nuxt.$route.path === item.route}">
        <nuxt-link :to="`${item.route}`">
          {{ item.name }}
        </nuxt-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Sidebar',
  props: {
    image: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
    // height: 300px;
    min-width: 250px;
    max-width: 250px;
    // min-height: calc(95vmax);
    margin: 32px 24px;
    padding: 16px;
    padding-right: 32px;
    border-right: 1px solid #aaaaaa;
    display: flex;
    flex-direction: column;
    img {
        align-self: center;
        padding-bottom: 32px;
    }
    li {
        list-style: none;
        padding: 8px;
        margin-bottom: 4px;
        font-size: 18px;
        font-weight: bolder;
        text-transform: uppercase;
        transition: 0.4s;
        a {
            color: #222222;
            text-decoration: none;
        }
    }
    .active {
        background-color: #dedede;
        border-radius: 4px;
        transition: 0.4s;
    }

}

</style>
