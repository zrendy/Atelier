<a name="readme-top"></a>
<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/zrendy/Atelier">
    <img src="src/images/logo.png" alt="Logo" width="170" height="150">
  </a>

<h3 align="center">Atelier Products Full Stack Application</h3>

  <p align="center">
    This is a fleshed-out fullstack product information website application built based off an express server backend and a Reactjs frontend. Styles were written in sass and compiled. The express server directs incoming react client requests and appends a secure github token to make a request to an external API where product information resides.
    <br />
    <br />
    <br />
    <a href="#demo">View Demo</a>
    ·
    <a href="https://github.com/zrendy/Atelier/issues">Report Bug</a>
    ·
    <a href="https://github.com/zrendy/Atelier/issues">Request Feature</a>
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#usage">Usage</a></li>
    <li><a href="#roadmap">Roadmap</a></li>
    <li><a href="#contributing">Contributing</a></li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
    <li><a href="#acknowledgments">Acknowledgments</a></li>
  </ol>
</details>



<!-- ABOUT THE PROJECT -->
## About The Project
**Home Page**\
[![Home Page][product-screenshot1]](https://res.cloudinary.com/dvijvlkad/image/upload/v1672698205/Screenshot_2023-01-02_at_5.21.01_PM_zrqd1s.png)

**Related Products**\
[![Related][product-screenshot2]](https://res.cloudinary.com/dvijvlkad/image/upload/v1672698204/Screenshot_2023-01-02_at_5.22.18_PM_veiaiw.png)

**Reviews**\
[![Reviews][product-screenshot3]](https://res.cloudinary.com/dvijvlkad/image/upload/v1672698203/Screenshot_2023-01-02_at_5.22.30_PM_jiiblm.png)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



### Built With

* [![Node][Node.js]][Node-url]
* [![React][React.js]][React-url]
* [![SASS][SASS-img]][SASS-url]
* [![Express][Express.js]][Express-url]
* [![JEST][JEST-img]][JEST-url]


<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* node
[nvm](https://github.com/nvm-sh/nvm)

### Installation

1. Get a Personal Access Token at [Github](https://github.com/settings/tokens)
    * ensure both "read:org" and "user" access rights are selected.
   
2. Clone or fork the repo
   ```sh
   git clone https://github.com/zrendy/Atelier.git
   ```
3. Install NPM packages
   ```sh
   npm install
   ```
4. Build the application, a prebuilt "build" is included, this step could be **omitted**.
   ```sh
   npm run build
   ```
5. Create a `.env` file within the project directory, add `PORT` and `AUTH` environment variables
   ```
   PORT=3000
   AUTH=[YOUR GITHUB TOKEN HERE]
   ```
4. Start the server
   ```sh
   npm run server
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>


<a name="demo"></a>
## Demo

https://user-images.githubusercontent.com/104995933/210283684-7586a448-1f52-473f-8837-45f58b467ee7.mov

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

**Reviews Features**

- [ ] Render reviews based off API data. For each product, a breakdown and a subset of reviews is rendered. 
  *Format of API data*
  ![reviewsdata][reviews-data]
  ![breakdowndata][breakdown-data]
- [ ] Sorting based on number of stars and sorting based on criteria (Relevancy, Newest, Most Helpful)


https://user-images.githubusercontent.com/104995933/210285171-0413574c-d9d1-42c8-9498-fa45ee2c1228.mov

- [ ] Modals, open and close full-size images rendered within reviews.


https://user-images.githubusercontent.com/104995933/210285411-70944afd-98cb-40d0-bdd0-028c0c0fa48a.mov



See the [open issues](https://github.com/zrendy/Atelier/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


<!-- CONTACT -->
## Contact

Rendy - [Github](https://github.com/zrendy) <a href="mailto:zrendy@gmail.com">Email</a>

Project Link: [https://github.com/zrendy/Atelier](https://github.com/zrendy/Atelier)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* [oscardong0813](https://github.com/oscardong0813)
* [shethinksnyc](https://github.com/shethinksnyc)
* [young-min-ko](https://github.com/young-min-ko)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/zrendy/Atelier.svg?style=for-the-badge
[contributors-url]: https://github.com/zrendy/Atelier/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/zrendy/Atelier.svg?style=for-the-badge
[forks-url]: https://github.com/zrendy/Atelier/network/members
[stars-shield]: https://img.shields.io/github/stars/zrendy/Atelier.svg?style=for-the-badge
[stars-url]: https://github.com/zrendy/Atelier/stargazers
[issues-shield]: https://img.shields.io/github/issues/zrendy/Atelier.svg?style=for-the-badge
[issues-url]: https://github.com/zrendy/Atelier/issues
[license-shield]: https://img.shields.io/github/license/zrendy/Atelier.svg?style=for-the-badge
[license-url]: https://github.com/zrendy/Atelier/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/zrendy
[product-screenshot1]: src/images/website1.png
[product-screenshot2]: src/images/website2.png
[product-screenshot3]: src/images/website3.png
[reviews-data]: src/images/reviews-apiData.png
[breakdown-data]: src/images/reviews-breakdownData.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com
[Node.js]: https://img.shields.io/badge/Node.js-43853D?style=for-the-badge&logo=node.js&logoColor=white
[Node-url]: https://nodejs.org/en/
[SASS-img]: https://img.shields.io/badge/Sass-CC6699?style=for-the-badge&logo=sass&logoColor=white
[SASS-url]: https://sass-lang.com/
[JEST-img]: https://img.shields.io/badge/Jest-323330?style=for-the-badge&logo=Jest&logoColor=white
[JEST-url]: https://jestjs.io/
