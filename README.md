# 🍎 NewsWeb-V1

A web app for a news paper.

## 🍐 Table of Contents

- [Project Title](#project-title)
  - [Table of Contents](#table-of-contents)
  - [Introduction](#introduction)
  - [Features](#features)
  - [Getting Started](#getting-started)
    - [Prerequisites](#prerequisites)
    - [Installation](#installation)
  - [Contributing](#contributing)
  - [License](#license)

## 🥦 Introduction

A modern news site, designed for use by a small-to-medium newspaper. This app is an exercise in content management and display, including categorisation and a search function. This project is built using NextJS (App router) and a content integration with Contentful to source news articles.

## 🫑 Features

- Lead story on front page 
- Latest stories on front page
- Dedicated topic filters
- Search (based on article title)
- Dedicated page per article
- Full content management via Contentful (new articles take a non-technical person seconds to add)

## 🥨 Getting Started

This project is designed to run within a DevContainer, hence running it with VS Code + the devcontainers extenstion is advised.

1. Clone the repo 
2. Optional: reopen the project in the container (this will build and run it the first time)
3. Install deps ( I use yarn, you could also use npm if you want. )
4. Add Contentful configuration (via .env) 
5. Run dev script (yarn dev/npm run dev) 

### 🍌 Prerequisites
 
- Docker
- VSCode + devcontainers extenstion OR manually install the packaged deps (Node, yarn/npm, etc). 
- Web Browser
- A brain

In addition, you will need to add the following config via a .env file: 

CONTENTFUL_ENDPOINT = {GraphQL Server Endpoint}
CONTENTFUL_SPACE_ID = {SpaceID}
CONTENTFUL_ENVIRONMENT = {Environment e.g. master}
CONTENTFUL_ACCESS_TOKEN = {Your Access Token}

NOTE: Obviously the space you connect it to needs to provide to right content in the right typings. Practically, the only space that works is my own. If you actually want to run this, contact me and I can share this info with you. 

This approach has been chosen to allow whitelabelling of the product in future - i.e. two content spaces serving different content to two versions of the web app. 

## 🍍 Contributing 

I mean, if you really want to open a PR, you can. I might even approve it! 

## 🫐 License

NewsWeb-V1 © 2023 by sslukess is licensed under CC BY-NC-ND 4.0 
