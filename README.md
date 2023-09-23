# Frontend Mentor - Sunnyside agency landing page solution

This is a solution to the [Sunnyside agency landing page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/sunnyside-agency-landing-page-7yVs3B6ef). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Useful resources](#useful-resources)
- [Author](#author)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page

### Screenshot

![](/public/sunnysidescreeshot.jpeg)

### Links

- [Solution URL](https://your-solution-url.com)
- [Live Site URL](https://your-live-site-url.com)

## My process

### Built with

- Semantic HTML5 markup
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

::before psuedo element

```css
/* little mobile menu triangle */

.mobile-nav > .nav-menu::before {
  content: "";
  position: absolute;
  right: 0;
  top: -29px;
  width: 0;
  height: 0;
  border-left: 27px solid transparent;
  border-bottom: 30px solid #fff;
}
```

```css
/* the "bottom border" of the learn more buttons */

.lm-btn::before {
  content: "";
  position: absolute;
  width: 110px;
  height: 8px;
  border-radius: 4px;
  left: -6px;
  bottom: -2px;
  cursor: pointer;
  z-index: -1;
}
```

### Useful resources

- [CSS Grid guide](https://css-tricks.com/snippets/css/complete-guide-grid/#aa-basics-browser-support) - Helped for re-ordering the about sections and learning more about grid

## Author

- Frontend Mentor - [@nataliadgalindo](https://www.frontendmentor.io/profile/nataliadgalindo)
