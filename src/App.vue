<template>
  <div>
    <Menu />
    <router-view/>
  </div>
</template>

<script>
import '@/style/style.scss';
import Menu from './components/Menu'


export default {
  components: { Menu },
}
</script>
