<h1 align="center">
  <img src="https://github.com/henchicky/url-shortener/blob/master/src/assets/logo.png" alt="URL Shortnener">
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
    - [Production](#production)
    - [Hosting](#hosting)
- [Documentation](#documentation)
- [Roadmap](#roadmap)

---

## About

URL shortener frontend written in [ReactJS 18](https://reactjs.org/), bootstrapped with [MUI](https://mui.com/). 

URL shortener backend is written in [.NET Core 6](https://dotnet.microsoft.com/en-us/download/dotnet/6.0).

<details>
<summary>Additional info</summary>
<br/>
<table>
<tr>
<td>
<!-- Additional Info -->
</td>
</tr>
</table>

### Usage
Clone this repo
```
git clone https://github.com/henchicky/url-shortener.git
```

#### Install dependencies
Run the following code to download and install all dependencies and devDependencies listed inside `package.json`. Run this code after installation of any new packages, or upgrading of package versions. 
```
npm install
``` 

#### Development
To run in **development server:**  
(The page will reload if you make edits. You will also see any lint errors in the console :grinning:.)
> View on [http://localhost:3000](http://localhost:3000)
```
npm start
```

#### Production
To run in **production server:**  
> View on [http://localhost:5000](http://localhost:5000)
```
npm run build
npm run serve
```

#### Hosting
To build for **production** (Vite uses [Rollup](https://rollupjs.org/guide/en/) for production bundling):

```
npm run build
```

***

## Documentation
Project is organised by the following folders
| Folder          | Description                                           | 
| --------------- | ----------------------------------------------------- |
| `assets`        | Images, Icons, Fonts                                  |
| `components`    | Components to be reused                               | 
| `navigation`    | Sidebar, Navbar, Page not found, Home                 | 
| `pages`         | Folders are split by the sidebar title                | 
| `services`      | [Axios](https://github.com/axios/axios) for API calls | 
| `utils`         | Helper / Common methods                               | 
