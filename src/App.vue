<template>
  <div>
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import './style/style.scss';
import Menu from './components/Menu.vue'


export default {
  components: { Menu },
}
</script>
