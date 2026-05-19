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
  whatsapp_url: 'https://wa.me/22677990754',
  email: 'lwpspatinda2@gmail.com',
  email_url: 'mailto:lwpspatinda2@gmail.com'
}

export const HERO = {
  badge: 'Disponible pour des projets facecam',
  headline: 'Je monte des vidéos facecam pensées pour garder l\'attention.',
  subline: "Vous avez déjà le plus important : les idées, le message, la caméra. Moi, je prends les rushs et je transforme ça en une vidéo plus claire, plus dynamique et plus agréable à regarder jusqu'au bout. Le bon rythme, les bons cuts et une bonne sensation suffisent souvent à faire toute la différence."
}

export const SERVICE = {
  label: 'Services',
  headline: 'Ce que je peux faire pour vos vidéos.',
  subline: "Chaque créateur a sa façon de parler, son énergie et son audience. Le but n\'est pas de transformer votre vidéo en machine à effets. Le but, c\'est de rendre votre contenu plus agréable à regarder et plus efficace.",
  services: [
    {
      name: "Montage facecam",
      icon: 'VideoPlay',
      description: "J\'enlève les longueurs, j\'améliore le rythme et je rends la vidéo plus fluide sans casser votre personnalité.",
      thumbnails: ''
    },
    {
      name: "Dynamique visuelle",
      icon: 'Colorfilter',
      description: "Sous-titres, zooms, images, animations, cuts… juste ce qu\'il faut pour garder l\'attention naturellement.",
      thumbnails: ''
    },
    {
      name: "Identité visuelle",
      icon: 'PenTool2',
      description: "Couleurs, ambiance, transitions, détails visuels. Pour que vos vidéos aient une vraie cohérence.",
      thumbnails: ''
    },
    {
      name: "Shorts & Reels",
      icon: 'Mobile',
      description: "Je transforme des contenus longs en formats courts pensés pour capter rapidement l\'attention.",
      thumbnails: ''
    },
  ]
}

export const WORK = {
  label: 'Projets',
  headline: 'Quelques vidéos que j\'ai montées.',
  subline: "Chaque projet m\'a appris quelque chose. Comment garder l\'attention plus longtemps. Comment rendre une vidéo plus claire. Comment garder une bonne énergie sans surcharger le montage.",
  works: [
    {
      name: "Vidéo facecam YouTube",
      video_id: '1145818995',
      description: 'Montage pensé pour améliorer le rythme et garder une attention constante jusqu\'à la fin.',
      type: 'YouTube'
    },
    {
      name: "Short motivation",
      video_id: '1145819148',
      description: 'Format court avec une dynamique plus rapide et un montage plus direct.',
      type: 'Short'
    },
    {
      name: "Contenu éducatif",
      video_id: 'VIDEO_ID_3',
      description: 'Travail sur la clarté, le confort de visionnage et la fluidité du discours.',
      type: 'YouTube'
    },
  ]
}

export const ABOUT = {
  label: 'À propos',
  introduce: [
    "Je suis monteur vidéo spécialisé dans les contenus facecam.",
    "J'aide des créateurs, entrepreneurs et créateurs de contenu à rendre leurs vidéos plus fluides, plus dynamiques et surtout plus simples à regarder.",
    "Ce que j'aime dans le montage, ce n'est pas juste \"faire des effets\". C'est trouver le bon rythme. Savoir quoi garder. Quoi enlever. Et faire en sorte qu'une vidéo se regarde naturellement, sans effort.",
    "Aujourd'hui, internet est rempli de vidéos qui parlent fort pour retenir l'attention. Moi, je préfère faire l'inverse. Un montage propre. Une énergie maîtrisée. Et une vidéo qui donne envie d'être regardée jusqu'au bout."
  ]
}

export const CTA = {
  label: "Vous avez déjà les idées.\nIl manque peut-être juste le bon montage.",
  description: "Si vous avez une vidéo à monter, une idée de contenu ou simplement envie d'améliorer vos vidéos facecam, on peut en discuter tranquillement. Pas besoin d'avoir un projet parfait ou ultra préparé. Envoyez-moi simplement un message, vos rushs ou votre idée. Et on voit ce qu'on peut créer ensemble."
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
export const PROCESS = {
  label: 'Process',
  headline: 'Comment on travaille ensemble.',
  subline: "Un process simple, rapide et clair pour avancer efficacement sans perdre du temps dans des échanges inutiles.",
  steps: [
    {
      number: '01',
      timing: 'Jour 1',
      name: 'Envoi des rushs',
      description: "Vous m'envoyez vos vidéos via Drive, WeTransfer ou Dropbox avec quelques indications sur le rendu souhaité.",
      details: []
    },
    {
      number: '02',
      timing: 'Le jour même',
      name: 'Brief rapide',
      description: "On échange rapidement sur le style, le rythme, les références et l'objectif de la vidéo. Le but est simple : comprendre exactement ce que vous voulez avant de commencer le montage.",
      details: []
    },
    {
      number: '03',
      timing: 'Sous 48h / 72h',
      name: 'Livraison de la V1',
      description: "Je réalise le montage complet et vous recevez une première version prête à être review. Selon le projet, cela peut inclure cuts, sous-titres, sound design, zooms, animations et colorimétrie.",
      details: []
    },
    {
      number: '04',
      timing: 'Sous 24h',
      name: 'Retours & ajustements',
      description: "Vous m'envoyez vos retours directement et j'effectue les modifications nécessaires pour affiner la vidéo. Le process reste simple et rapide pour éviter les allers-retours interminables.",
      details: []
    },
    {
      number: '05',
      timing: 'Après validation',
      name: 'Livraison finale',
      description: "Vous recevez la version finale optimisée et prête à être publiée sur vos plateformes.",
      details: []
    }
  ],
  infos: [
    {
      label: 'Révisions incluses',
      value: '2 allers-retours inclus selon le projet'
    },
    {
      label: 'Communication',
      value: 'Discord / WhatsApp / Frame.io'
    },
    {
      label: 'Livraison fichiers',
      value: 'Drive / WeTransfer / Dropbox'
    }
  ]
}
