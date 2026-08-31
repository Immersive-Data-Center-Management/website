# Digital Twin & AAS

## From Fragmented Layers to a Unified Data Foundation

Modern data centers consist of three distinct layers — Facility,
Hardware, and Virtualization — each managed by different teams
with different tools, terminologies, and information systems. The
Digital Twin and the Asset Administration Shell (AAS) address
this fragmentation at the data level: they provide a unified,
semantically consistent, and machine-interpretable representation
of all assets across all three layers.

This is not a new dashboard or an additional monitoring tool.
It is a shared information foundation that connects what was
previously separate and makes it accessible to humans and
systems alike.


## The Digital Twin — A Living Representation Across All Layers

A **Digital Twin** is a comprehensive, structured digital
representation of a physical asset across its entire lifecycle —
from procurement and installation through operation, maintenance,
and eventual decommissioning.

Unlike simple 3D models or isolated monitoring systems, a Digital
Twin integrates all relevant aspects of an asset: its properties,
current states, behaviors, relationships to other assets, and
contextual information. In IDCM, this spans all three data center
layers: a cooling unit in the Facility layer, a server rack in
the Hardware layer, and a virtual workload in the Virtualization
layer are all represented within the same unified model —
connected through their real operational dependencies.

The Digital Twin is not a monolithic data store. It is a
federated and semantic information object that unifies diverse
data sources without requiring all information to be stored in
one place. Its purpose is to provide clarity, interoperability,
and consistency — enabling different systems, tools, and teams
to work with a shared understanding of the assets they operate.


## The Asset Administration Shell — The Semantic Backbone

The **Asset Administration Shell (AAS)** provides the structural
and semantic foundation that makes the Digital Twin reliable and
interoperable.

The AAS organizes asset information into standardized submodels —
each grouping the properties, states, and services relevant to a
specific use case. In a data center context, this means: a
cooling unit's submodel contains temperature thresholds, power
consumption data, and maintenance intervals; a server rack's
submodel links to load metrics and hardware health states; a
virtual workload's submodel references the physical resources it
depends on. Each submodel is machine-readable, uniquely
identified, and semantically consistent — regardless of which
vendor or system originally produced the data.

Rather than replacing existing tools or databases, the AAS
connects them. It maintains trustworthy references to
authoritative data sources, ensuring that every value, state, or
property shown in the Digital Twin is accurate, up-to-date, and
contextually correct.

![Digital Twin and AAS](/overview/DT_and_AAS.png)


## Our Project — DT and AAS Across the Three Data Center Layers

In IDCM, the Digital Twin and the AAS form a unified system
built specifically around the three-pillar structure of the data
center:

> - The **Digital Twin** represents all three layers — Facility,
>   Hardware, and Virtualization — as a single, lifecycle-wide
>   model, making cross-layer dependencies visible and traceable.
> - The **AAS** provides the structural and semantic backbone:
>   standardized submodels, federated references, and consistent
>   identifiers that ensure data from different teams, vendors,
>   and systems can be integrated without ambiguity.

Together, they create an interoperable, future-proof foundation
for monitoring, decision-making, and automation across the entire
data center stack.


## XR as the Human Interface to the Digital Twin

The Digital Twin and AAS provide the data foundation — but data
alone does not solve the challenge of cross-layer understanding.
**Extended Reality (XR)** is the interaction layer that makes
this foundation accessible to operators and teams.

Through VR, AR, and MR environments, operators can explore the
Digital Twin spatially: navigate between Facility, Hardware, and
Virtualization layers, observe live asset states, and understand
how conditions in one layer affect the others — without needing
to access multiple disconnected tools. XR turns the structured
data of the AAS into a coherent, human-navigable experience.



## Summary

The **Digital Twin** provides a lifecycle-wide representation of
all data center assets — across Facility, Hardware, and
Virtualization. The **AAS** ensures that all information is
structured, semantically correct, vendor-neutral, and connected
to authoritative data sources. Together, they form the unified
data foundation of IDCM — enabling consistent decision-making,
cross-layer interoperability, and immersive interaction through
XR. This turns a previously fragmented information landscape into
a coherent, reliable, and future-ready operational foundation.
