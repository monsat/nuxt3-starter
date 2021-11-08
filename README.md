# Nuxt 3 Minimal Starter with VueUse and WindiCSS

Documents

* [Nuxt 3](https://v3.nuxtjs.org)
* [VueUse](https://vueuse.org/)
* [Windi CSS](https://windicss.org/)
* [Pinia](https://pinia.esm.dev/) (switch `pinia` branch)

## Clone

```bash
git remote rename origin template  # origin → template
gh repo create                     # Create your remote repository by GitHub CLI
git push -u origin main            # Push to your repository
```

`template:main` : This repository  
`origin:main` : Your remote repository

> `gh` command by [GitHub CLI](https://cli.github.com/)  
> or `git remote add origin ~~~`

## Setup

Make sure to install the dependencies

```bash
yarn install
```

## Development

Start the development server on http://localhost:3000

```bash
yarn dev
```

## Production

Build the application for production:

```bash
yarn build
```

Checkout the [deployment documentation](https://v3.nuxtjs.org/docs/deployment).