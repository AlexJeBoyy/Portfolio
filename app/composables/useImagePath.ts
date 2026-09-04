export function useImagePath(): (path: string) => string {
  const baseURL = useRuntimeConfig().app.baseURL

  return (path: string): string => {
    return `${baseURL}${path.replace(/^\//, '')}`
  }
}
