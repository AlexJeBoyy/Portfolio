export type AppNavModule = {
  name: string
  title: string
  path: string
  hidden?: boolean
  childModules?: AppNavModule[]
  tabModules?: AppNavModule[]
}

export const navigationModules: AppNavModule[] = [
  {
    name: 'home',
    title: 'Home',
    path: '/'
  },
  {
    name: 'projects',
    title: 'Projects',
    path: '/projects',
    tabModules: [
      { name: 'projects-unity', title: 'Unity', path: '/projects#unity' },
      { name: 'projects-unreal', title: 'Unreal', path: '/projects#unreal' },
      { name: 'projects-websites', title: 'Websites', path: '/projects#websites' }
    ],
    childModules: [
      { name: 'projects-slug', title: 'Project Detail', path: '/projects/{slug}', hidden: true }
    ]
  },
  {
    name: 'skills',
    title: 'Skills',
    path: '/skills',
    tabModules: [
      { name: 'skills-hard', title: 'Hard Skills', path: '/skills#hard' },
      { name: 'skills-soft', title: 'Soft Skills', path: '/skills#soft' },
      { name: 'skills-education', title: 'Education', path: '/skills#education' }
    ]
  },
  {
    name: 'contact',
    title: 'Contact',
    path: '/contact'
  }
]

function normalizePath(path: string): string {
  const cleanPath = (path.split('?')[0] ?? '').split('#')[0] ?? ''
  if (cleanPath === '/') return '/'
  return cleanPath.replace(/\/+$/, '')
}

function pathMatches(modulePath: string, routePath: string): boolean {
  const moduleCleanPath = normalizePath(modulePath)
  const routeCleanPath = normalizePath(routePath)

  if (moduleCleanPath.includes('{')) {
    const pattern = '^' + moduleCleanPath.replace(/\{[^/]+\}/g, '[^/]+') + '$'
    return new RegExp(pattern).test(routeCleanPath)
  }

  if (moduleCleanPath === '/') {
    return routeCleanPath === '/'
  }

  return routeCleanPath === moduleCleanPath || routeCleanPath.startsWith(`${moduleCleanPath}/`)
}

export function getVisibleModules(modules: AppNavModule[]): AppNavModule[] {
  return modules.filter((module) => !module.hidden)
}

export function getCurrentModuleChain(routePath: string, modules: AppNavModule[]): AppNavModule[] {
  for (const module of modules) {
    if (pathMatches(module.path, routePath)) {
      return [module]
    }

    const nestedModules = [...(module.tabModules ?? []), ...(module.childModules ?? [])]
    if (nestedModules.length > 0) {
      const childChain = getCurrentModuleChain(routePath, nestedModules)
      if (childChain.length > 0) {
        return [module, ...childChain]
      }
    }
  }

  return []
}
