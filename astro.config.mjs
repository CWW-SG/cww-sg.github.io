import { defineConfig } from 'astro/config'
import starlight from '@astrojs/starlight'

// https://astro.build/config
export default defineConfig({
  site: 'https://cww-sg.github.io',
  integrations: [
    starlight({
      title: 'CWW AWS',
      // social: {
      //   github: 'https://github.com/withastro/starlight',
      // },
      sidebar: [
        {
          label: 'Start Here',
          autogenerate: { directory: 'Start Here' },
        },
        {
          label: 'Architecture',
          autogenerate: { directory: 'Architecture' },
        },
        {
          label: 'Security',
          autogenerate: { directory: 'Security' },
        },
        {
          label: 'DNS and Domain Management',
          autogenerate: { directory: 'DNS and Domain Management' },
        },
        {
          label: 'Guide',
          autogenerate: { directory: 'Guide' },
        },
      ],
    }),
  ],
})
