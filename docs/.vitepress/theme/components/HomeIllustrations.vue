<script setup>
import { withBase, useData } from 'vitepress'
const { isDark } = useData()
</script>

<template>
  <div class="home-illustrations">

    <div class="home-illustration-section">
      <div class="home-illustration-visual">
        <img
          :src="isDark ? withBase('/overview/illustration-data-center-dark.png') : withBase('/overview/illustration-data-center.png')"
          alt="Data Center – three interconnected layers illustration"
          class="home-illustration-img"
        />
      </div>
      <div class="home-illustration-text">
        <h2>Three Layers, One Connected Environment</h2>
        <p>
          Modern data centers span three distinct layers: facility infrastructure,
          hardware systems, and virtualized services. In most organizations these layers
          operate in isolation: separate teams, tools, and information structures that
          fragment the view of the environment they jointly operate. IDCM treats the data
          center as what it actually is: a single, integrated system where changes in one
          layer cascade into the others. By connecting facility, hardware, and virtualization
          into one coherent view, IDCM makes these dependencies visible and manageable.
        </p>
        <a href="/overview/data-center" class="home-illustration-link">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div class="home-illustration-section reverse">
      <div class="home-illustration-visual">
        <img
          :src="isDark ? withBase('/overview/illustration-xr-dark.png') : withBase('/overview/illustration-xr.png')"
          alt="Extended Reality – immersive data center exploration illustration"
          class="home-illustration-img"
        />
      </div>
      <div class="home-illustration-text">
        <h2>Navigate Your Infrastructure Spatially</h2>
        <p>
          Extended Reality (XR) transforms the data center from a set of dashboards into
          a space you can explore. Virtual Reality lets operators navigate a complete digital
          representation of their facility. Augmented Reality overlays live asset states
          directly on physical equipment. Mixed Reality connects distributed teams in shared
          spatial environments. Together, VR, AR, and MR make complex multi-layer
          infrastructure legible and accessible to everyone who operates it.
        </p>
        <a href="/overview/xr" class="home-illustration-link">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

    <div class="home-illustration-section">
      <div class="home-illustration-visual">
        <img
          :src="isDark ? withBase('/overview/illustration-digital-twin-dark.png') : withBase('/overview/illustration-digital-twin.png')"
          alt="Digital Twin and AAS – semantic data foundation illustration"
          class="home-illustration-img"
        />
      </div>
      <div class="home-illustration-text">
        <h2>A Semantic Foundation That Connects Everything</h2>
        <p>
          The Digital Twin provides a lifecycle-wide representation of every asset – from
          cooling units to virtual workloads – connected across all three data center layers.
          The Asset Administration Shell (AAS) is its structural backbone: standardized
          submodels that make asset data machine-readable, vendor-neutral, and always
          traceable to its authoritative source. Together, they create a unified information
          layer that enables consistent decision-making, cross-layer analysis, and reliable
          automation without replacing the tools teams already use.
        </p>
        <a href="/overview/digital-twin-aas" class="home-illustration-link">
          Learn more <span aria-hidden="true">→</span>
        </a>
      </div>
    </div>

  </div>
</template>
