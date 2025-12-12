<script setup lang="ts"></script>

<template>
 <LayoutScrollSmooth>
  <section id="about" class="container">
    <div class="max-w-4xl mx-auto">
      <!-- Content -->
      <div class="text-center lg:text-left">
        <p class="badge">{{ ABOUT.label }}</p>
        <h2
          class="section-title"
        >
          {{ PROFILE.fullname }}
        </h2>

        <div class="mt-6 space-y-4">
          <p class="paragraph" v-for="intro in ABOUT.introduce">
            {{ intro }}
          </p>
        </div>

        <!-- Valeurs / Approche -->
        <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div class="p-6 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative group">
            <div class="text-white font-semibold mb-2 text-lg">Écoute</div>
            <div class="text-white/60 text-sm">Je prends le temps de comprendre votre vision et vos besoins avant de commencer.</div>
            <div class="absolute bottom-0 w-40 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
          </div>
          <div class="p-6 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative group">
            <div class="text-white font-semibold mb-2 text-lg">Qualité</div>
            <div class="text-white/60 text-sm">Chaque projet reçoit la même attention aux détails, du montage à la colorimétrie.</div>
            <div class="absolute bottom-0 w-40 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
          </div>
          <div class="p-6 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative group">
            <div class="text-white font-semibold mb-2 text-lg">Communication</div>
            <div class="text-white/60 text-sm">Vous êtes tenu informé à chaque étape. Vos retours sont toujours les bienvenus.</div>
            <div class="absolute bottom-0 w-40 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
          </div>
        </div>

        <a 
          :href="PROFILE.whatsapp_url" 
          target="_blank" 
          rel="noopener noreferrer"
          class="group relative overflow-hidden inline-flex btn-dark mt-10"
        >
          <div
            class="w-full h-4 bg-blue-300/60 blur-lg absolute top-0 inset-x-0 rounded-full group-hover:h-1/2 transition-all duration-500"
          ></div>
          <div class="relative overflow-hidden">
            <p
              class="group-hover:-translate-y-7 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              On discute de votre projet ?
            </p>
            <p
              class="absolute top-7 left-0 group-hover:top-0 duration-500 ease-[cubic-bezier(0.19,1,0.22,1)]"
            >
              On discute de votre projet ?
            </p>
          </div>
        </a>
      </div>
    </div>
  </section>
 </LayoutScrollSmooth>
</template>
