export const NAVLINKS = [
  { label: 'Accueil', url: '#hero' },
  { label: 'Projets', url: '#work' },
  { label: 'Services', url: '#service' },
  { label: 'Contact', url: '#cta' },
]

export const PROFILE = {
  firstname: 'Pascal',
  lastname: '',
  get fullname() { return this.firstname },
  role: 'Monteur vidéo',
  avatar: '/images/profile.jpeg',
  whatsapp: '+22677990754',
  whatsapp_url: 'https://wa.me/22677990754',
  email: 'lwpspatinda2@gmail.com',
  email_url: 'mailto:lwpspatinda2@gmail.com'
}

export const HERO = {
  badge: 'Disponible maintenant',
  headline: "Je monte vos vidéos pour qu'elles se regardent jusqu'au bout.",
  subline: "Vous filmez. Je fais le reste. Rythme, cuts, sous-titres, ambiance — je m'adapte à votre style et je livre vite.",
}

export const STYLES = {
  label: 'Projets',
  headline: 'Ce que je sais faire.',
  subline: "Facecam, vlog, podcast, motion — voici des exemples concrets de ce que ça donne.",
  note: "",
  categories: [
    {
      name: 'Facecam',
      description: "Cuts francs, sous-titres dynamiques, rythme qui garde l'attention de la première à la dernière seconde.",
      videos: [
        { video_id: 'GkNNd2tkAMA', platform: 'youtube' },
        { video_id: 'CHckLoARfXQ', platform: 'youtube' },
        { video_id: 'MM7zQrkPe_Q', platform: 'youtube' },
        { video_id: 'emATtkM-Gh4', platform: 'youtube' },
      ]
    },
    {
      name: 'Vlog',
      description: "Montage fluide, ambiance soignée, narration qui tient sur la durée.",
      videos: [
        { video_id: 'mQo1bhDdSnM', platform: 'youtube' },
        { video_id: 'YauOvaxfT_0', platform: 'youtube' },
      ]
    },
    {
      name: 'Podcast',
      description: "Montage propre, cuts invisibles, visuels qui habillent la parole sans la noyer.",
      videos: [
        { video_id: '8e29OPOGvtg', platform: 'youtube' },
        { video_id: 'FcBL6xOwBDk', platform: 'youtube' },
      ]
    },
    {
      name: 'Shorts',
      description: "Format vertical, impact immédiat. Optimisé pour garder l'attention dans les 3 premières secondes.",
      videos: [
        { video_id: 'LsfvAfhF104', platform: 'youtube' },
        { video_id: '1193440677', platform: 'vimeo' },
      ]
    },
    {
      name: 'Motion design',
      description: "Texte animé, visuels dynamiques, identité forte. Pour les vidéos qui doivent marquer.",
      videos: [
        { video_id: '1193762175', platform: 'vimeo' },
      ]
    },
  ]
}

export const ABOUT = {
  label: 'À propos',
  introduce: [
    "Je suis monteur vidéo. Je travaille avec des créateurs et entrepreneurs qui ont du contenu à publier mais pas le temps — ou l'œil — pour le monter correctement.",
    "Ce que je fais concrètement : je coupe ce qui ennuie, je garde ce qui accroche, j'ajoute ce qui manque. Et je livre dans les temps.",
    "Facecam, vlog, podcast, motion design — je m'adapte au format et au style. Pas besoin de m'expliquer pendant 2 heures. Envoyez vos rushs, on avance.",
  ]
}

export const SERVICE = {
  label: 'Services',
  headline: 'Ce que vous obtenez.',
  subline: "Pas de package compliqué. Vous me dites ce que vous voulez, je vous dis combien ça coûte et quand c'est livré.",
  services: [
    {
      name: "Montage facecam",
      icon: 'VideoPlay',
      description: "Cuts, zooms, sous-titres, musique. Votre énergie reste intacte, les longueurs disparaissent.",
    },
    {
      name: "Shorts & Reels",
      icon: 'Mobile',
      description: "Format vertical optimisé pour TikTok, Instagram, YouTube Shorts. Livré prêt à publier.",
    },
    {
      name: "Motion design",
      icon: 'PenTool2',
      description: "Texte animé, intros, transitions personnalisées. Pour une vidéo qui a une vraie identité.",
    },
    {
      name: "Long format YouTube",
      icon: 'Colorfilter',
      description: "Montage complet, colorimétrie, miniature si besoin. Pour des vidéos qui se regardent jusqu'au bout.",
    },
  ]
}

export const CTA = {
  label: "Une vidéo à monter ?\nContactez-moi.",
  description: "Envoyez-moi vos rushs ou décrivez votre projet. Je vous réponds dans la journée avec un prix et un délai. Pas de devis qui traîne, pas de réunion inutile."
}

export const PROCESS = {
  label: 'Process',
  headline: 'Comment ça se passe.',
  subline: "Simple. Rapide. Sans prise de tête.",
  steps: [
    {
      number: '01',
      timing: 'Jour 1',
      name: "Vous m'envoyez vos rushs",
      description: "Via Drive, WeTransfer ou Dropbox. Avec quelques mots sur ce que vous voulez comme rendu.",
      details: []
    },
    {
      number: '02',
      timing: 'Le jour même',
      name: 'On se cale en 10 minutes',
      description: "Style, rythme, références, deadline. On aligne tout avant que je commence.",
      details: []
    },
    {
      number: '03',
      timing: 'Sous 48h',
      name: 'Vous recevez la V1',
      description: "Montage complet : cuts, sous-titres, musique, colorimétrie. Prêt à être reviewé.",
      details: []
    },
    {
      number: '04',
      timing: 'Sous 24h',
      name: 'Retours & corrections',
      description: "Vous notez ce qui change. Je l'applique. Pas d'allers-retours interminables.",
      details: []
    },
    {
      number: '05',
      timing: 'Validation',
      name: 'Livraison finale',
      description: "Fichier exporté, optimisé pour votre plateforme. Prêt à publier.",
      details: []
    }
  ],
  infos: [
    { label: 'Révisions', value: '2 incluses par projet' },
    { label: 'Communication', value: 'Discord / WhatsApp' },
    { label: 'Livraison', value: 'Drive / WeTransfer / Dropbox' }
  ]
}
