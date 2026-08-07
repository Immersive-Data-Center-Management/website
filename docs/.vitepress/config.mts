import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress"
import { getBlogSidebarItems } from "./utils/blogPosts";

const base = process.env.VITE_BASE_PATH || "/";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,

  vue: {
    template: {
      compilerOptions: {
        isCustomElement: (tag) => tag.startsWith('ui5-')
      }
    }
  },

  title: "Immersive Data Center Management",
  description: "An ApeiroRA Project",

  srcExclude: ["**/README.md"],

  cleanUrls: true,

  vite: {
    server: {
      watch: {
        usePolling: true
      }
    },
    resolve: {
      alias: [
        {
          find: /^.*\/VPFooter\.vue$/,
          replacement: fileURLToPath(
            new URL("theme/components/VPFooter.vue", import.meta.url),
          ),
        }
      ],
    },
  },

  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    logo: '/IDCM_logo.svg',
    siteTitle: "Immersive Data Center Management",

    nav: [
      { text: "Home", link: "/" },
      { text: "Overview", link: "/overview", activeMatch: "/overview", activeMatch: "/overview" },
      { text: "Documentation", link: "/documentation/pilots/idtx-flow", activeMatch: "/documentation" },
      { text: "News", link: "/news", activeMatch: "/news", activeMatch: "/news" },
    ],

    sidebar: {
      "overview": [
        {
          text: "Overview",
          link: "/overview"
        },
        {
          text: "Data Center",
          link: "/overview/data-center"
        },
        {
          text: "Extended Reality",
          link: "/overview/xr"
        },
        {
          text: "Digital Twin & Asset Administration Shell",
          link: "/overview/digital-twin-aas"
        }
      ],
      "documentation": [
        {
          text: "Pilots",
          items: [
            {
              text: "IDTX Flow",
              link: "/documentation/pilots/idtx-flow"
            }
          ]
        },
      ],
      "news": [
        {
          text: "News",
          items: getBlogSidebarItems().map(post => ({
            text: post.title,
            link: post.url
          }))
        },
      ]
    },

    search: {
      provider: 'local'
    },

    socialLinks: [
      { icon: "github", link: "https://github.com/Immersive-Data-Center-Management" }
    ],
  },

  lastUpdated: true,
  sitemap: {
    hostname: "https://idcm.cloud"
  }
})
