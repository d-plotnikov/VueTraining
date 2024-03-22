<template>
  <div >
    <h1>Weather Information</h1>
    <form @submit.prevent="fetchWeatherData">
      <label for="region">Region:</label>
      <select id="region" v-model="selectedRegion">
        <option v-for="region in regions" :value="region.value" :key="region.value">{{ region.label }}</option>
      </select>
      <button type="submit">Fetch Weather</button>
    </form>
    <ul v-if="weatherData">
      <li v-for="(value, key) in weatherData" :key="key">
        {{ key }}: {{ value }}
      </li>
    </ul>
    <h3>P. S. Ставил задачу в несколько этапов:</h3>
    <ul class="my-style-list">
      <li class="my-style-item">Создать компонент который будет выводить погоду в консоль</li>
      <li class="my-style-item">Подключиться к API</li>
      <li class="my-style-item">Добавить возможность выбора региона</li>
      <li class="my-style-item">Переписать синтаксис с испозованием async await</li>
      <li class="my-style-item">Стилизовать с помощью css на свой вкус</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "WeatherComponent",
  data() {
    return {
      apiUrl: "https://api.openweathermap.org/data/2.5/weather",
      apiKey: "d456af1653589db20bd812fbeb08a1f9",
      selectedRegion: "London",
      regions: [
        { label: "London, UK", value: "London" },
        { label: "New York, US", value: "New York" },
        { label: "Tokyo, Japan", value: "Tokyo" },
      ],
      weatherData: null,
    };
  },
  methods: {
    async fetchWeatherData() {
      const url = `${this.apiUrl}?q=${this.selectedRegion}&appid=${this.apiKey}`;
      try {
        const response = await fetch(url);
        const data = await response.json();
        this.weatherData = data;
        console.log(data); // Output the weather data to the console
      } catch (error) {
        console.error(error);
      }
    },
  },
};
</script>

<style scoped>

</style>