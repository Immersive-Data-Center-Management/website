---
title: "AAS Plugin for NetBox: Bridging Infrastructure Data with Digital Twins"
---

# AAS Plugin for NetBox: Bridging Infrastructure Data with Digital Twins

## Overview

The AAS Plugin for NetBox enables automatic synchronization from NetBox to the Asset Administration Shell (AAS) standard, creating a unified bridge between your IT infrastructure inventory and digital twin ecosystems. This plugin demonstrates how to transform raw infrastructure data into standardized, reusable formats that power digital twin applications. By leveraging NetBox, the industry-leading infrastructure asset management system used globally in data centers, the plugin shows how existing infrastructure investments can be converted into actionable digital twin data without replacing established workflows.

## Core Capabilities

### 1. Automated Data Synchronization (NetBox → AAS)

The plugin automatically converts infrastructure data from NetBox into standardized AAS format whenever assets are created or modified. Changes in your NetBox inventory such as device additions, configuration updates, or property changes trigger automatic synchronization to ensure your digital twin systems always work with current infrastructure data.

### 2. Standards-Based Asset Representation

Data is transformed according to IDTA (Industrial Digital Twin Association) standards using Submodels and Asset Administration Shells specifically designed for our IDCM project. This structured approach ensures that infrastructure metadata can be seamlessly integrated into data center-focused digital twin applications and dashboards.

### 3. Keep your System of Trust

The plugin serves as a reference implementation for data preparation demonstrating how raw infrastructure data from any source can be enriched, standardized, and prepared for consumption by digital twin applications. This can be extended to other infrastructure systems and data sources.

## Getting Started

The AAS Plugin for NetBox integrates directly into your existing NetBox deployment:

**Typical Workflow:**

1. Install the plugin into your NetBox environment
2. Configure which NetBox assets and properties should synchronize to AAS
3. Enable automated synchronization data flows whenever NetBox changes
4. Reference AAS-enriched asset data in your IDCM digital twin applications and visualizations

Asset data flows automatically from your infrastructure source-of-truth into standardized digital twin formats, ready for consumption by IDTX tools and other AAS-aware applications.

For detailed installation and configuration, consult the project repository.

## Key Features

### NetBox Asset Mapping

- Select and configure which NetBox assets and attributes participate in AAS synchronization
- Define custom mapping rules for complex infrastructure hierarchies
- Support for NetBox's complete inventory including devices, circuits, power distribution, and more

### IDTA Standards Compliance

- Automatic conversion to standardized IDTA Asset Administration Shells and Submodels
- Use of domain-specific schemas designed for the IDCM project
- Structured metadata ensures interoperability with AAS-aware applications and the BaSyx stack

### Automated Change Detection

- Continuous monitoring of NetBox for infrastructure changes
- Automatic AAS synchronization triggered by asset modifications
- Configurable sync intervals to balance data freshness with system performance

### Integration with IDTX Ecosystem

- Direct integration with IDTX Core for serving AAS-enriched asset data
- Support for USD file references linking infrastructure data to 3D digital twin models
- Enable data-driven visualization connecting infrastructure to visual representations

## Why It Matters

Data center infrastructure management and digital twin applications have traditionally operated in separate silos. The AAS Plugin for NetBox bridges this gap by establishing NetBox as a data preparation starting point:

- **Leverage Existing Infrastructure**: NetBox is the global standard in data center inventory management transform this existing investment into digital twin data
- **Standards-Based Interoperability**: IDTA compliance ensures data works not just within IDCM but across the entire AAS ecosystem via the BaSyx stack
- **Automated Data Freshness**: Infrastructure changes automatically propagate to digital twins, eliminating manual synchronization
- **Replicable Pattern**: The plugin demonstrates a generalizable approach to data preparation. The same pattern can prepare data from other sources
- **Enterprise Scalability**: Support for complex, large-scale infrastructure environments with hundreds of thousands of assets
- **Reduced Implementation Time**: Start with NetBox data immediately rather than manual digital twin population

## Current Status

The AAS Plugin for NetBox is actively developed as a data preparation component within the IDCM (Immersive Data Center Management) project and the IDTX Toolbox ecosystem, demonstrating how infrastructure data can be standardized and prepared for consumption by digital twin applications.

---

*The AAS Plugin for NetBox is open source and welcomes contributions, feature requests, and feedback. Learn more at the project repository.*
