# IDTX Core: The Backend Powering Immersive Digital Twin Collaboration

## Overview

IDTX Core is the central server component of the Immersive Digital Twin Experience (IDTX) Toolbox, providing the infrastructure needed for serving, managing, and collaborating on USD-based digital twin assets. This robust backend enables organizations to host 3D models, manage multi-user sessions, and integrate digital twins across their entire toolchain — from Asset Administration Shells to real-time rendering engines like Godot.

## Core Capabilities

### 1. Asset Distribution and Integration

IDTX Core serves USD files for download and integration into any DCC (Digital Content Creation) tool or application. IDTX-Flow, the Godot plugin, seamlessly integrates with this backend for remote USD imports, while external systems like Asset Administration Shells can reference stable URLs to maintain consistent links to 3D asset data.

### 2. Multi-User Collaboration (In Development)

The server infrastructure supports concurrent authoring and real-time collaboration on USD files — though this capability is currently under active development. When complete, teams will be able to work simultaneously on the same digital twin assets with synchronized updates across all clients.

### 3. Immersive Runtime Environment (In Development)

IDTX Core is designed to serve as the collaboration backbone for immersive, multi-user experiences centered around digital twins, enabling shared VR/AR sessions and synchronized visualization.

## Getting Started

Deploying IDTX Core is straightforward. For production environments, the recommended approach is to use the containerized version with Docker, which handles all dependencies automatically.

**Quick Start:**
1. Clone the IDTX Core repository
2. Build the Docker image using the provided Dockerfile
3. Configure environment variables for your OAuth2/OIDC identity provider
4. Run the container with port 8080 exposed
5. Start uploading and serving USD files

The server will be available at `http://localhost:8080` with a RESTful API ready for integration with your applications.

For development or custom builds, consult the project repository for detailed build instructions using SCons.

## Key Features

### Secure File Operations

- **Authenticated Upload**: USD files (`.usd`, `.usda`, `.usdc`, `.usdz`) can be uploaded securely with full authentication
- **Configurable Size Limits**: Default 500 MiB max upload, customizable for your infrastructure needs

### Thumbnail Generation (Planned)

Preview thumbnails will be automatically generated during USD file uploads, providing quick visual feedback and streamlining asset management workflows. Clients can poll for thumbnail status and retrieve images once generation is complete.

### Comprehensive REST API

Clean, RESTful endpoints enable seamless integration:

| Function | Purpose |
|----------|---------|
| **Authentication** | OAuth2/JWT login via identity provider |
| **Health Check** | Server status monitoring |
| **File Operations** | List, upload, and download USD files |
| **Thumbnails** | Automatic preview generation and retrieval (planned) |
| **Sessions** | Manage multi-user collaboration sessions |

All authenticated endpoints require a valid JWT token obtained through the login endpoint.

### Enterprise-Ready Deployment

IDTX Core is containerized and cloud-ready:

- Minimal Docker image for quick deployment
- Environment variable configuration for flexible setups
- Support for OAuth2 with any OIDC-compliant identity provider
- Scalable architecture for distributed deployments

## Why It Matters

For enterprise digital twin applications, IDTX Core provides:

- **Centralized Asset Hub**: Single source of truth for all 3D digital twin data
- **Enterprise Security**: OAuth2/JWT authentication integrates with existing identity infrastructure
- **Integration Flexibility**: Any tool can consume USD files via standard HTTP endpoints
- **Real-Time Collaboration**: Foundation for team-based digital twin authoring (coming soon)
- **Scalability**: Container-ready deployment supports cloud platforms and enterprise growth

## Current Status and Roadmap

Currently, **Use-Case 1** (USD file serving and download) is fully operational and production-ready. Use-Cases 2 (concurrent authoring) and 3 (immersive multi-user runtime) are actively under development, promising powerful collaboration capabilities for digital twin teams in future releases.

---

*IDTX Core is open source and welcomes contributions, feature requests, and feedback. Learn more at the project repository.*
