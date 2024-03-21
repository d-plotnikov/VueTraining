<template>
<div class="wrapper">
  <div class="container">
    <header class="header">
      <div class="header__navigation" v-if="!menuOpen" @click="openMenu()">
        <div class="header__navigation-line"></div>
        <div class="header__navigation-line"></div>
        <div class="header__navigation-line"></div>
      </div>
      <div class="header__navigation" v-if="menuOpen" @click="closeMenu()">
        <div class="header__navigation-line_close left"></div>
        <div class="header__navigation-line_close right"></div>
      </div>
      <div class="header__description">
        Песочница
      </div>
    </header>
    <div class="menu" v-if="menuOpen">
      <ul class="menu__items">
        <li :class="['menu__item', {'active' : ($route.name == item.name)}]" v-for="(item, key) in menu" :key="key">
          <router-link @click="menuOpen = false" href="#" :to="{name: item.name}">{{ item.title }}</router-link>
        </li>
      </ul>
    </div>
  </div>
</div>

</template>

<script>
import menu from '@/data/menu';


export default {
name: 'myMenu',
data: function () {
    return {
        menu,
        menuOpen: false,
    }
},
methods: {
  openMenu: function(){
    this.menuOpen = true
  },
  closeMenu: function(){
    this.menuOpen = false
  },
},

}
</script>

<style lang="scss">

</style>
