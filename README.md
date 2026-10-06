# Petal Girls Senior School

**With God We Triumph**

Petal Girls Senior School (PGSS) is a girls’ senior school serving learners in Grades 10, 11, and 12. We aim to provide girls in need with a safe, supportive environment and a high-quality, holistic education that helps them grow into confident, responsible members of their families and communities.

## Our Mission

To provide a conducive environment for girls in need and offer high-quality, holistic education that enables students to become responsible and reliable members of their families and communities.

## Our Vision

To become a leading girls’ school in providing high-quality, holistic education for girls in need.

## Our Objectives

We work to increase girls’ access to, retention in, and completion of high school, enabling them to continue to colleges and universities. By supporting students’ education and self-reliance, we aim to contribute to community development and help reduce poverty.

## Learning at PGSS

PGSS has adopted the Competency-Based Curriculum (CBC). Learning is designed to engage students through practical tasks, creativity, contemporary teaching methods, and strong values. Our programs include core learning areas, STEM, talent development, leadership, and life skills.

## Supporting Our Students

Through donor support, the school offers a limited number of bursaries to girls from disadvantaged homes. Awards are discretionary and may cover between 25% and, in exceptional cases, 75% of day or boarding fees. A payment plan may also be available for fees not covered by a bursary. Applicants provide details of their circumstances and attend an interview at the school.

We believe that a strong partnership between parents and the school community is essential. Academic Clinics, collaborative decision-making, and the Annual General Meeting provide opportunities for families to engage in school life and support students’ progress.

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

The Contact page validates entries in the browser and sends valid submissions to Formspree. The local ignored `.env.local` file should contain the form endpoint:

```env
VITE_FORMSPREE_ENDPOINT=https://formspree.io/f/xvkzgwdl
```

In Formspree, configure and verify **jahkeyjohn@gmail.com** as the notification recipient. Check the Formspree Spam section and Gmail’s Spam folder if test notifications are filtered. Never put email passwords or private credentials in the frontend. Since the endpoint is part of a public client-side site, enable Formspree’s spam protection.

### Deploy to Host Africa shared hosting

Run `npm run build`, then upload the contents of the generated `dist` directory to the hosting account’s website document root. Vite embeds `VITE_FORMSPREE_ENDPOINT` at build time, so set the correct environment value before building the version you deploy.

> **Image assets:** Large school photos under `src/assets/images/` are excluded by `.gitignore` to keep Git pushes small. Keep the local assets available when building, or arrange separate image hosting before building from a fresh clone.
