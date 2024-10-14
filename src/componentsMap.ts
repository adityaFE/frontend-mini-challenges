export const componentsMap: {
  [key: string]: () => Promise<{ default: React.ComponentType<unknown> }>
} = {
  Accordion: () => import('./Accordion/index.tsx'),
  Counter: () => import('./Counter/index.tsx'),
  Flipcard: () => import('./FlipCard/index.tsx'),
  Guesser: () => import('./Guesser/index.tsx'),
  ImageGallery: () => import('./ImageGallery/index.tsx')
}
