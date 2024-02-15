# Frontend Mentor - FAQ accordion solution

![](./assets/design/desktop-preview.jpg)

This is a solution to the [FAQ accordion challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-wyfFdeBwBz).

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)


## Overview

### The challenge

Users should be able to:

- Hide/Show the answer to a question when the question is clicked
- Navigate the questions and hide/show answers using keyboard navigation alone
- View the optimal layout for the interface depending on their device's screen size
- See hover and focus states for all interactive elements on the page

### Links

- Frontend Mentor Solution URL: [https://www.frontendmentor.io/solutions/faq-accordion-using-javascript-cQ5hwFsGTE](https://www.frontendmentor.io/solutions/faq-accordion-using-javascript-cQ5hwFsGTE)
- Live Site URL: [https://natamellado.github.io/faq-accordion/](https://natamellado.github.io/faq-accordion/)

## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- JavaScript
- Mobile first approach

### What I learned

* This code is a function called toggleFaq() that controls the behavior of a FAQ (Frequently Asked Questions) section.

```js
function toggleFaq() {
    // Toggles the 'open' class on the faqContainer element
    faqContainer.classList.toggle('open');
    
    // Checks if the 'open' class is present on faqContainer
    const isOpen = faqContainer.classList.contains('open');
    
    // Sets the height of faqAnswer element based on isOpen state
    faqAnswer.style.height = isOpen ? `${faqAnswer.scrollHeight}px` : '0px';
    
    // Changes the source of the arrow image based on isOpen state
    faqContainer.querySelector('.arrow').src = isOpen ? './assets/images/icon-minus.svg' : './assets/images/icon-plus.svg';
    
    // Calls removeOpen() function with the index variable
    removeOpen(index);
}
```



