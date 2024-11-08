import type { ComponentResolver } from 'unplugin-vue-components'
import { components } from '../../../vaul-vue/constant'

export interface ResolverOptions {
  /**
   * prefix for components used in templates
   *
   * @defaultValue ""
   */
  prefix?: string
}

export default function (options: ResolverOptions = {}): ComponentResolver {
  const { prefix = '' } = options

  return {
    type: 'component',
    resolve: (name: string) => {
      if (name.toLowerCase().startsWith(prefix.toLowerCase())) {
        const componentName = name.substring(prefix.length)
        if (components.includes(componentName)) {
          return {
            name: componentName,
            from: 'vaul-vue',
          }
        }
      }
    },
  }
}