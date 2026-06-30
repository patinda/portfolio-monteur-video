<script setup lang="ts">
function getEmbedUrl(videoId: string | undefined, platform: string = 'vimeo') {
  if (!videoId) return ''
  if (platform === 'youtube') {
    return `https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`
  }
  if (videoId.includes('player.vimeo.com') || videoId.includes('vimeo.com')) {
    const match = videoId.match(/(?:vimeo\.com\/|player\.vimeo\.com\/video\/)(\d+)/)
    if (match) {
      return `https://player.vimeo.com/video/${match[1]}?autoplay=0&loop=0&muted=0&title=1&byline=1&portrait=0`
    }
    return videoId
  }
  return `https://player.vimeo.com/video/${videoId}?autoplay=0&loop=0&muted=0&title=1&byline=1&portrait=0`
}
</script>

<template>
  <section id="work" class="container">
    <p class="badge">{{ STYLES.label }}</p>
    <h2 class="section-title">{{ STYLES.headline }}</h2>
    <p class="paragraph mt-4 max-w-xl">{{ STYLES.subline }}</p>

    <div class="flex flex-col gap-20 mt-16">
      <div v-for="category in STYLES.categories" :key="category.name">

        <div class="mb-8">
          <h3 class="text-white text-xl lg:text-2xl font-bold tracking-wide">{{ category.name }}</h3>
          <div class="bg-gradient-to-r w-44 h-[1px] from-transparent via-blue-500 to-transparent my-3"></div>
          <p class="paragraph text-white/60 max-w-lg">{{ category.description }}</p>
        </div>

        <div class="grid md:grid-cols-2 gap-6">
          <div
            v-for="video in category.videos"
            :key="video.video_id"
            class="p-3 border bg-[#0b061a]/40 backdrop-blur-sm border-white/10 rounded-2xl relative group"
          >
            <div class="overflow-hidden aspect-[16/9] rounded-lg relative group/video">
              <iframe
                :src="getEmbedUrl(video.video_id, video.platform)"
                class="w-full h-full object-cover transition-all duration-500 group-hover/video:scale-105"
                frameborder="0"
                allow="autoplay; fullscreen; picture-in-picture"
                allowfullscreen
                loading="lazy"
              ></iframe>
              <div class="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none"></div>
            </div>
            <div class="absolute bottom-0 w-60 h-[1px] z-10 bg-gradient-to-r from-[#0b50e5]/0 via-[#0b50e5] to-[#0b50e5]/0"></div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
