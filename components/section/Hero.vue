<script setup lang="ts"></script>

<template>
  <div id="hero" class="container relative py-40">
    <!-- Content -->
    <div class="z-10 relative">
      <div class="grid items-center grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        <!-- Text Content -->
        <div class="flex flex-col items-center lg:items-start">
          <div class="badge flex items-center gap-2"> 
            <div class="animate-pulse w-2 h-2 bg-primary rounded-full"></div> 
            <p>{{ HERO.badge }}</p>
          </div>
          
          <h1
            class="max-w-4xl text-left text-4xl md:text-5xl lg:text-6xl text-white font-bold mt-4 !leading-snug"
          >
            {{ HERO.headline }}
          </h1>
          <p class="paragraph mt-4 text-left max-w-xl">
            {{ HERO.subline }}
          </p>
          <div class="flex gap-4 items-center mt-8">
            <Button label="Voir mes projets" to="#work" />
            <a 
              :href="PROFILE.whatsapp_url" 
              target="_blank" 
              rel="noopener noreferrer"
              class="group relative overflow-hidden inline-flex btn-dark"
            >
              <div
                class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full group-hover:h-1/2 transition-all duration-500"
              ></div>
              <div class="relative overflow-hidden">
                <p
                  class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  Me contacter
                </p>
                <p
                  class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
                >
                  Me contacter
                </p>
              </div>
            </a>
          </div>
        </div>

        <!-- Profile Photo -->
        <div class="flex justify-center lg:justify-end">
          <div class="relative">
            <div class="p-3 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative flex items-center justify-center group">
              <div class="relative">
                <img
                  class="w-72 h-72 md:w-96 md:h-96 lg:w-[28rem] lg:h-[28rem] rounded-lg object-cover"
                  :src="PROFILE.avatar"
                  :alt="`${PROFILE.fullname} - ${PROFILE.role}`"
                />
                <div class="absolute inset-0 rounded-lg bg-gradient-to-br from-primary/20 to-transparent"></div>
              </div>
              <div class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
              <div class="-z-10 absolute bottom-4 w-96 bg-[#0b50e5] rounded-full blur-2xl h-40 animate-pulse"></div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="absolute -top-40 right-40 rotate-45 w-14 h-[800px] bg-blue-700 blur-[100px]"></div>
    <div class="absolute top-0 left-0 w-screen h-screen index-bg">
        <div class="h-0">
            <div class="star"></div>
            <div class="star" style="top: 80px; left: 800px; animation-delay: 3s;"></div>
            <div class="star" style="top: 40px; left: 646px; animation-delay: 2s;"></div>
            <div class="star" style="top: 120px; left: 395px; animation-delay: 4s;"></div>
            <div class="star" style="top: 160px; left: 765px; animation-delay: 1s;"></div>
            <div class="star" style="top: 170px; left: 1200px; animation-delay: 2s;"></div>
            <div class="star" style="top: 200px; left: 1000px; animation-delay: 1s;"></div>
        </div>
    </div>
  </div>
</template>
<style>
        @-webkit-keyframes star-opacity {
            0% {
                opacity: 0
            }

            40% {
                opacity: 1
            }

            60% {
                opacity: 1
            }

            100% {
                opacity: 0
            }
        }

        @keyframes star-opacity {
            0% {
                opacity: 0
            }

            40% {
                opacity: 1
            }

            60% {
                opacity: 1
            }

            100% {
                opacity: 0
            }
        }

        @-webkit-keyframes star-pos {
            0% {
                transform: scale(0) rotate(0) translate3d(0, 0, 0);
                -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
                -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0)
            }

            100% {
                transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
                -webkit-transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
                -moz-transform: scale(1) rotate(0) translate3d(-450px, 450px, 0)
            }
        }

        @keyframes star-pos {
            0% {
                transform: scale(0) rotate(0) translate3d(0, 0, 0);
                -webkit-transform: scale(0) rotate(0) translate3d(0, 0, 0);
                -moz-transform: scale(0) rotate(0) translate3d(0, 0, 0)
            }

            100% {
                transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
                -webkit-transform: scale(1) rotate(0) translate3d(-450px, 450px, 0);
                -moz-transform: scale(1) rotate(0) translate3d(-450px, 450px, 0)
            }
        }

        .index-bg .star {
            display: block;
            width: 5px;
            height: 5px;
            border-radius: 50%;
            background: #fff;
            top: 100px;
            left: 400px;
            position: relative;
            -webkit-transform-origin: 100% 0;
            transform-origin: 100% 0;
            -webkit-animation: star-opacity 5s infinite ease-in, star-pos 5s infinite ease-in;
            animation: star-opacity 5s infinite ease-in, star-pos 5s infinite ease-in;
            -webkit-box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
            box-shadow: 0 0 5px 5px rgba(255, 255, 255, .3);
            opacity: 0;
            z-index: 2
        }

        .index-bg .star:after {
            content: '';
            display: block;
            top: 0;
            left: 4px;
            border: 0 solid #fff;
            border-width: 0 90px 2px;
            border-color: transparent transparent transparent rgba(255, 255, 255, .3);
            -webkit-transform: rotate(-45deg) translate3d(1px, 3px, 0);
            transform: rotate(-45deg) translate3d(1px, 3px, 0);
            -webkit-box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
            box-shadow: 0 0 1px 0 rgba(255, 255, 255, .1);
            -webkit-transform-origin: 0% 100%;
            transform-origin: 0% 100%
        }
    </style>
