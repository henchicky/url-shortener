<h1 align="center">
  <img src="https://github.com/henchicky/url-shortener/blob/main/url-shortener-frontend/public/logo.png" alt="URL Shortnener">
</h1>

<div align="center">
  URL shortener
</div>

### :book: Table of Contents

- [About](#about)
- [Getting Started](#getting-started)
  - [Usage](#usage)
    - [Install Dependencies](#install-dependencies)
    - [Development](#development)
- [Documentation](#documentation)

---

## About

URL shortener frontend written in [ReactJS 18](https://reactjs.org/), bootstrapped with [MUI](https://mui.com/). 

URL shortener backend is written in [.NET Core 6](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).

### Usage
Clone this repo
```
git clone https://github.com/henchicky/url-shortener.git
cd url-shortener-frontend
```

#### Install dependencies
Run the following code to download and install all dependencies and devDependencies listed inside `package.json`. Run this code after installation of any new packages, or upgrading of package versions. 
```
npm install
``` 

#### Development
To run in **development server:**  
(The page will reload if you make edits. You will also see any lint errors in the console :grinning:.)
> View on [http://127.0.0.1:5173/](http://127.0.0.1:5173/)
```
npm start
```

***

## Documentation
Project is organised by the following folders
| Folder          | Description                                           | 
| --------------- | ----------------------------------------------------- |
| `assets`        | Images, Icons, Fonts                                  |
| `pages`         | Folders are split by the sidebar title                | 
| `services`      | [Axios](https://github.com/axios/axios) for API calls |  
