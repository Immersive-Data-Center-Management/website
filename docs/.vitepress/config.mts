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
      { text: "Publications", link: "/publications/xr-for-complex-datacenter-environments", activeMatch: "/publications" },
      { text: "News", link: "/news", activeMatch: "/news", activeMatch: "/news" },
    ],

    sidebar: {
      "overview": [
        {
          text: "Overview",
          link: "/overview",
          items: [
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
          ]
        },
      //   {
      //     text: "High-Level Architecture",
      //     link: "/overview/high-level-architecture",
      //     items: []
      //   },
      //   {
      //     text: "Deep Dives",
      //     items: [
      //       {
      //         text: "Deep Dive: Build an Immersive Application",
      //         link: "/overview/deep-dive-build-an-immersive-application"
      //       },
      //       {
      //         text: "Deep Dive: Artificial Intelligence in IDCM",
      //         link: "/overview/deep-dive-artificial-intelligence-in-idcm"
      //       },
      //       {
      //         text: "Deep Dive: Data Ingestion",
      //         link: "/overview/deep-dive-data-ingestion"
      //       },
      //       {
      //         text: "Deep Dive: Telling Stories with Synthetic Data",
      //         link: "/overview/deep-dive-telling-stories-with-synthetic-data"
      //       }
      //     ]
      //   }
      ],
      "documentation": [
 
        {
          text: "Pilots",
          items: [
            { text: "IDTX Flow", link: "/documentation/pilots/idtx-flow" },
            { text: "IDTX Core", link: "/documentation/pilots/idtx-core" },
            { text: "IDTX Forge", link: "/documentation/pilots/idtx-forge" },
            { text: "AAS Plugin for NetBox", link: "/documentation/pilots/aas-plugin-for-netbox" },
            // { text: "IDTX Orca", link: "/documentation/pilots/idtx-orca" },
            // { text: "IDTX Metrics Mapper", link: "/documentation/pilots/idtx-metrics-mapper" },
            // { text: "IDTX Studio", link: "/documentation/pilots/idtx-studio" },
            // { text: "IDCM AI Backend", link: "/documentation/pilots/idcm-ai-backend" },
            // { text: "IDCM AAS MCP Server", link: "/documentation/pilots/idcm-aas-mcp-server" },
            // { text: "Cabbage", link: "/documentation/pilots/cabbage" },
          ]
        },
        // {
        //   text: "Samples",
        //   items: [
        //     { text: "1", link: "/documentation/samples/sample-1" },
        //     { text: "2", link: "/documentation/samples/sample-2" },
        //     { text: "4", link: "/documentation/samples/sample-4" },
        //     { text: "5", link: "/documentation/samples/sample-5" },
        //     { text: "Network Topology Viewer", link: "/documentation/samples/network-topology-viewer" },
        //     { text: "Temporal Load Viewer", link: "/documentation/samples/temporal-load-viewer" },
        //   ]
        // },
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
