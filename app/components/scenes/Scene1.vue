<script setup>
import gsap from 'gsap'

import CutoutText from '../CutoutText.vue'

onMounted(() => {
  const character_1 = document.getElementById('character_1')
  gsap.set(character_1, {
    top: '100%',
    opacity: 1,
    rotate: -2,
    x: '5%'
  })
  gsap.to(character_1, {
    y: '-150%',
    opacity: 1,
    duration: 3.5,
    ease: "power3.out",
    onComplete: () => {
      gsap.to(character_1, {
        rotation: 4,
        repeat: -1,
        yoyo: true,
        duration: 1,
        ease: "sine.inOut",
      });
    }
  });
  
  const text_1 = document.getElementById('text_1')
  const text_2 = document.getElementById('text_2')
  const text_3 = document.getElementById('text_3')
  const text_4 = document.getElementById('text_4')
  const text_5 = document.getElementById('text_5')
  const text_6 = document.getElementById('text_6')
  const text_7 = document.getElementById('text_7')
  const welcomeText = [text_1, text_2, text_3, text_4, text_5, text_6, text_7];
  let tl = gsap.timeline();
  welcomeText.forEach((el, i) => {
    tl.to(el, {
      scale: 1,
      opacity: 1,
      duration: 1,
      ease: "power3.out",
    }, i === 0 ? 0 : "-=0.5");
  });
  tl.eventCallback("onComplete", () => {
  welcomeText.forEach((el, i) => {
    if (i % 2 === 0) {
      const wiggle = gsap.timeline({ repeat: -1, yoyo: true });
      wiggle
        .to(el, {
          rotation: 4,
          scale: 1.2,
          duration: 0.4,
          ease: "sine.inOut",
        })
        .to(el, {
          rotation: -4,
          duration: 0.2,
          ease: "sine.inOut",
        })
        .to(el, {
          rotation: 4,
          duration: 0.2,
          ease: "sine.inOut",
        })
        .to(el, {
          rotation: 0,
          scale: 1,
          duration: 0.4,
          ease: "sine.inOut",
        });
    }
  });
});
})

</script>

<template>
  <img src="/images/bg.jpg" class=" h-screen object-cover" alt="bg" />
  <img id="character_1" src="/images/character-1.png" class="absolute z-10" alt="character-1" />
  <cutout-text id="text_1" text="w" class="absolute z-10 top-20 left-10 opacity-0 scale-200" />
  <cutout-text id="text_2" text="e" class="absolute z-10 top-25 left-30 opacity-0 scale-200" />
  <cutout-text id="text_3" text="l" class="absolute z-10 top-23 left-45 opacity-0 scale-200" />
  <cutout-text id="text_4" text="c" class="absolute z-10 top-40 left-40 opacity-0 scale-200" />
  <cutout-text id="text_5" text="o" class="absolute z-10 top-40 left-55 opacity-0 scale-200" />
  <cutout-text id="text_6" text="m" class="absolute z-10 top-40 left-70 opacity-0 scale-200" />
  <cutout-text id="text_7" text="e" class="absolute z-10 top-40 left-90 opacity-0 scale-200" />
</template>