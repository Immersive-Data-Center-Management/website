import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vitepress"
import { getBlogSidebarItems } from "./utils/blogPosts";

const base = process.env.VITE_BASE_PATH || "/";
// Ensure a single trailing slash so asset hrefs below concatenate cleanly.
const baseWithSlash = base.endsWith("/") ? base : `${base}/`;

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base,

  head: [
    ["link", { rel: "icon", type: "image/svg+xml", href: `${baseWithSlash}favicon.svg` }],
    ["link", { rel: "icon", type: "image/x-icon", href: `${baseWithSlash}favicon.ico` }],
    ["link", { rel: "apple-touch-icon", sizes: "180x180", href: `${baseWithSlash}apple-touch-icon.png` }],
  ],

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
      { text: "Documentation", link: "/documentation/general-architecture", activeMatch: "/documentation" },
      { text: "Publications", link: "/publications/xr-for-complex-datacenter-environments", activeMatch: "/publications" },
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
        {
          text: '<ui5-icon name="Chart-Tree-Map" class="sidebar-section-icon"></ui5-icon><span>Architecture</span>',
          items: [
            { text: "Overview", link: "/documentation/general-architecture/" },
          ]
        },
        {
          text: '<ui5-icon name="flag-2" class="sidebar-section-icon"></ui5-icon><span>Pilots</span>',
          items: [
            { text: "IDTX Flow", link: "/documentation/pilots/idtx-flow" },
            { text: "IDTX Core", link: "/documentation/pilots/idtx-core" },
            { text: "IDTX Forge", link: "/documentation/pilots/idtx-forge" },
            { text: "AAS Plugin for NetBox", link: "/documentation/pilots/aas-plugin-for-netbox" },
            // { text: "IDTX Orca", link: "/documentation/pilots/idtx-orca" },
            // { text: "IDTX Inspector", link: "/documentation/pilots/idtx-inspector" },
            // { text: "IDTX Poser", link: "/documentation/pilots/idtx-poser" },
            // { text: "IDTX Conductor", link: "/documentation/pilots/idtx-conductor" },
          ]
        },
        {
          text: '<ui5-icon name="lab" class="sidebar-section-icon"></ui5-icon><span>PoC</span>',
          items: [
            { text: "Experiment 1 – 3D Viewer", link: "/documentation/research/experiment-1-3d-viewer" },
            { text: "Experiment 2 – AR", link: "/documentation/research/experiment-2-ar" },
            { text: "Experiment 3", link: "/documentation/research/experiment-3" },
          ]
        },
      ],
      "publications": [
        {
          text: "Publications",
          items: [
            {
              text: "XR for Complex Datacenter Environments",
              link: "/publications/xr-for-complex-datacenter-environments"
            },
            {
              text: "Building Immersive Digital Twins",
              link: "/publications/building-immersive-digital-twins"
            },
            {
              text: "ApeiroUI – a Visual Interface for Cloud Infrastructure",
              link: "/publications/apeiro-ui-nordichi"
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
