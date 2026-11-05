---
title: "AAS + AR On-site Check: Connecting Technicians and Digital Twins"
---

# AAS + AR On-site Check: Connecting Technicians and Digital Twins

**IDCM Research Team · November 2026**

## Overview

This experiment explores how augmented reality (AR) and an Asset Administration Shell (AAS) can support a technician standing in front of real data center hardware. An Android app identifies an unreachable server from its operational data, shows its position in a 3D rack, and uses QR codes to confirm the physical component. The technician then inspects the server and sends a short report back into its digital twin. Built with Godot, ARCore, and [IDTX Flow](/documentation/pilots/idtx-flow), the sample connects live asset data, OpenUSD models, and on-site inspection in one workflow. Its AR interface brings camera-based identification and digital asset information together on the technician's phone.

<img src="/samples/aas-on-site-check/task.png" alt="Inspection task with DemoServer02 highlighted in the 3D rack" width="300" style="max-width: 100%; height: auto;" />

_Figure 1: The task screen directs the technician to DemoServer02 at Rack 01, rack unit U3, and highlights the component in the 3D rack._

## What Problem Does It Solve?

A monitoring system can identify a server that needs attention, but a technician still has to locate the right rack, distinguish between similar components, and record what they find. Moving between asset lists, physical labels, and separate reporting tools makes that process harder.

This experiment uses the AAS as the shared source for component identity, rack position, operational status, and the latest inspection report. A QR code containing the component's AAS shell identifier links the physical hardware directly to its digital record.

## Key Findings

The sample demonstrates a complete read-and-write workflow around the AAS. The inspection task is derived from operational data, the 3D rack layout comes from its bill of material, and the report is stored on the inspected component. No separate task object is needed for this demonstration.

Scanning the wrong component produces guidance to the target server's slot; scanning the correct one opens the inspection. Role-based access also applies to the workflow: Eclipse BaSyx allows the technician to read asset data while restricting writes to the inspection report.

The scenario uses simulated operational values and a deliberately unreachable server. Submitting a report updates the latest inspection, while the server remains unreachable: the technician's observation records a check without resolving the simulated fault.

## What We Built

### A Task Derived from Live Asset Data

After login through Keycloak, the app reads the components of DemoRack01 and their `OperationalData`. The demo simulator keeps DemoServer02 unreachable, prompting a task to check it at Rack 01, rack unit U3. The task screen also shows the previous inspection report when one is available.

::: info Demo scope and production architecture
Reading the demo rack's component status directly on the Android device keeps this experiment self-contained. In a production deployment, a backend monitoring service would detect a fault and issue an event or service task. The mobile app would respond to that notification and load the affected asset's details, rather than scan all racks to check their health. This sample focuses on the subsequent on-site identification, inspection, and reporting workflow.
:::

### A 3D Rack Built from the AAS

The rack's `HierarchicalStructures` submodel supplies its components and their slot positions. IDTX Flow loads the OpenUSD models at runtime from URLs in each asset's `Models3D` submodel. The task screen displays the assembled rack with the target server marked, giving the technician visual context before approaching the hardware.

### QR-Guided Component Identification with AR

The technician scans a component's QR code to confirm its identity. If they scan DemoServer01 at rack unit U2, the app explains that DemoServer02 is one rack unit above. The correct code opens the inspection screen.

<img src="/samples/aas-on-site-check/scan-wrong-part.png" alt="QR scan identifying DemoServer01 and directing the technician one rack unit above" width="300" style="max-width: 100%; height: auto;" />

_Figure 2: Scanning the wrong component displays its identity and guidance to the target server._

### Inspection Reports in the Digital Twin

The inspection screen combines the camera image with nameplate information and operational values polled every three seconds. The technician selects a visual finding and can take a photo.

<img src="/samples/aas-on-site-check/inspection.png" alt="Desktop inspection preview with server details, a finding selector, and report controls" width="300" style="max-width: 100%; height: auto;" />

_Figure 3: The inspection screen shows AAS data and reporting controls. This desktop preview uses a placeholder where the Android app displays the camera view._

Sending the report writes the timestamp, technician name, finding, and whether a photo was taken into `LastInspection`; the photo itself is not uploaded. The next person opening the app can see that report.

<img src="/samples/aas-on-site-check/task-with-report.png" alt="Task screen displaying the latest inspection report for DemoServer02" width="300" style="max-width: 100%; height: auto;" />

_Figure 4: After submission, the task screen shows the latest report with its timestamp, technician, finding, and photo status._

## Getting Started

The documented setup uses Windows, Godot 4.7.2 or later, and Docker Compose. Camera scanning requires an ARCore-compatible Android phone with arm64 support.

The sample includes a local backend with authentication, AAS records, 3D assets, and simulated operational data, plus QR labels for trying the workflow without a real rack. A desktop mode lets you explore the flow by entering a QR identifier in a text field. For camera scanning, the phone needs access to the backend through USB or Wi-Fi.

Follow the [setup guide in the experiment README](https://github.com/Immersive-Data-Center-Management/samples/tree/experiments_2-3/Experiment_2#requirements-and-setup) for installation, demo login, and device connection instructions. This is a demonstration setup, not intended for production use; its AAS data and inspection reports are temporary.

## Why It Matters

Digital twins become more useful when technicians can consult and update them where the equipment is installed. Augmented reality provides the camera-based context for this interaction, while AAS records and OpenUSD models supply asset identity, live values, and the 3D rack view. Together, they connect the physical inspection with its digital record.

It extends the [AAS + OpenUSD Viewer](/documentation/samples/aas-openusd-viewer) approach into a physical maintenance scenario: locating an asset, confirming its identity, and returning an observation to its digital twin. The result provides a concrete starting point for exploring mobile service workflows within the Immersive Data Center Management project.

---

_This experiment is open source and part of the Immersive Data Center Management project._

<GitHubButton href="https://github.com/Immersive-Data-Center-Management/samples/tree/experiments_2-3/Experiment_2" label="View Sample on GitHub" />
