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
        // {
        //   text: "General Architecture",
        //   items: [
        //     { text: "Overview", link: "/documentation/general-architecture/" },
        //     { text: "Digital Twin – a conceptual perspective", link: "/documentation/general-architecture/digital-twin" },
        //     { text: "USDZ – THE standard of tomorrow", link: "/documentation/general-architecture/usdz" },
        //   ]
        // },
        // {
        //   text: "Research & Exploration",
        //   items: [
        //     { text: "Experiment 1 – 3D Viewer", link: "/documentation/research/experiment-1-3d-viewer" },
        //     { text: "Experiment 2 – AR", link: "/documentation/research/experiment-2-ar" },
        //     { text: "Experiment 3", link: "/documentation/research/experiment-3" },
        //   ]
        // },
        {
          text: "Pilots",
          items: [
            { text: "IDTX Flow", link: "/documentation/pilots/idtx-flow" },
            { text: "IDTX Core", link: "/documentation/pilots/idtx-core" },
            { text: "IDTX Forge", link: "/documentation/pilots/idtx-forge" },
            // { text: "IDTX Orca", link: "/documentation/pilots/idtx-orca" },
            // { text: "IDTX Inspector", link: "/documentation/pilots/idtx-inspector" },
            // { text: "IDTX Poser", link: "/documentation/pilots/idtx-poser" },
            // { text: "IDTX Conductor", link: "/documentation/pilots/idtx-conductor" },
          ]
        },
        {
          text: "Publications",
          items: [
            {
              text: "XR for Complex Datacenter Environments",
              link: "/documentation/publications/xr-for-complex-datacenter-environments"
            },
            {
              text: "Building Immersive Digital Twins",
              link: "/documentation/publications/building-immersive-digital-twins"
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
