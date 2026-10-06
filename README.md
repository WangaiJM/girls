# Petal Girls School

**With God We Triumph**

Petal Girls School provides education and opportunities for girls in the community. Its work includes Petal Girls Senior School and Petal Vocational Training Centre. We aim to create a safe, supportive environment where learners can build knowledge, confidence, practical skills, and opportunities for the future.

## Our Mission

To provide a conducive environment for girls and offer high-quality, holistic education that enables learners to become responsible and reliable members of their families and communities.

## Our Vision

To provide high-quality, holistic education and learning opportunities that help girls reach their potential.

## Our Objectives

We work to expand girls’ access to education, support their continued learning, and help them develop the skills and self-reliance to contribute to their communities.

## Learning at PGSS

The Senior School follows the Competency-Based Curriculum (CBC). Learning engages students through practical tasks, creativity, contemporary teaching methods, and strong values. Programs include core learning areas, STEM, talent development, leadership, and life skills. Vocational training provides additional opportunities to develop practical skills.

## Supporting Our Students

Donor support helps the school provide learning opportunities and assistance to students. We believe a strong partnership between parents and the school community is essential, and encourage families to engage in school life and support learners’ progress.

## About This Website

This responsive school website is built with React, TypeScript, Vite, and SCSS. It includes information about the school, admissions, programmes, facilities, donations, contacts, and a photo gallery.

### Run locally

Install dependencies, then start the Vite development server:

```sh
npm install
npm run dev
```

Check the production build and lint the project with:

```sh
npm run build
npm run lint
```

### Contact form

The Contact page validates entries in the browser and sends valid submissions to Formspree. Its endpoint is configured locally using the `VITE_FORMSPREE_ENDPOINT` environment variable. Keep local configuration out of Git, enable Formspree’s spam protection, and never add passwords, private credentials, student records, or other confidential information to this public repository.

### Deploy to Host Africa shared hosting

Run `npm run build`, then upload the contents of the generated `dist` directory to the hosting account’s website document root. Vite reads `VITE_FORMSPREE_ENDPOINT` at build time, so configure the deployment environment before creating the production build. Note that client-side form endpoints are visible in the published site and must not contain private credentials.

> **Image assets:** Large school photos under `src/assets/images/` are excluded by `.gitignore` to keep Git pushes small. Keep the local assets available when building, or arrange separate image hosting before building from a fresh clone.
