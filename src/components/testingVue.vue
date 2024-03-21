<template>
  <div>
    <div v-if="showQuestion" ref="container">
      <h3 >{{ currentQuestion.question }}</h3>
      
        <div v-for="(option, key) in currentQuestion.options" :key="key" >
          <label>
            <input v-if="currentQuestion.type === 'checkbox'" type="checkbox" :value="option" v-model="selectedOptions">
            <input v-if="currentQuestion.type === 'radio'" type="radio" :value="option" v-model="selectedOption">
            {{ option }}
          </label>
        </div>
      <div>
        <button @click="checkAnswer">Accept answer</button>
        <button v-if="showNextButton" @click="nextQuestion">Next</button>
      </div>
    </div>
    <div v-else>
      <p>No more questions.</p>
    </div>
    <div v-if="showFeedback">
      <p>{{ feedback }}</p>
    </div>
  </div>
</template>

<script>
import { gsap } from "gsap";

export default {
  data() {
    return {
      questions: [
        {
          question: 'What is the capital of France?',
          options: ['Paris', 'Rome', 'Madrid'],
          answer: ['Paris'],
          type: 'radio'
        },
        {
          question: 'What is the highest mountain in the world?',
          options: ['Everest', 'K2', 'Makalu'],
          answer: ['Everest'],
          type: 'radio'
        },
        {
          question: 'Which of the following are fruits?',
          options: ['Tomato', 'Potato', 'Strawberry', 'Broccoli'],
          answer: ['Tomato', 'Strawberry'],
          type: 'checkbox'
        },
        {
          question: 'Which of the following are countries in South America?',
          options: ['Brazil', 'Argentina', 'Egypt', 'Spain'],
          answer: ['Brazil', 'Argentina'],
          type: 'checkbox'
        }
      ],
      currentQuestionIndex: 0,
      selectedOption: '',
      selectedOptions: [],
      feedback: '',
      showQuestion: true,
      showFeedback: false,
      showNextButton: false
    }
  },
  computed: {
    currentQuestion() {
      return this.questions[this.currentQuestionIndex];
    }
  },
  methods: {
    checkAnswer() {
      if (this.currentQuestion.type === 'radio') {
        if (this.selectedOption === this.currentQuestion.answer[0]) {
          this.feedback = 'Correct!';
        } else {
          this.feedback = 'Incorrect.';
        }
      } else if (this.currentQuestion.type === 'checkbox') {
        let correct = true;
        for (let i = 0; i < this.selectedOptions.length; i++) {
          if (!this.currentQuestion.answer.includes(this.selectedOptions[i])) {
            correct = false;
            break;
          }
        }
        if (correct && this.selectedOptions.length === this.currentQuestion.answer.length) {
          this.feedback = 'Correct!';
        } else {
          this.feedback = 'Incorrect.';
        }
      }
      this.showFeedback = true;
      this.showNextButton = true;
    },
    nextQuestion() {
      this.currentQuestionIndex++;
      this.selectedOption = '';
      this.selectedOptions = [];
      this.feedback = '';
      this.showQuestion = (this.currentQuestionIndex < this.questions.length);
      this.showFeedback = false;
      this.showNextButton = false;
    }
  },
  mounted() {
    gsap.from(this.$refs.container, {
      opacity: 0,
      duration: 1,
      ease: "power2.out",
    });
  },
}
</script>

<style scoped>
h3{
    margin-top: 60px;
}
</style>