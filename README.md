# Frontend Mentor - Intro section with dropdown navigation

![Design preview for the Intro section with dropdown navigation coding challenge](./design/desktop-preview.jpg)

## Welcome! 👋

Thanks for checking out this front-end coding challenge.

[Frontend Mentor](https://www.frontendmentor.io) challenges help you improve your coding skills by building realistic projects.

**To do this challenge, you need a basic understanding of HTML, CSS and JavaScript.**

## The challenge

Your challenge is to build out this intro section with dropdown navigation and get it looking as close to the design as possible.

You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

Your users should be able to:

- View the relevant dropdown menus on desktop and mobile when interacting with the navigation links
- View the optimal layout for the content depending on their device's screen size
- See hover states for all interactive elements on the page

This is a solution to the [Intro section with dropdown navigation challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/intro-section-with-dropdown-navigation-ryaPetHE5). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [The challenge](#the-challenge)
- [Screenshot](#screenshot)
- [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
- [Author](#author)

### Screenshot

![Desktop](https://drive.google.com/uc?export=view&id=1LcA8_aU5xhn7qF3KxLxTfHKDsVFzxXaL)
![Mobile](https://drive.google.com/uc?export=view&id=1bxtIvV1tW8Pg3o9iQLLLkuHlC8laEqWz)

### Links

- Solution URL: [Solution](https://github.com/Demarcus11/Intro-Section-With-Dropdown-Navigation.git)
- Live Site URL: [Live](https://demarcus11.github.io/Intro-Section-With-Dropdown-Navigation/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- [React](https://reactjs.org/) - JS library

### What I learned

Use this section to recap over some of your major learnings while working through this project. Writing these out and providing code samples of areas you want to highlight is a great way to reinforce your own knowledge.

To see how you can add code snippets, see below:

Slide animation for nav

```css
.primary-nav,
.secondary-nav {
  --gap: var(--size-300);

  position: fixed;
  z-index: 1000;
  inset: 0 0 0 30%;

  flex-direction: column;
  padding: 5rem var(--size-600);
  align-items: flex-start;
  background-color: var(--clr-nuetral-200);

  transform: translateX(100%);
  transition: transform 0.2s ease-in-out;
}

.primary-nav[data-visible="true"] {
  transform: translateX(0%);
}
```

Using object arrays to hold link data

```js
const featuresLinks = [
  {
    icon: "../../images/icon-todo.svg",
    url: "#",
    title: "Todo List",
  },
  {
    icon: "../../images/icon-calendar.svg",
    url: "#",
    title: "Calendar",
  },
  {
    icon: "../../images/icon-reminders.svg",
    url: "#",
    title: "Reminders",
  },
  {
    icon: "../../images/icon-planning.svg",
    url: "#",
    title: "Planning",
  },
];

const companyLinks = [
  {
    url: "#",
    title: "History",
  },
  {
    url: "#",
    title: "Our Team",
  },
  {
    url: "#",
    title: "Blog",
  },
];
```

## Author

- Frontend Mentor - [@Demarcus11](https://www.frontendmentor.io/profile/Demarcus11)
