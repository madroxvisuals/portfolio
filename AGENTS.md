# AGENTS.md

## Project Overview
- This is a Next.js based Landing Page.

## Dependencies Used
- `dotenvx`: For creating encrypted environment Files.
- `dotenvx/next-env`: For loading environment variables in Next.js.
- `axios`: For making HTTP requests.
- `motion`: For animations and transitions.
- `resend`: 3rd party package to send emails.
- `sooner`: Package to show toast messages.

rest package are all default part of a Next.js Project (next, react, react-dom, typescript, etc.)

## Folder Structure
```
src/
├── app/
│   ├── _sections
│   │    ├── About
│   │    │   ├── _components
│   │    │   │   └── SectionIntro.tsx
│   │    │   └── About.tsx
│   │    │
│   │    ├── BrandSnapshots
│   │    │   ├── _components
│   │    │   │   ├── DesktopNodeLabel.tsx
│   │    │   │   ├── DesktopNodeMaker.tsx
│   │    │   │   └── MobileNode.tsx
│   │    │   └── BrandSnapshots.tsx
│   │    │
│   │    ├── FeaturedProjects
│   │    │   ├── _components
│   │    │   │   ├── GalleryHeader.tsx
│   │    │   │   └── ProjectCard.tsx
│   │    │   └── FeaturedProjects.tsx
│   │    │
│   │    ├── Footer
│   │    │   ├── _components
│   │    │   │   ├── Field.tsx
│   │    │   │   └── Magnetic.tsx
│   │    │   └── Footer.tsx
│   │    │
│   │    ├── Testimonials
│   │    │   ├── _components
│   │    │   │   └── Stars.tsx
│   │    │   └── Testimonials.tsx
│   │    │
│   │    ├── Header.tsx
│   │    ├── Hero.tsx
│   │    ├── HowWeWork.tsx
│   │    ├── Marquee.tsx
│   │    ├── Services.tsx
│   │    └── WhyChooseUs.tsx
│   │    
│   ├── api
│   │    └── contact
│   │        └── route.ts
│   │
│   ├── favicon.ico
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
│
├── constants/
│   ├── about.constants.ts
│   ├── app.constants.ts
│   ├── brandSnapshots.constants.ts
│   ├── footer.constants.ts
│   ├── howWeWork.constants.ts
│   ├── testimonials.constants.ts
│   └── whyChooseUs.constants.ts
│
├── types/
│   ├── app.types.ts
│   ├── featuredProjects.types.ts
│   └── testimonials.types.ts
│
├── api.service.ts
└── utils.ts

.env
.env.keys
.gitignore
AGENTS.md
```

## Project Structure Rules
- If any component has many children components, then create a folder named `_components` inside that component's folder and place all the child components inside it.
- The props for a component are always kept within the same component.tsx file.
- If there are too many constants for a component/page, we create a separate *.constants.ts file.
- If there are too many types for a component/page, we create a separate *.types.ts file.

## Import Statements Rules
- Type definitions are always imported with `type` keyword after the import, so during build those modules are not used in js.
- Import statements are ordered in order of the lengths of each statement.