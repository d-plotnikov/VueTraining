<template>
    <div class="container">
        <WeatherComponent/>
        <testing-vue :questions="myQuestions" :is-checkbox="false"></testing-vue>
        <Sortable/>
    </div>
</template>

<script>
import WeatherComponent from '@/components/WeatherComponent.vue';
import testingVue from '@/components/testingVue.vue';

export default {
    name: 'chatGpt',
    components: { WeatherComponent, testingVue}
}
</script>

<style lang="scss">

</style>