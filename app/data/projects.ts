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
    title: 'Rijksmuseum assignemnt',
    genre: 'Mistery Game',
    cardSummary: 'Mistery Game, 3D, Puzzle',
    description:
      'A game where you need to find missing objects and characters from paintings and put them back in the right place. This was a school assignment for the Rijksmuseum.',
    features: ['3D environment', 'Object interaction', 'Puzzle-solving'],
    learned:
      'I learned how to work with multiple cameras, implement object interaction, and design puzzles that fit the theme of the Rijksmuseum.',
    technologies: ['C#', 'Unity'],
    contributors: [
      {
        name: 'Livia van Leeuwen (Player assets/animation)',
        link: 'https://www.behance.net/liviavanleeuwen'
      }
    ],
    githubUrl: 'https://github.com/AlexJeBoyy/Rijksmuseum',
    images: ['/img/RM1.png', '/img/RM2.png', '/img/RM3.png']
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
    technologies: ['C#', 'Unity', 'GitHub', 'Procreate', 'Aseprite'],
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
    technologies: ['C#', 'Unity'],
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
    technologies: ['C#', 'Unity'],
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
    technologies: ['C#', 'Unity', 'Aseprite'],
    githubUrl: 'https://github.com/AlexJeBoyy/HorseGame',
    images: ['/img/HJ_S.png', '/img/HJ_GO.png', '/img/HJ_Jump.png']
  }
]

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
