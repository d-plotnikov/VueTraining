<template>
    <div class="container">
        <div class="site-container">
                <main class="main">
                    <section class="first">
                        <div class="container">
                            <h2 style="color:white;">Заголовок секции 1</h2>
                        </div>
                    </section>
                    <section class="second red">
                        <div class="container">
                            <h2 style="color:white;">Заголовок секции 2</h2>
                        </div>
                    </section>
                    <section class="third green">
                        <div class="container">
                            <h2 style="color:white;">Заголовок секции 3</h2>
                        </div>
                    </section>
                    <section class="fourth blue">
                        <div class="container">
                            <h2 style="color:white;">Заголовок секции 4</h2>
                        </div>
                    </section>
                </main>
                <section class="red mb-20 ">
                    <div class="container after-scroll ">
                        <h2 style="color:white;">Заголовок секции 5</h2>
                    </div>
                </section>
                <section class="blue after-scroll mb-20">
                    <div class="container">
                        <h2 style="color:white;">Заголовок секции 6</h2>
                    </div>
                </section>
                <footer class="footer">
                    <h2>Конец</h2>
                </footer>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

export default {
    name: 'GsapGorizontalScroll',

    methods: {
        refresh(){
            ScrollTrigger.killAll();
        },
        initScrollAnimate: function(){
            let main = document.querySelector('.main');
            let t2 = gsap.timeline({});

            ScrollTrigger.create({
                    animation: t2,
                    trigger: '.site-container',
                    start: 'top top',
                    end: () => main.offsetWidth / 2,
                    scrub: true,
                    pin: true,
            }) 
            t2.fromTo('.second', {x: '0'}, {x: '-100%'})
            t2.fromTo('.third', {x: '-100%',}, {x: '-200%'})
            t2.fromTo('.fourth', {x: '-200%'}, {x: '-300%'})
        }
    },
    mounted() {
        this.initScrollAnimate();
    },
    unmounted() {
        this.refresh();
    }
}
</script>

<style lang="scss">

</style>