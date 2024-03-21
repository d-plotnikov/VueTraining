<template>
<div class="container">
    <Title msg="Тестирование - ответь на все вопросы верно."/>
    <h3 class="h3">Внимательней, вопросы и ответы каждый раз перемешиваются!</h3>
    <div v-for="(item, index) in testArray" :key="index">
    
        <div v-if="item.type == 'checkbox' && counterItems === index">
            <h2 class="h1">{{item.text}}</h2>
            <div 
            :class="['checkbox', {'correct' : (answer.selected && answer.correct && btnNext)}, {'incorrect' : (answer.selected && !answer.correct && btnNext)}, {'correct-incorect' : (!answer.selected && answer.correct && btnNext)}]"
            v-for="(answer, key) in item.answers" :key="key+''+item.text">
                <input
                @change="isTarget($event, key, item.type)"
                :id="item.type+''+key"
                :disabled="disableCheck"
                :type="item.type" >
                <label :for="item.type+''+key">
                {{answer.text}}
                </label>
            </div>
        </div>

        <div v-if="item.type == 'radio' && counterItems === index">
            <h1 class="h1">{{item.text}}</h1>
            <div
            v-for="(answer, key) in item.answers" :key="key+''+item.text"
            :class="['radio', {'correct' : (answer.selected && answer.correct && btnNext)}, {'incorrect' : (answer.selected && !answer.correct && btnNext)}, {'correct-incorect' : (!answer.selected && answer.correct && btnNext)}]"
            >
                <input
                @change="isTarget($event, key, item.type)"
                :name="item.text"
                :disabled="disableCheck"
                :id="item.type+''+key"
                :type="item.type">
                <label :for="item.type+''+key">
                {{answer.text}}
                </label>
            </div>
        </div>



    </div>
</div>
<div class="container">
    <button class="btn absolute test__btn" v-if="btnAccept" @click="acceptAnswer()">Принять</button>
    <button class="btn absolute test__btn" v-if="btnNext" @click="nextAnswer()">Следующий вопрос</button>
    <div v-if="counterItems == testArray.length && counterItems == counterCorrect">
        <h2 class="h1 text-green">Привет я хорошая ОС!</h2>
        <button class="btn absolute test__btn" @click="resetTest()">Заново</button>
    </div>
    <div v-if="counterItems == testArray.length && counterItems !== counterCorrect">
        <h2 class="h1 text-red">Привет я плохая ОС!</h2>
        <button class="btn absolute test__btn" @click="resetTest()">Заново</button>
    </div>
</div>

</template>

<script>
import items from '@/data/data';
import Title from '@/components/PracticeTitle'

export default {
name: 'myPractice',
components: { Title },
data: function () {
    return {
        items,
        counterItems: 0,
        btnAccept: false,
        btnNext: false,
        counterCorrect: 0,
        disableCheck: false,
    }
},
computed: {
    /*Перемешиваем массив*/
    testArray: function () {
        return this.shuffling(this.items);
    }
},
methods: {
    shuffling: function (data) {
            data.sort(function () {
                return Math.random() - 0.5;
            });

            data.forEach(function (item) {
                item.answers.forEach(function (answer) {
                    answer.selected = false;
                });

                item.answers.sort(function () {
                    return Math.random() - 0.5;
                })
            })

        return data;
    },
    isTarget: function ($event, key, type) {
        
        var arrayItems = this.testArray[[this.counterItems]];
        var checkItem = arrayItems.answers[key];

        if(type == 'radio'){
            arrayItems.answers.forEach(function(item){
                item.selected = false
            })
            checkItem.selected = true
        } else if (type === 'checkbox') {
            if ($event.target.checked) {
                checkItem.selected = true;
                arrayItems.answers[key].selected = true;
            } else {
                checkItem.selected = false;
                arrayItems.answers[key].selected = false;
            }
        }
        
        if(!this.btnNext){
            this.btnAccept = true;
        }
    },
    acceptAnswer: function(){
        this.btnAccept = false;
        this.btnNext = true;

        var arrayItems = this.testArray[[this.counterItems]];
        var checkItems = arrayItems.answers;
        var currCorrect = 0;
        

        if(arrayItems.type == 'radio'){
            
            checkItems.forEach(function(item){ 
                
                if(item.correct && item.selected){
                    currCorrect = 1
                }
            })
        }
        if(arrayItems.type == 'checkbox'){
            let currNoCorrect = false;

            checkItems.forEach(function(item){ 
                if(item.correct && item.selected){
                    currCorrect = 1
                } else if (item.correct && !item.selected){
                    currNoCorrect = true; 
                } else if(!item.correct && item.selected) {
                    currNoCorrect = true;
                }
                if(currNoCorrect){
                    currCorrect = 0;
                }
            })
        }

        this.counterCorrect = this.counterCorrect + currCorrect;
        this.disableCheck = true;
    },
    nextAnswer: function(){
        this.counterItems++;
        this.disableCheck = false;
        this.btnNext = false; 
    },
    resetTest: function () {
        this.counterItems = 0;
        this.btnAccept = false,
        this.btnNext = false,
        this.counterCorrect = 0,
        this.disableCheck = false,
        this.shuffling(this.testArray);
    
    },
}
}
</script>

<style lang="scss">

</style>