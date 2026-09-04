export type Project = {
  slug: string
  title: string
  genre: string
  cardSummary: string
  description: string
  features: string[]
  learned?: string
  technologies: string[]
  githubUrl?: string
  websiteUrl?: string
  images: string[]
  date: string // dd/mm/yyyy format
  featured?: boolean
  contributors?: { name: string; link: string }[] | null
}

export const projects: Project[] = [
  {
    slug: 'amaranthus-bloemen',
    title: 'Amaranthus Bloemen',
    genre: 'Website',
    cardSummary: 'Professional florist website with Tina CMS admin panel',
    description:
      'A beautiful, responsive website for a local florist business showcasing their services including bridal work, funeral arrangements and contact infromation. Built with modern web technologies and includes a full content management system for easy updates.',
    features: [
      'Full-featured CMS for content management',
      'Responsive design optimized for all devices',
      'Image gallery for bridal and funeral arrangements',
      'Markdown-based content with TinaCMS',
      'SEO optimized with meta tags and structured data'
    ],
    learned:
      'Built a production-ready client website using Next.js 14 with TinaCMS for headless CMS management. Implemented responsive design with Tailwind CSS, managed static generation for performance, and delivered a solution that balances beautiful design with seamless business functionality.',
    technologies: ['Next.js', 'React', 'TypeScript', 'TinaCMS', 'Tailwind CSS', 'Markdown'],
    websiteUrl: 'https://amaranthusbloemen.nl',
    images: ['/img/AmaranthusBloemen.png'],
    date: '12/09/2026',
    contributors: null
  },
  {
    slug: 'gore-magala-mod',
    title: 'Gore Magala Minecraft Mod',
    genre: 'Minecraft Mod (WIP)',
    cardSummary: 'Monster Hunter-inspired mod with custom creatures, weapons, and armor',
    description:
      'An in-progress Minecraft Fabric mod adding Gore Magala from Monster Hunter to Minecraft. Features a fully custom creature with AI, pathfinding, and combat mechanics, alongside a craftable armor set. All 3D models were created from scratch in Blockbench, including detailed textures, loot tables, and special attack abilities.',
    features: [
      'Custom Gore Magala creature with advanced AI',
      // 'Switchaxe weapon with unique mechanics',
      'Complete armor set with crafting recipes',
      'Custom 3D models created in Blockbench',
      'Loot drops and item management',
      'Special attack cooldowns and combat systems',
      'Integrated into Fabric mod ecosystem'
    ],
    learned:
      'Mastered 3D model creation in Blockbench for Minecraft modding, building complex entity models from the ground up. Built sophisticated Minecraft modding systems including custom entity AI, model rigging, combat mechanics, and asset management. Gained experience with Fabric architecture, entity rendering, and integrating Monster Hunter mechanics into vanilla Minecraft gameplay.',
    technologies: ['Java', 'Minecraft', 'Fabric', 'Blockbench', '3D Modeling', 'Texturing'],
    githubUrl: 'https://github.com/AlexJeBoyy/MH-Gore-Magala-mod',
    images: ['/img/GM1.png', '/img/GM2.png', '/img/GM3.png'],
    date: '16/06/2026',
    contributors: null
  },
  {
    slug: 'rotten-flesh-to-leather',
    title: 'Rotten Flesh to Leather',
    genre: 'Minecraft Plugin',
    cardSummary: 'Multi-platform Minecraft plugin with 32K+ downloads',
    description:
      'A lightweight, vanilla-style Minecraft plugin that adds practical ways to convert rotten flesh into useful materials. Convert rotten flesh by smoking it into leather, or by smelting it into brown dye. Supports multiple mod loaders and is fully compatible with servers and single-player worlds.',
    features: [
      'Smoke rotten flesh into leather',
      'Smelt rotten flesh into brown dye',
      'Vanilla-style recipes',
      'Multi-platform support (Fabric, Forge, NeoForge, Quilt)',
      'Server and single-player compatible',
      'MIT licensed'
    ],
    learned:
      'Developed a clean, focused Minecraft plugin that prioritizes user experience and compatibility. Achieved 32.7K downloads by keeping the feature set simple and aligned with vanilla Minecraft design philosophy. Managed multi-loader support and maintained active updates.',
    technologies: ['Minecraft', 'Java', 'Fabric', 'Forge', 'NeoForge', 'Quilt'],
    githubUrl: 'https://github.com/AlexJeBoyy/FleshToLeather',
    images: ['/img/RFTL.jpg'],
    date: '16/01/2026',
    contributors: null
  },
  {
    slug: 'the-judge',
    title: 'The Judge',
    genre: 'Horror',
    cardSummary: 'Choice-driven horror, 2D/3D, puzzle',
    description:
      'A choice-driven horror game where you decide whether people survive by judging how they look. You have to react quickly, read visual clues, and make the right call before it is too late.',
    features: [
      'Judge characters by visual clues',
      'Choice-driven survival mechanic',
      'Mix of 2D and 3D presentation'
    ],
    learned:
      'I built the right-or-wrong judgment logic, helped with some of the animation work, and learned how to support a tense horror mood through simple interactive systems.',
    technologies: ['C#', 'Unity', 'Procreate', 'ShaderLab', 'HLSL'],
    date: '23/06/2025',
    contributors: [
      {
        name: 'Vigo Linders',
        link: 'https://github.com/Vigo-l'
      }
    ],
    githubUrl: 'https://github.com/AlexJeBoyy/the-judge',
    images: ['/img/TheJudge.png', '/img/TheJudge2.png']
  },
  {
    slug: 'the-missing-pieces',
    title: 'The missing pieces',
    genre: 'Mystery Game',
    cardSummary: 'Mystery Game, 3D, Puzzle',
    description:
      'A 3D mystery puzzle game where players find missing objects and characters from paintings, then return them to the correct painting. This project was created as a school assignment for the Rijksmuseum.',
    features: ['3D environment', 'Object interaction', 'Puzzle-solving'],
    learned:
      'I improved my work with multi-camera setups, object interaction systems, and puzzle design that matches an art-focused museum theme. I made all of the code for (exept ui) for this project.',
    technologies: ['C#', 'Unity', 'Procreate', 'Blender', 'Clip Studio Paint'],
    date: '29/01/2025',
    contributors: [
      {
        name: 'Livia van Leeuwen (Player assets/animation)',
        link: 'https://www.behance.net/liviavanleeuwen'
      },
      {
        name: 'Dean Lemans (UI)',
        link: 'https://linksta.cc/@Dean'
      },
      {
        name: 'Eric (3D models)',
        link: ''
      },
      {
        name: 'Veerle de Lange (Painting assets)',
        link: 'https://www.instagram.com/a_jinxing_ghoul?igsh=ZGZlYzhzdmU5dXpp&utm_source=qr'
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
    technologies: ['C#', 'Unity', 'Blender'],
    date: '07/04/2025',
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
    technologies: ['C#', 'Unity', 'Procreate', 'Aseprite'],
    date: '04/11/2024',
    githubUrl: 'https://github.com/AlexJeBoyy/Zombie-Custom',
    images: ['/img/Zombie4.png', '/img/Zombie1.png', '/img/Zombie2.png'],
    contributors: null
  },
  {
    slug: 'robot-takeover',
    title: 'Robot Takeover',
    genre: 'FPS',
    cardSummary: 'FPS, Action, 3D',
    description:
      "My first self-made game. It's an FPS where you need to shoot robots to win, with two guns and a grappling hook.",
    features: ['Different guns', 'AI pathfinding', 'Grappling hook'],
    date: '16/01/2024',
    technologies: ['C#', 'Unity'],
    images: ['/img/RobotTakeover-A.png', '/img/RobotTakeover-G.png', '/img/RobotTakeover-P.png'],
    githubUrl: 'https://github.com/AlexJeBoyy/FPS-1',
    contributors: null
  },
  {
    slug: 'cats-vs-birds',
    title: 'Cats vs Birds',
    genre: 'Top-Down Shooter',
    cardSummary: 'Top-Down Shooter, Pixel Graphics, Action',
    description:
      'Top-down shooter where you kill birds as a cat. If you clear enemies and collect the key you can open the door and win.',
    features: ['Fish for bullets', 'Enemy raycasting', 'Lighting effects'],
    date: '04/11/2024',
    technologies: ['C#', 'Unity'],
    images: ['/img/CVSB-Door.png', '/img/CVSB.png', '/img/CVSB-Enim.png'],
    githubUrl: 'https://github.com/AlexJeBoyy/CatsVSBirds/',
    contributors: null
  },
  {
    slug: 'horse-jumping',
    title: 'Horse Jumping',
    genre: 'Platformer',
    cardSummary: 'Platformer, Pixel Graphics, Horse',
    description:
      'Horse parkour game where you can get smaller to get under obstacles. You speed up over time and can switch movement speeds.',
    features: ['Point system', 'Ducking', 'Parkour'],
    date: '30/10/2024',
    technologies: ['C#', 'Unity', 'Aseprite'],
    images: ['/img/HJ_S.png', '/img/HJ_GO.png', '/img/HJ_Jump.png'],
    githubUrl: 'https://github.com/AlexJeBoyy/HorseGame',
    contributors: null
  }
]

/**
 * Parse date string in dd/mm/yyyy format to Date object for sorting
 */
function parseDate(dateStr: string): Date {
  const parts = dateStr.split('/').map(Number)
  const day = parts[0] || 1
  const month = parts[1] || 1
  const year = parts[2] || 2000
  return new Date(year, month - 1, day)
}

/**
 * Get projects sorted by date (newest first)
 */
export function getSortedProjects(): Project[] {
  return [...projects].sort((a, b) => parseDate(b.date).getTime() - parseDate(a.date).getTime())
}

export function getProjectBySlug(slug: string): Project | undefined {
  return projects.find((project) => project.slug === slug)
}
