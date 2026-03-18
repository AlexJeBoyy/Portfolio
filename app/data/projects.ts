export type Project = {
  slug: string
  title: string
  genre: string
  cardSummary: string
  description: string
  features: string[]
  learned?: string
  technologies: string[]
  githubUrl: string
  images: string[]
  contributors?: { name: string; link: string }[] | null
}

export const projects: Project[] = [
  {
    slug: 'rijksmuseum',
    title: 'Rijksmuseum assignment',
    genre: 'Mystery Game',
    cardSummary: 'Mystery Game, 3D, Puzzle',
    description:
      'A 3D mystery puzzle game where players find missing objects and characters from paintings, then return them to the correct painting. This project was created as a school assignment for the Rijksmuseum.',
    features: ['3D environment', 'Object interaction', 'Puzzle-solving'],
    learned:
      'I improved my work with multi-camera setups, object interaction systems, and puzzle design that matches an art-focused museum theme. I made all of the code for (exept ui) for this project.',
    technologies: ['C#, Unity, Procreate, Blender, Clip Studio Paint'],
    contributors: [
      {
        name: 'Livia van Leeuwen (Player assets/animation)',
        link: 'https://www.behance.net/liviavanleeuwen'
      },
      {
        name: 'Dean (UI)',
        link: ''
      },
      {
        name: 'Eric (3D models)',
        link: ''
      },
      {
        name: 'Test (Painting assets)',
        link: ''
      }
    ],
    githubUrl: 'https://github.com/AlexJeBoyy/Rijksmuseum',
    images: ['/img/RM2.png', '/img/RM1.png', '/img/RM3.png']
  },
  {
    slug: 'consumedbylight',
    title: 'Consumed by Light',
    genre: 'Horde shooter',
    cardSummary: 'Horde shooter, wave-based, 3D',
    description:
      'A 3D horde shooter where you fight off waves of enemies ',
    features: ['Different enemys', 'Telekinesis mechanics', 'Enemy AI'],
    learned:
      'I made the player movement from scratch with sliding, dash and sprint mechanics. I learned a lot about how gravity and physics work in Unity.',
    technologies: ['C#, Unity, Blender'],
    contributors: [
      {
        name: 'Vigo Linders (Shooting and telekinesis mechanics)',
        link: 'https://github.com/Vigo-l'
      },
      {
        name: 'Milan (Enemy ai)',
        link: 'https://github.com/Milqz'
      },
      {
        name: 'Evan (3D models)',
        link: 'https://github.com/lungcapacitytest'
      },
    ],
    githubUrl: 'https://github.com/AlexJeBoyy/ConsumedByLight',
    images: ['/img/CBL1.png', '/img/CBL4.png', '/img/CBL3.png']
  },
  {
    slug: 'prepare-to-scare',
    title: 'Prepare To Scare',
    genre: 'Simulation',
    cardSummary: 'Customization, Halloween, GameJam',
    description:
      'A game where you can customize your own zombie to go scare at Halloween. This game was made at a 3 day Gamejam. I made all the code and collaborated with an artist for assets.',
    features: [
      'Wide range of customization options',
      'Interactive user interface',
      'Screenshot options'
    ],
    learned:
      'I learned a lot about lists, moving data between scenes, and capturing screenshots in the right format and location.',
    technologies: ['C#, Unity, Procreate, Aseprite'],
    githubUrl: 'https://github.com/AlexJeBoyy/Zombie-Custom',
    images: ['/img/Zombie4.png', '/img/Zombie1.png', '/img/Zombie2.png']
  },
  {
    slug: 'robot-takeover',
    title: 'Robot Takeover',
    genre: 'FPS',
    cardSummary: 'FPS, Action, 3D',
    description:
      "My first self-made game. It's an FPS where you need to shoot robots to win, with two guns and a grappling hook.",
    features: ['Different guns', 'AI pathfinding', 'Grappling hook'],
    technologies: ['C#, Unity'],
    githubUrl: 'https://github.com/AlexJeBoyy/FPS-1',
    images: ['/img/RobotTakeover-A.png', '/img/RobotTakeover-G.png', '/img/RobotTakeover-P.png']
  },
  {
    slug: 'cats-vs-birds',
    title: 'Cats vs Birds',
    genre: 'Top-Down Shooter',
    cardSummary: 'Top-Down Shooter, Pixel Graphics, Action',
    description:
      'Top-down shooter where you kill birds as a cat. If you clear enemies and collect the key you can open the door and win.',
    features: ['Fish for bullets', 'Enemy raycasting', 'Lighting effects'],
    learned:
      'This project helped me improve animation workflow and enemy detection raycasting in a top-down game.',
    technologies: ['C#, Unity'],
    githubUrl: 'https://github.com/AlexJeBoyy/CatsVSBirds/tree/main',
    images: ['/img/CVSB-Door.png', '/img/CVSB.png', '/img/CVSB-Enim.png']
  },
  {
    slug: 'horse-jumping',
    title: 'Horse Jumping',
    genre: 'Platformer',
    cardSummary: 'Platformer, Pixel Graphics, Horse',
    description:
      'Horse parkour game where you can get smaller to get under obstacles. You speed up over time and can switch movement speeds.',
    features: ['Point system', 'Ducking', 'Parkour'],
    learned:
      'I learned to create my own assets, use Unity sprites, generate maps, and build a high score save system.',
    technologies: ['C#, Unity, Aseprite'],
    githubUrl: 'https://github.com/AlexJeBoyy/HorseGame',
    images: ['/img/HJ_S.png', '/img/HJ_GO.png', '/img/HJ_Jump.png']
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
