1. Explain CSS and how it works?
    CSS is a style language to decribe HTML, make the web page more user firendly and responsive.
    To make it work, by using the tag name, id attributes, or class name, wirte CSS code for specific part of HTML element. 

2. What are new features in CSS3?
    Box Shadow, Opacity, border-radius, and so on.

3. What is `rel` means in a `link` tag?
    
4. Describe all kinds of Selectors in CSS?
    by id name, class name, tag name, or attribute. 

5. How does `@import` work?
    @import is to import a style rules from another style file. 

6. Pseudo-class VS Pseudo-elements?


7. Explain CSS specifity?

8. How many ways to make an elements's position is center to its parent elements? 

9. Give a sample of align-center. (Both block and inline elements)

10. Give a sample of verticle-align-center. (Both block and inline elements)

11. How to define responsive design by using media queries?
    there's min-width or max-width that can be set up as bigger or samller screen, if the width is bigger or smaller than the value that is given, then the web page will used the style inside of the media queries instead of original one. 

12. Explain BEM?

13. What's the difference between `margin` and `padding`?
    margin deal with the space outside the border and padding deal with the space between the border and the conten. 

14. Try to build a triangle using pure CSS.
    .triangle{
        width: 0;
        height: 0;
        border-left: 50px solid transparent;
        border-right: 50px solid transparent;
        border-bottom: 100px solid black;
    }

15. Give a sample of CSS animation.
    .square{
            width: 0;
            height: 0;
            border-top: 50px solid red;
            border-left: 50px solid cyan;
            border-right: 50px solid blue;
            border-bottom: 50px solid black;
            animation: animation 5s infinite linear;
        }
        @-webkit-keyframes animation {
            0%{transform: rotate(0deg);}
            100%{transform: rotate(360deg);} 
    }  


16. How to clear float problem?
    we can put an  empty div right after the last float object: <div style="clear: both;"></div>

17. How to use CSS hacks to solve Broswer Compatibility problem? (Especially IE6)
    @media 
    -webkit-

18. rgba vs rgb in `opacity`

19. Describe the CSS Box Model
    box model include the margin, border, padding, and content. by using CSS, we can create different layout of web pages by giving different value to margin, border, and padding. 

20. Why use `reset.css`?

21. Explain `margin` collapse?

22. `px` VS `pt` VS `em` and `rem` etc.
    they are all font-size, px is fixed size unit
    em is relative font-size to its parent, rem is relative to the root font-size.
    not sure about pt

23. `position: static` VS `position: relative` (hint: DOM flow)
    static is default value of position attribute in the DOM.
    relative elements is relative to its normal position, so that we can shift it to any position.

24. `position: fixed` VS `position: sticky`
    fixed element is fixed to a position and won't move even if the window is scrolling. 
    sticky element depends on the scrolling, it can be realtive if its original position is still in viewpoint, and fixed when the its position is scroll out the viewpoint

---

### Assignment

1. Add styles to `Assignment-Form.html`. (requirements: using `flex` only) (see: dva89.me/contact)

2. The 9 gird. (requirements: using `grid` only) (see: grid-sample.zip)