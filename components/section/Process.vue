<template>
  <LayoutScrollSmooth>
    <section id="process" class="container">

      <!-- Header -->
      <p class="badge">{{ PROCESS.label }}</p>
      <h2 class="section-title">
        {{ PROCESS.headline }}
      </h2>
      <p class="paragraph mt-4 max-w-xl">
        {{ PROCESS.subline }}
      </p>

      <!-- Steps -->
      <div class="mt-16 flex flex-col gap-0">
        <div
          v-for="(step, index) in PROCESS.steps"
          :key="step.number"
          class="relative flex gap-6 md:gap-10"
        >
          <!-- Timeline line -->
          <div class="flex flex-col items-center">
            <!-- Dot -->
            <div class="w-10 h-10 shrink-0 rounded-full border border-primary bg-[#0b061a] shadow-[0px_0px_15px_-3px_rgba(85,_132,_255,_0.6)] flex items-center justify-center z-10">
              <span class="text-primary text-xs font-bold">{{ step.number }}</span>
            </div>
            <!-- Vertical connector -->
            <div
              v-if="index < PROCESS.steps.length - 1"
              class="w-[1px] flex-1 mt-2 mb-2 bg-gradient-to-b from-primary/40 to-primary/0"
            ></div>
          </div>

          <!-- Content -->
          <div class="pb-12 flex-1">
            <!-- Timing badge -->
            <span class="inline-block text-xs font-semibold tracking-widest uppercase text-primary/80 mb-3">
              {{ step.timing }}
            </span>

            <!-- Card -->
            <div class="card relative p-6 md:p-8">
              <h4 class="text-white text-lg font-semibold tracking-wide">{{ step.name }}</h4>
              <p class="text-white/50 mt-2 leading-relaxed">{{ step.description }}</p>

              <!-- Bottom glow line -->
              <div class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
              <div class="-z-10 absolute bottom-0 w-40 bg-[#0b50e5] rounded-full blur-2xl h-40 animate-pulse opacity-20"></div>
            </div>
          </div>
        </div>
      </div>

      <!-- Infos supplémentaires -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mt-4">
        <div
          v-for="info in PROCESS.infos"
          :key="info.label"
          class="p-6 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative"
        >
          <p class="text-xs font-semibold tracking-widest uppercase text-primary/80 mb-2">{{ info.label }}</p>
          <p class="text-white/70 text-sm">{{ info.value }}</p>
          <div class="absolute bottom-0 w-40 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
        </div>
      </div>

    </section>
  </LayoutScrollSmooth>
</template>
