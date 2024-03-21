<template>
    <div class="container">
        <div class="smooth-wrapper">
            <div class="smooth-content">
            <div class="circle">
                <div class="mini-circle"></div>
                <div class="mini-circle"></div>
            </div>
            <div class="block red pt-80 pl-50">
               <h2 style="color: white; margin-top: 80px;">Начни скроллить, вылетит птичка</h2>
            </div>
            <div class="block"></div>
            <div class="block red"></div>
            <div class="block"></div>
            <div class="block red"></div>
            <div class="block"></div>
            <div class="block red"></div>
            <div class="block"></div>
            <div class="block red"></div>
            </div>
        </div>
    </div>
</template>

<script>
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";



export default {
    name: 'GsapScroll',   
    methods: {
        refresh(){
           ScrollTrigger.killAll();
        },
        initAnimation: function(){
            let t1 = gsap.timeline({});
            ScrollTrigger.create({
                animation: t1,
                trigger: '.circle',
                start: "0", 
                end: '+=8980',
                scrub: 5, 
                pin: true,
            }) 

            t1.to('.circle', {
                rotation: 2900,
                motionPath: {
                    path: "M1.4841 1C382.176 13.4626 1201.49 -12.2825 1201.49 139.237C1201.49 317.569 -26.8903 117.591 1.4841 298.627C31.1493 487.899 1221 311.91 1221 449.654C1221 631.037 66.011 519.808 30.4498 587.891C-77.7283 795 807.204 746.297 1221 795"
                },
            });
        }
    },
    mounted() {
        this.initAnimation();
    },
    unmounted() {
        this.refresh();
    }
}
</script>

<style lang="scss">

</style>