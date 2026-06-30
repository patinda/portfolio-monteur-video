export const NAVLINKS = [
  {
    label: 'Accueil',
    url: '#hero'
  },
  {
    label: 'À propos',
    url: '#about'
  },
  {
    label: 'Univers',
    url: '#work'
  },
  {
    label: 'Services',
    url: '#service'
  },
]

export const PROFILE = {
  firstname: 'Pascal',
  lastname: '',
  get fullname() {
    return this.firstname
  },
  role: 'Monteur vidéo',
  avatar: '/images/profile.png',
  whatsapp: '+22677990754',
  whatsapp_url: 'https://wa.me/22677990754',
  email: 'lwpspatinda2@gmail.com',
  email_url: 'mailto:lwpspatinda2@gmail.com'
}

export const HERO = {
  badge: 'Disponible pour de nouveaux projets',
  headline: 'Tu as une vision. Je la rends visible.',
  subline: "Je monte des vidéos pensées pour garder l'attention — peu importe le format, le style ou la plateforme. Facecam, motion design, short, long format : je m'adapte à ta direction artistique, pas l'inverse.",
}

export const STYLES = {
  label: 'Univers',
  headline: 'Plusieurs styles. Une seule exigence.',
  subline: "Chaque créateur a son univers. Mon travail, c'est de le comprendre et de le reproduire avec précision. Voici les directions artistiques dans lesquelles je travaille.",
  note: "Les vidéos marquées « Inspiration » sont des références de style, pas mes réalisations.",
  categories: [
    {
      name: 'Énergie brute',
      description: "Cuts rapides, rythme soutenu, sous-titres dynamiques. Pour garder l'attention sur les 3 premières secondes et ne plus la lâcher.",
      videos: [
        {
          video_id: 'GkNNd2tkAMA',
          platform: 'youtube',
          label: 'Ma réalisation'
        },
        {
          video_id: 'CHckLoARfXQ',
          platform: 'youtube',
          label: 'Ma réalisation'
        },
      ]
    },
    {
      name: 'Motion narratif',
      description: "Typographie animée, visuels qui appuient le propos. Pour des vidéos où l'image et le texte travaillent ensemble.",
      videos: [
        {
          video_id: '1193762175',
          platform: 'vimeo',
          label: 'Ma réalisation'
        },
        // Ajoute ici une vidéo inspiration : { video_id: 'ID_YOUTUBE', platform: 'youtube', label: 'Inspiration' }
      ]
    },
    {
      name: 'Facecam pro',
      description: "Montage épuré, rythme naturel, colorimétrie soignée. Pour que ta personnalité passe, sans que le montage prenne le dessus.",
      videos: [
        {
          video_id: '1193440678',
          platform: 'vimeo',
          label: 'Ma réalisation'
        },
        {
          video_id: '1193440677',
          platform: 'vimeo',
          label: 'Ma réalisation'
        },
        // Ajoute ici une vidéo inspiration : { video_id: 'ID_YOUTUBE', platform: 'youtube', label: 'Inspiration' }
      ]
    },
  ]
}

export const ABOUT = {
  label: 'À propos',
  introduce: [
    "La plupart des créateurs ont une bonne idée et de mauvaises vidéos. Pas parce qu'ils manquent de talent — parce qu'ils manquent de temps et de regard extérieur. C'est là que j'interviens.",
    "Je ne monte pas des effets. Je monte du rythme. Ce qui reste sur le montage floor est souvent plus important que ce qui reste à l'écran.",
    "Aujourd'hui je travaille avec des créateurs et entrepreneurs sur des contenus courts et longs format — des Shorts aux vidéos YouTube de 20 minutes.",
  ]
}

export const SERVICE = {
  label: 'Services',
  headline: 'Ce que je peux faire pour vos vidéos.',
  subline: "Chaque créateur a sa façon de parler, son énergie et son audience. Le but n'est pas de transformer votre vidéo en machine à effets. Le but, c'est de rendre votre contenu plus agréable à regarder et plus efficace.",
  services: [
    {
      name: "Facecam qui retient l'attention",
      icon: 'VideoPlay',
      description: "J'enlève les longueurs, j'améliore le rythme et je rends la vidéo plus fluide sans casser votre personnalité.",
    },
    {
      name: "Rythme et lisibilité",
      icon: 'Colorfilter',
      description: "Sous-titres, zooms, images, animations, cuts… juste ce qu'il faut pour garder l'attention naturellement.",
    },
    {
      name: "Une cohérence reconnaissable",
      icon: 'PenTool2',
      description: "Couleurs, ambiance, transitions, détails visuels. Pour que vos vidéos aient une identité forte et cohérente.",
    },
    {
      name: "Formats courts, impact immédiat",
      icon: 'Mobile',
      description: "Je transforme des contenus longs en formats courts pensés pour capter rapidement l'attention.",
    },
  ]
}

export const CTA = {
  label: "Vous avez déjà les idées.\nIl manque peut-être juste le bon montage.",
  description: "Si vous avez une vidéo à monter, une idée de contenu ou simplement envie d'améliorer vos vidéos, on peut en discuter tranquillement. Pas besoin d'avoir un projet parfait. Envoyez-moi simplement un message ou votre idée. Et on voit ce qu'on peut créer ensemble."
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
