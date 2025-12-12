export const NAVLINKS= [
  {
    label: 'Accueil',
    url: '#hero'
  },
  {
    label : 'À propos',
    url: '#about'
  },
  {
    label : 'Projets',
    url: '#work'
  },
  {
    label : 'Services',
    url: '/#service'
  },
  
]

export const PROFILE = {
  firstname : 'Pascal',
  lastname: '',
  get fullname() {
    return this.firstname
  },
  role : 'Monteur vidéo',
  avatar: '/images/profile.png',
  whatsapp: '+22677990754',
  whatsapp_url: 'https://wa.me/22677990754'
}

export const HERO = {
  badge: 'Disponible pour vos projets',
  headline: `Salut, moi c'est ${PROFILE.firstname}.`,
  subline : "Si vous êtes ici, c'est probablement parce que vous voulez que vos vidéos soient à la hauteur de vos ambitions. Tout ce que vous avez à faire, c'est tourner la vidéo et moi je m'occupe du reste."
}

export const SERVICE = {
  label: 'mes services',
  headline: 'Ce que je peux faire pour vous.',
  subline: 'Chaque projet est différent. Chaque vidéo a sa propre histoire. Voilà ce que je propose pour donner vie à la vôtre.',
  services: [
    {
      name: "Montage vidéo",
      icon: 'VideoPlay',
      description: 'Du brut au fini. Je transforme vos rushs en vidéos qui captent, qui racontent, qui convertissent. Rythme, émotion, impact — tout est pensé pour que votre message passe.',
      thumbnails: ''
    },
    {
      name: "Colorimétrie",
      icon: 'Colorfilter',
      description: 'Parce qu\'une belle image, c\'est aussi une question de couleurs. Je crée des ambiances visuelles qui renforcent votre identité et l\'émotion de vos vidéos.',
      thumbnails: ''
    },
    {
      name: "Motion design",
      icon: 'PenTool2',
      description: 'Des animations légères, des transitions fluides, des éléments graphiques qui donnent du caractère. Sans en faire trop. Juste ce qu\'il faut pour que ça respire.',
      thumbnails: ''
    },
   
  ]
}

export const WORK = {
  label: 'mes projets',
  headline: 'Quelques vidéos que j\'ai montées.',
  subline: 'Chaque projet m\'a appris quelque chose. Chaque vidéo m\'a fait grandir. Voilà un aperçu de ce que je sais faire, et surtout, de comment je le fais.',
  works: [
    {
      name: "Vidéo 1",
      video_id: '1145818995',
      description: '',
      type: 'Short'
    },
    {
      name: "Vidéo 2",
      video_id: '1145819148',
      description: '',
      type: 'Short'
    },
    {
      name: "Vidéo 3",
      video_id: 'VIDEO_ID_3',
      description: '',
      type: 'YouTube'
    },
  ]
}

export const ABOUT = {
  label: 'Qui suis-je ?',
  introduce: [
    `Salut, moi c'est ${PROFILE.firstname}. Monteur vidéo depuis quelques années maintenant.`,
    "Au début, je montais mes propres vidéos. Parce que j'avais envie de raconter des histoires. Parce que j'aimais cette magie de transformer des rushs bruts en quelque chose qui touche, qui parle, qui reste.",
    "Aujourd'hui, je fais ça pour d'autres. Des créateurs, des entrepreneurs, des marques. Des gens qui ont une vision et qui ont besoin de quelqu'un pour la rendre visible.",
    "Ce qui me guide ? La simplicité. Un bon montage, c'est celui qu'on ne remarque pas. C'est celui qui sert l'histoire, pas celui qui la cache. Je crois que chaque vidéo mérite d'être à la hauteur de l'ambition derrière.",
    "Si vous êtes là, c'est que vous cherchez quelqu'un de fiable. Quelqu'un qui comprend vos besoins. Quelqu'un qui transforme vos rushs en vidéos qui marquent. C'est exactement ce que je fais."
  ]
}

export const CTA = {
  label: 'On discute de votre projet ?',
  description: 'Vous avez une idée ? Des rushs qui attendent ? Une vision à transformer en vidéo ? Parlons-en. Sans pression. Juste pour voir si on peut créer quelque chose de bien ensemble.'
}

export const TESTIMONIALS = {
  label: 'Ce que mes clients en pensent',
  headline: 'Ils ont décidé de me faire confiance.',
  subline: 'Voilà ce qu\'ils disent de notre collaboration. Sans fard. Juste la vérité.',
  testimonials: [
    {
      name: "Sarah M.",
      role: "Créatrice de contenu",
      content: "Pascal a monté ma série YouTube. Ce qui m'a marquée ? Sa réactivité, son écoute, et surtout, sa capacité à comprendre ce que je voulais dire avant même que je le formule. Mes vidéos ont pris une autre dimension.",
      avatar: ""
    },
    {
      name: "Thomas L.",
      role: "Entrepreneur",
      content: "J'avais besoin d'une vidéo corporate pour présenter ma startup. Pascal a su transformer mes rushs un peu brouillons en quelque chose de vraiment pro. Résultat : une vidéo qui convertit. Exactement ce qu'il me fallait.",
      avatar: ""
    },
    {
      name: "Marie D.",
      role: "Formatrice en ligne",
      content: "Je fais des tutoriels. Le défi, c'est de garder l'attention. Pascal a ajouté des animations légères, des transitions fluides. Mes vidéos sont devenues plus engageantes. Mes élèves me le disent.",
      avatar: ""
    }
  ]
}

export const PRICING = {
  label: 'mes tarifs',
  headline: 'Transparence totale.',
  subline: 'Pas de surprise. Pas de cachotterie. Voilà ce que je propose, et pourquoi.',
  pricing: [
    {
      name: "Montage simple",
      price: "À partir de 300€",
      description: "Pour une vidéo courte (moins de 5 min). Montage basique, colorimétrie, export HD. Parfait pour tester notre collaboration.",
      features: [
        "Montage et assemblage",
        "Colorimétrie de base",
        "Export HD",
        "1 révision incluse"
      ]
    },
    {
      name: "Montage complet",
      price: "À partir de 600€",
      description: "Pour des vidéos plus longues ou plus complexes. Montage avancé, colorimétrie soignée, motion design léger, export 4K.",
      features: [
        "Montage avancé",
        "Colorimétrie professionnelle",
        "Motion design léger",
        "Export 4K",
        "2 révisions incluses"
      ]
    },
    {
      name: "Forfait mensuel",
      price: "Sur devis",
      description: "Pour des créateurs ou marques qui ont besoin de montages réguliers. On définit un volume, on s'organise ensemble. Tarif dégressif selon le volume.",
      features: [
        "Montages réguliers",
        "Priorité sur vos projets",
        "Tarif dégressif",
        "Support continu"
      ]
    }
  ],
  note: "Ces tarifs sont indicatifs. Chaque projet est unique. On discute de vos besoins, on ajuste. L'important, c'est que vous ayez une vidéo qui vous correspond, à un prix qui vous correspond aussi."
}

export const CASE_STUDIES = {
  label: 'résultats',
  headline: 'L\'impact concret de mon travail.',
  subline: 'Parce que des chiffres, ça parle. Voilà ce que mes montages ont changé pour mes clients.',
  studies: [
    {
      title: "Vidéo corporate - Startup tech",
      metric: "+180% d'engagement",
      description: "Une vidéo de présentation pour une startup. Avant : une vidéo basique qui passait inaperçue. Après mon montage : +180% d'engagement sur LinkedIn, +45% de clics vers leur site. Pourquoi ? Un rythme mieux pensé, une narration plus claire, une identité visuelle renforcée.",
      before: "Engagement faible, peu de conversions",
      after: "Engagement multiplié, conversions en hausse"
    },
    {
      title: "Série YouTube - Créateur de contenu",
      metric: "+65% de vues moyennes",
      description: "Montage régulier pour une chaîne YouTube. Le créateur avait du mal à garder l'attention au-delà de 3 minutes. J'ai restructuré le rythme, ajouté des transitions dynamiques, soigné la colorimétrie. Résultat : +65% de vues moyennes, temps de visionnage en hausse.",
      before: "Taux de rétention faible",
      after: "Temps de visionnage multiplié"
    },
    {
      title: "Pub Instagram - Marque lifestyle",
      metric: "+120% de conversions",
      description: "Des formats courts pour Instagram. La marque voulait augmenter ses ventes via les stories. J'ai créé des montages percutants, avec une colorimétrie qui matche leur identité. Résultat : +120% de conversions depuis les vidéos, ROI multiplié par 3.",
      before: "Peu de conversions via les vidéos",
      after: "Conversions multipliées, ROI en hausse"
    }
  ]
}