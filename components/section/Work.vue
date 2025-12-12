<script setup lang="ts">
// Fonction pour générer l'URL d'embed Vimeo
function getVimeoEmbedUrl(videoId: string | undefined) {
  if (!videoId) return ''
  
  // Si c'est déjà une URL complète, on l'utilise
  if (videoId.includes('player.vimeo.com') || videoId.includes('vimeo.com')) {
    // Convertir l'URL Vimeo en URL d'embed si nécessaire
    const match = videoId.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/)
    if (match) {
      return `https://player.vimeo.com/video/${match[1]}?autoplay=0&loop=0&muted=0&title=1&byline=1&portrait=0`
    }
    return videoId
  }
  
  // Si c'est juste un ID numérique
  return `https://player.vimeo.com/video/${videoId}?autoplay=0&loop=0&muted=0&title=1&byline=1&portrait=0`
}
</script>

<template>
 <LayoutScrollSmooth>
  <section id="work" class="container">
    <!-- Content -->
    <p class="badge">{{ WORK.label }}</p>
    <h2
      class="section-title"
    >
      {{ WORK.headline }}
    </h2>
    <p class="paragraph mt-4 max-w-xl">
      {{ WORK.subline }}
    </p>

    <!-- Works List -->
    <div class="grid md:grid-cols-2 gap-6 mt-16">

      <div class="p-3 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative group" v-for="item in WORK.works">
        <div class="overflow-hidden aspect-[16/9] rounded-lg relative group/video">
          <iframe 
            :src="getVimeoEmbedUrl(item.video_id)"
            class="w-full h-full object-cover transition-all duration-500 group-hover/video:scale-105"
            frameborder="0"
            allow="autoplay; fullscreen; picture-in-picture"
            allowfullscreen
            loading="lazy"
          ></iframe>
          <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
        </div>

        <div class="mt-4">
          <div class="flex items-center justify-between mb-2">
            <div>
              <h3 class="text-white text-lg lg:text-xl tracking-wide font-bold">{{ item.name }}</h3>
              <p class="font-medium uppercase tracking-wide text-white/50 text-sm mt-1">{{ item.type }}</p>
            </div>
          </div>
          <div class="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-3"></div>
          <p class="paragraph text-white/70">
            {{ item.description }}
          </p>
        </div>

        <div
          class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"
        ></div>
      </div>
    </div>



  </section>
 </LayoutScrollSmooth>
</template>
