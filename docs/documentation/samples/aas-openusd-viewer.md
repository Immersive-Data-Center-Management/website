---
title: "AAS + OpenUSD Viewer: Bridging Digital Twins and 3D"
---

# AAS + OpenUSD Viewer: Bridging Digital Twins and 3D

**IDCM Research Team · October 2026**

## Overview

This experiment explores whether two critical standards for immersive industrial digital twin applications can be connected without custom glue code: the Asset Administration Shell (AAS) for structured metadata and OpenUSD for 3D geometry. The result is a self-contained, locally runnable demo built on [IDTX-Flow](/documentation/pilots/idtx-flow), in which users can navigate a 3D data center scene, select individual server units, and instantly retrieve their corresponding AAS records. The central question was whether this connection can be made reproducibly, locally, and without cloud dependencies.

![3D Viewer with Live Metadata](/samples/aas-openusd-viewer/3d-viewer.png)
_Figure 1: The 3D viewer showing a server rack with live AAS metadata panel. Click a server to see its full digital twin record._

## What Problem Does It Solve?

Data center assets carry rich metadata through the AAS standard: manufacturer details, sensor thresholds, operational parameters, and lifecycle records. Visualizing that metadata alongside the actual 3D geometry of an asset has traditionally been difficult. 3D tools don't speak AAS. AAS tooling doesn't render meshes. The gap between the two is usually bridged by developers writing custom glue code for every new use case.

This experiment addresses that gap by testing a reusable, standards-based approach that anyone can run locally.

## Key Findings

Geometry, transforms, and material assignments in IDTX-Flow match what the USD standard guarantees, confirming that files authored in standard DCC tools render as expected. The mapping from a USD prim selection to an AAS lookup worked reliably across all tested assets. Running the full stack locally via Docker Compose proved straightforward, with no external dependencies required.

The experiment validates that AAS and OpenUSD can be integrated at the application level using open tools and without custom middleware, a result that was not obvious at the outset.

## What We Built

### Live AAS Metadata Integration

Each server unit in the scene is a distinct USD prim. A click on a 3D object maps directly to an AAS record lookup, bringing up height, position, manufacturer name, serial number, year of construction, and product URI in real time. Changing the selection updates the panel immediately.

### Local-First Architecture

The AAS backend spins up with a single Docker Compose command, running KeyCloak for authentication, a BASyx AAS Server for digital twin records, and nginx as proxy for asset storage. No cloud accounts, no API keys.

### Variant Support

The viewer supports USD variant sets, allowing users to compare different configurations or models of the same product directly within the 3D scene.

### Clean Separation of Concerns

The Godot 4 frontend separates data flow, camera navigation and scene selection, and UI presentation into distinct layers, making the codebase easy to extend for domain-specific use cases.

## Getting Started

Clone the repository, run `docker compose up`, and open the Godot project. The demo connects to the local stack automatically.

![Login Screen](/samples/aas-openusd-viewer/login.png)
_Figure 2: Authentication via KeyCloak_

The repository includes demo data and USD assets: a rack with labeled server units, ready to explore out of the box.

## Why It Matters

Organizations working with digital twins have typically faced a choice between static 3D documentation without live data, or complete metadata databases without visual context. This viewer demonstrates that both can be combined using open standards, without proprietary tooling or cloud lock-in.

The combination of OpenUSD and AAS covers the two major standards emerging for industrial 3D and digital twins respectively. A viewer that speaks both natively opens new possibilities for asset inspectors verifying physical-digital alignment, facility managers querying asset properties in context, and integrators building domain-specific applications on proven infrastructure.

The insights from this prototype feed directly into IDTX Core, IDTX Forge, and production-ready deployment architectures within the broader IDCM project.

---

*This experiment is open source and part of the Immersive Data Center Management project. The insights feed directly into IDTX Core, IDTX Forge, and future production architectures.*

<GitHubButton href="https://github.com/Immersive-Data-Center-Management/samples" label="View Sample on GitHub" />
