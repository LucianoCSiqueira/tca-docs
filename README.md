# TCA Docs — Central Documentation & Software Engineering Portal

> **High School Technical Capstone Project (TCA — _Trabalho de Conclusão do Ciclo A_)**  
> **Institution:** Federal Institute of Paraná (IFPR Campus Cascavel)  
> **Domain:** Software Engineering, System Architecture, and Homebrew SNES Development  

[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)
[![IFPR Campus Cascavel](https://img.shields.io/badge/Institution-IFPR%20Campus%20Cascavel-green.svg)](https://cascavel.ifpr.edu.br/)
[![Application: PinkWall](https://img.shields.io/badge/Application-PinkWall-pink.svg)](https://github.com/LucianoCSiqueira/pinkwall)
[![Framework: JavaSNES](https://img.shields.io/badge/Core-JavaSNES-007acc.svg)](https://github.com/BrunoRNS/javasnes)

## Overview & Academic Purpose

**TCA Docs** serves as the central repository for technical documentation, Software Engineering specifications, architectural diagrams, and media assets for the Capstone Project developed at IFPR Campus Cascavel.

The project formalizes the complete software development lifecycle, connecting requirements analysis and system modeling with practical implementation on the Super Nintendo Entertainment System (SNES) platform.

The [academic project portal](https://lucianocsiqueira.github.io/tca-docs/) presents the project documentation, interactive flowcharts, final seminar slides, and video demonstrations. It supports Brazilian Portuguese and British English, automatically choosing an initial language from the browser's locale without sending location data to an external service.

## GitHub Pages Deployment

Every push to `main` automatically publishes the site using the workflow in `.github/workflows/deploy-pages.yml`. To enable deployment, set the repository's **Settings → Pages → Build and deployment → Source** to **GitHub Actions**. The workflow can also be run manually from the Actions tab.

## Integrated Repository Ecosystem

The project consists of three interconnected repositories:

| Repository | Scope & Role | Key Technologies |
| :--- | :--- | :--- |
| **`tca-docs`** _(This repository)_ | **Documentation Hub:** Holds formal engineering artifacts, system flowcharts, academic presentations, and validation recordings. | UML PPTX MP4 |
| **[PinkWall](https://github.com/LucianoCSiqueira/pinkwall)** | **Final Application:** Reference SNES game inspired by Pink Floyd's _The Wall_, demonstrating practical framework usage. | Java, PVSNESLIB, 65816 Assembly |
| **[JavaSNES](https://github.com/BrunoRNS/javasnes)** | **Core Engine / Layer:** Open-source Java library and toolchain developed through continuous academic collaboration for hardware abstraction and SNES compilation. | Java 8+, C/ASM Toolchain, Emulators |

## Repository Structure

The directory organization categorizes engineering artifacts and media files as follows:

```text
tca-docs/
├── fluxograms/     # Process flowcharts, architectural diagrams, and control logic
├── slides/         # Academic defense presentation decks in PPTX and LibreOffice formats
├── videos/         # Recorded demonstrations and video captures embedded in slides
├── .gitignore      # Git exclusion rules
├── LICENSE         # Formal terms of the GNU General Public License v3.0 (GPL-3.0)
└── README.md       # Primary index and navigation portal
```

### Component Details

- **`fluxograms/`**: Contains visual process modeling mapping system execution cycles, game state management, collision logic, and JavaSNES integration.
- **`slides/`**: Stores final slide decks used during formal evaluation defenses at IFPR Campus Cascavel.
- **`videos/`**: Includes recorded emulator test executions, screen captures, and video demonstrations validating software behavior.
- **`LICENSE`**: Open-source licensing under GPL-3.0 terms established from the repository's initial commit.

## Software Engineering Specifications

### Architectural Design

The system utilizes a **Layered Architecture**, isolating application logic (`PinkWall`) from hardware translation and abstraction layers (`JavaSNES` / `PVSNESLIB`).

## Licensing

This project is licensed under the **GNU General Public License v3.0 (GPL-3.0)**. Refer to the [LICENSE](https://www.google.com/search?q=LICENSE) file for complete terms.

## Authors & Academic Credits

- **Luciano C. Siqueira** — Project Lead, PinkWall Developer, and JavaSNES Co-maintainer ([@LucianoCSiqueira](https://github.com/LucianoCSiqueira))
- **Bruno RNS** — Co-author of TCA Artifacts and JavaSNES Lead Maintainer ([@BrunoRNS](https://github.com/BrunoRNS))

- **Institution:** Instituto Federal do Paraná (IFPR) — Campus Cascavel
- **Program:** Technical Course in Information Technology (_Técnico em Informática Integrado ao Ensino Médio_)
