---
# https://vitepress.dev/reference/default-theme-home-page
layout: home

hero:
  name: "Immersive Data Center Management"
  tagline: A new way to understand and operate the digital infrastructure that powers Europe
  image:
    src: /IDCM_logo.svg
    alt: IDCM Logo
  actions:
    - theme: brand
      text: Explore Our Research
      link: /overview
    - theme: alt
      text: View on GitHub
      link: https://github.com/Immersive-Data-Center-Management

features:
  - icon: '<ui5-icon name="it-host" style="width:40px;height:40px;color:#1b90ff"></ui5-icon>'
    title: Data Center
    details: A data center combines facility infrastructure, hardware, and virtual systems to provide reliable computing resources. It forms the technical foundation on which digital services operate.
    link: /overview/data-center
  - icon: '<ui5-icon name="vr-glasses" style="width:40px;height:40px;color:#1b90ff"></ui5-icon>'
    title: Extended Reality
    details: Extended Reality (XR) combines virtual, augmented, and mixed reality technologies to provide intuitive and immersive ways to explore and understand complex information.
    link: /overview/xr
  - icon: '<ui5-icon name="dimension" style="width:40px;height:40px;color:#1b90ff"></ui5-icon>'
    title: Digital Twin & Asset Administration Shell
    details: The Digital Twin provides a structured digital representation of assets, while the AAS ensures the underlying data is consistent and machine-interpretable. Together, they create a unified and reliable foundation for managing data center information.
    link: /overview/digital-twin-aas

sections:
  - title: Three Layers, One Connected Environment
    text: >-
      Modern data centers span three distinct layers: facility infrastructure,
      hardware systems, and virtualized services. In most organizations these layers
      operate in isolation: separate teams, tools, and information structures that
      fragment the view of the environment they jointly operate. IDCM treats the data
      center as what it actually is: a single, integrated system where changes in one
      layer cascade into the others. By connecting facility, hardware, and virtualization
      into one coherent view, IDCM makes these dependencies visible and manageable.
    image: /overview/illustration-data-center.png
    imageDark: /overview/illustration-data-center-dark.png
    alt: Data Center – three interconnected layers illustration
    link: /overview/data-center
  - title: Navigate Your Infrastructure Spatially
    text: >-
      Extended Reality (XR) transforms the data center from a set of dashboards into
      a space you can explore. Virtual Reality lets operators navigate a complete digital
      representation of their facility. Augmented Reality overlays live asset states
      directly on physical equipment. Mixed Reality connects distributed teams in shared
      spatial environments. Together, VR, AR, and MR make complex multi-layer
      infrastructure legible and accessible to everyone who operates it.
    image: /overview/illustration-xr.png
    imageDark: /overview/illustration-xr-dark.png
    alt: Extended Reality – immersive data center exploration illustration
    link: /overview/xr
  - title: A Semantic Foundation That Connects Everything
    text: >-
      The Digital Twin provides a lifecycle-wide representation of every asset – from
      cooling units to virtual workloads – connected across all three data center layers.
      The Asset Administration Shell (AAS) is its structural backbone: standardized
      submodels that make asset data machine-readable, vendor-neutral, and always
      traceable to its authoritative source. Together, they create a unified information
      layer that enables consistent decision-making, cross-layer analysis, and reliable
      automation without replacing the tools teams already use.
    image: /overview/illustration-digital-twin.png
    imageDark: /overview/illustration-digital-twin-dark.png
    alt: Digital Twin and AAS – semantic data foundation illustration
    link: /overview/digital-twin-aas
---
