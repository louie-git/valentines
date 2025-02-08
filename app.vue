<template>
  <Head>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous">
    <link href="https://fonts.googleapis.com/css2?family=Satisfy&display=swap" rel="stylesheet">
  </Head>
  <div class="relative font-satisfy w-screen h-screen flex flex-col overflow-hidden">
      <img src="/assets/bg/bg2.png" alt="" class="absolute w-full h-full fill ">

      <div class=" flex-1 z-10  text-center">
        <Transition :name="slideTo" mode="out-in">

          <div v-if="intPage === 1 " class="w-full p-4 h-full flex justify-center items-center flex-col gap-8">
            <p class=" text-[#d60000] text-4xl">Hello there Beautiful!</p>
            <div class="rounded-full border overflow-hidden">
              <img src="/assets//gif/penguin.gif" alt="" class="w-32">

            </div>
          </div>
    
          <div v-else-if="intPage === 2" class="w-full p-4 h-full flex justify-center items-center ">
            <p class=" text-[#d60000] text-4xl">This was made just for you,  </p>
          </div>

          <div v-else-if="intPage === 3" class="w-full p-4 h-full flex justify-center items-center ">
            <p class=" text-[#d60000] text-4xl">to remind you of how deeply and endlessly - </p>
          </div>


          <div v-else-if="intPage === 4" class="w-full p-4 h-full flex justify-center items-center flex-col">
            <p class=" text-[#d60000] text-6xl"> I love you </p>
            <p class="text-6xl">💖</p>
            <img src="/assets/gif/cat-heart.gif" alt="" class="w-32">
          </div>

          <div v-else-if="intPage === 5" class="w-full p-4 h-full flex justify-center items-center flex-col gap-4">
            <p class="text-3xl text-[#d60000] bg-[#ffeef7]/60 rounded-md">
              You have no idea how nervous I am on our first date. 🤣🤣
            </p>
          

            <div class="relative rounded-xl overflow-hidden">
              <p class="font-sans text-md  absolute top-8 left-2 -rotate-[12deg] bg-white/40 px-0.5 rounded-md">one coffee please. XD</p>
              <img src="/assets/pictures/first-date.jpg" alt="" class="w-64 ">
            </div>

            <p class="text-3xl text-[#d60000] rounded-md">
              That day brought me so much happiness biiii. 
              <img src="/assets/gif/heartbeat.gif" alt="" class="w-10 inline">
            </p> 
          </div>

          <div v-else-if="intPage === 6" class="w-full p-4 h-full flex justify-center items-center flex-col gap-4">
            <div class="rounded-xl overflow-hidden">
              <img src="/assets/pictures/drink.jpg" alt="" class="w-64 ">
            </div>

            <p class="text-3xl text-[#d60000]">Pagka cute ba jud oyyyy.</p>
            <img src="/assets//gif/dance.gif" alt="" class="w-36 -mt-9">
          </div>


          <div v-else-if="intPage === 7" class="w-full p-4 h-full flex justify-center items-center flex-col gap-4">
            <div class="relative rounded-xl overflow-hidden">
              <img src="/assets/gif/heart-down.gif" alt="" class="w-64 absolute h-full opacity-50">
              <img src="/assets/pictures/haircut.jpeg" alt="" class="w-64 ">
            </div>
            <p class="text-3xl text-[#d60000]">I don’t know what magic you’ve used on me, but I’m completely spellbound by your love. ✨💕</p>
          </div>

          <div v-else-if="intPage === 8" class="w-full p-4 h-full flex justify-center items-center flex-col gap-4">
            <div class="relative rounded-xl overflow-hidden">
              <img src="/assets/gif/heartbeat.gif" alt="" class="absolute w-24">

              <img src="/assets/pictures/with-me.jpg" alt="" class="w-64 ">
            </div>
            <p class="text-6xl text-[#d60000]">Det det.</p>
          </div>

          <div v-else-if="intPage === 9" class="w-full p-4 h-full flex justify-center items-center flex-col gap-4">
            <div class="relative rounded-xl overflow-hidden">
              <img src="/assets/gif/popping-heart.gif" alt="" class="-bottom-24 w-64 absolute h-full opacity-50">
              <img src="/assets/pictures/unif.jpeg" alt="" class="w-64 ">
            </div>
            <p class="text-3xl text-[#d60000]">
              Thank you for always being by my side, lifting me up with your love, and filling my life with warmth and happiness.  💖✨😍💕
            </p>
          </div>

          <div v-else-if="intPage === 10" class="w-full p-4 h-full flex justify-center items-center flex-col gap-4">
            <div class="rounded-xl overflow-hidden">
              <img src="/assets/pictures/school.jpg" alt="" class="w-64">
            </div>
            <p class="text-3xl text-[#d60000]">Just look at you—pure beauty, radiating like the brightest star. ✨😍</p>
            <img src="/assets/gif/running-cat.gif" alt="" class="w-32 -mt-16">

          </div>

          <div v-else-if="intPage === 11" class="w-full p-4 h-full flex justify-center items-center flex-col gap-4">
              <p class="text-3xl text-[#d60000]">Happy Valentine’s Day biiii! You make my world brighter and my heart fuller.</p>
              <p class="text-3xl text-[#d60000]">I love you always biiiii.😘</p>
          </div>
          <div v-else-if="intPage === 12" class="w-full p-4 h-full flex justify-center items-center flex-col gap-4">
              <p class="text-7xl text-[#d60000]">Fin.</p>
          </div>
        </Transition>

      </div>
      <div class="flex justify-between px-3 z-20">
          <img src="assets/icons/heart2.png" class="w-8 h-8 animate-fadeUp" alt="">
          <img src="assets/icons/kiss.png" class="w-8 h-8 animate-fadeUp3" alt="">
          <img src="assets/icons/heart.png" class="w-8 h-8 animate-fadeUp2" alt="">
          <img src="assets/icons/kiss.png" class="w-8 h-8 animate-fadeUp" alt="">
          <img src="assets/icons/heart2.png" class="w-8 h-8 animate-fadeUp2" alt="">
      </div>
      <div class=" w-full flex justify-between h-20 px-3 z-10">

        <div class="relative w-16 h-16" @click="fnPrevPage">
          <img src="/assets//icons/heart.png" alt="" class=" object-cover">
          <p class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">Prev</p>
        </div>
        

        <div class="relative w-16 h-16" @click="fnNextPage">
          <img src="/assets//icons/heart.png" alt="" class=" object-cover">
          <p class="absolute text-xl text-white top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 font-bold">Next</p>
        </div>
      </div>
  </div>
</template>


<script setup>

const intPage = ref(1)
const slideTo  = ref("slide-left")
const fnNextPage = () => {
  slideTo.value = "slide-left"
  if(intPage.value !== 12) intPage.value += 1
}

const fnPrevPage = () => {
  slideTo.value = "slide-right" 
  if(intPage.value != 1) intPage.value -= 1
}

</script>

<style>

.slide-right-enter-active, .slide-right-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s;
}
.slide-right-enter-from {
  transform: translateX(-100%);
  opacity: 0;
}
.slide-right-leave-to {
  transform: translateX(100%);
  opacity: 0;
}


.slide-left-enter-active, .slide-left-leave-active {
  transition: transform 0.5s ease-in-out, opacity 0.5s;
}
.slide-left-enter-from {
  transform: translateX(100%);
  opacity: 0;
}
.slide-left-leave-to {
  transform: translateX(-100%);
  opacity: 0;
}
</style>