<template>
  <div class="dropdown">
    <div v-for="(item,index) in items" :key="index">
      <div v-if="$nuxt.$route.path === item.route" @click="show()" class="dropdown-title">
        <div class="item-name">
          {{ item.name }}
        </div>
        <span>
          <i class="material-icons">
            {{ expandIcon }}
          </i>
        </span>
      </div>
    </div>
    <div v-if="isShown" class="items">
      <ul>
        <li
          v-for="(item,index) in items"
          :key="index"
          :class="{'active': $nuxt.$route.path === item.route}"
          @click="pushTo(item.route)"
        >
          <a>
            {{ item.name }}
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Dropdown',
  props: {
    image: {
      type: String,
      default: ''
    },
    items: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      isShown: false
    }
  },
  computed: {
    expandIcon () {
      return this.isShown ? 'expand_less' : 'expand_more'
    }
  },
  methods: {
    show () {
      this.isShown = !this.isShown
    },
    pushTo (route) {
      if (this.isShown) { this.isShown = false }
      this.$router.push(route)
    }
  }
}
</script>

<style lang="scss" scoped>

.dropdown-title {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    padding-bottom: 16px;
    &:hover {
        cursor: pointer;
    }
}

ul {
    padding: 0px;

}

li {
        list-style: none;
        padding: 8px;
        margin-bottom: 4px;
        margin-right: 8px;
        font-size: 18px;
        font-weight: bolder;
        text-transform: uppercase;
        transition: 0.4s;
        a {
            color: #222222;
            text-decoration: none;
            &:hover {
                cursor: pointer;
            }
        }
    }
    .active {
        background-color: #dedede;
        border-radius: 4px;
        transition: 0.4s;
    }

</style>
