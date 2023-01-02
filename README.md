<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/zrendy/Atelier">
    <img src="src/images/logo.png" alt="Logo" width="160" height="150">
  </a>

<h3 align="center">Atelier Products Full Stack Application</h3>

  <p align="center">
    This is a fleshed-out fullstack product information website application built based off an express server backend and a Reactjs frontend. Styles were written in sass and compiled. The express server directs incoming react client requests and appends a secure github token to make a request to an external API where product information resides.
    <br />
    <br />
    <br />
    <a href="https://github.com/zrendy/Atelier">View Demo</a>
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


* [![React][React.js]][React-url]
* [![Express][Express.js]][Express-url]
* [![JQuery][JQuery.com]][JQuery-url]

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- GETTING STARTED -->
## Getting Started

### Prerequisites
* node
[nvm](https://github.com/nvm-sh/nvm)

### Installation

1. Get a Personal Access Token at [Github](https://github.com/settings/tokens)
    *ensure both "read:org" and "user" access rights are selected.
   
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
   npm build
   ```
5. Create a `.env` file within the project directory, add `PORT` and `AUTH` environment variables
   ```
   PORT=3000
   AUTH=[YOUR GITHUB TOKEN HERE]
   ```
4. Start the server
   ```sh
   npm server
   ```
<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- USAGE EXAMPLES -->
## Usage

Use this space to show useful examples of how a project can be used. Additional screenshots, code examples and demos work well in this space. You may also link to more resources.

_For more examples, please refer to the [Documentation](https://example.com)_

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ROADMAP -->
## Roadmap

- [ ] Feature 1
- [ ] Feature 2
- [ ] Feature 3
    - [ ] Nested Feature

See the [open issues](https://github.com/zrendy/Atelier/issues) for a full list of proposed features (and known issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTRIBUTING -->
## Contributing

Contributions are what make the open source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

If you have a suggestion that would make this better, please fork the repo and create a pull request. You can also simply open an issue with the tag "enhancement".
Don't forget to give the project a star! Thanks again!

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE.txt` for more information.

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- CONTACT -->
## Contact

Your Name - [@twitter_handle](https://twitter.com/twitter_handle) - zrendy@gmail.com

Project Link: [https://github.com/zrendy/Atelier](https://github.com/zrendy/Atelier)

<p align="right">(<a href="#readme-top">back to top</a>)</p>



<!-- ACKNOWLEDGMENTS -->
## Acknowledgments

* []()
* []()
* []()

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
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Express.js]: https://img.shields.io/badge/Express.js-404D59?style=for-the-badge
[Express-url]: https://expressjs.com