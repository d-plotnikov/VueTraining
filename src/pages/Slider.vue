<template>
<div class="container">
  <div class="slider">
    <div class="slider-track" :style="{ transform: `translateX(-${currentPosition}%)` }">
      <div class="slider-item" v-for="(item, index) in items" :key="index">
        <h1>{{ item.title }}</h1>
        <p>{{ item.text }}</p>
      </div>
    </div>
    <div class="slider-controls">
      <button class="slider-control" @click="prevSlide" :disabled="currentSlide === 0">
        &#8249;
      </button>
      <div class="slider-dots">
        <button class="slider-dot" v-for="(item, index) in items" :key="index" :class="{ 'disabled': index === currentSlide }" @click="changeSlide(index)"></button>
      </div>
      <button class="slider-control" @click="nextSlide" :disabled="currentSlide === items.length - 1">
        &#8250;
      </button>
    </div>
    
  </div>
</div>

</template>

<script>
export default {
  data() {
    return {
      items: [
            {
                title: 'Это',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti animi quibusdam sit voluptatum id.'
            }, 
            {
                title: 'простейший',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti animi quibusdam sit voluptatum id.'
            },        
            {
                title: 'slider',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti animi quibusdam sit voluptatum id.'
            },        
            {
                title: 'на',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti animi quibusdam sit voluptatum id.'
            },
            {
                title: 'Vue',
                text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem deleniti animi quibusdam sit voluptatum id.'
            },
      ],
      currentSlide: 0,
      currentPosition: 0
    }
  },
  methods: {
    prevSlide() {
      if (this.currentSlide > 0) {
        this.currentSlide--;
        this.currentPosition = this.currentSlide * 100;
      }
    },
    nextSlide() {
      if (this.currentSlide < this.items.length - 1) {
        this.currentSlide++;
        this.currentPosition = this.currentSlide * 100;
      }
    },
    changeSlide(index) {
      this.currentSlide = index;
      this.currentPosition = index * 100;
    }
  }
}
</script>

<style>
.slider {
  margin-top: 100px;
  overflow: hidden;
  position: relative;
}

.slider-track {
  display: flex;
  transition: transform 0.3s ease-in-out;
  margin-bottom: 70px;
}

.slider-item {
  flex: 1 0 100%;
}

.slider-controls{
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.slider-controls,
.slider-dots {
  position: absolute;
  bottom: 0px;
  left: 50%;
  transform: translateX(-50%);
  
}
.slider-control{
    max-width: 25%;
    background: green;
    border: green;
    font-size: 2rem;
    padding: 0 1rem;
    cursor: pointer;
    outline: none;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
    padding-bottom: 4px;
}

.slider-dot {
    width: 15px;
    height: 15px;
    border-radius: 50%;
    padding: 0;
    margin-right: 10px;
    background: green;
    border: green;
    cursor: pointer;
    outline: none;
    transition: opacity 0.3s ease-in-out;
    opacity: 1;
}
.slider-dot:last-child{
    margin-right: 0;
}
.slider-dots{
    display: flex;
    justify-content: space-between;
    align-items: center;
    max-width: 50%;
    height: 100%;
    margin-left: 20px;
    margin-right: 20px;
}
.slider-control:hover,
.slider-dot:hover {
  opacity: 1;
}

.slider-control:disabled,
.slider-dot.disabled {
  opacity: 0.5;
  cursor: default;
}


</style>
