### Frequently Asked Questions

1. What is HTML stands for?
    HyperText Markup Language

2. What will happened if you don't add DOCTYPE for HTML5
    DOCTYPE is used to tell the brower to use HTML5 for this page. if the DOCTYPE is misssing, some brower might not recognize some of the elements or tags of HTML5.

3. What is the difference between HTML elements and tags?
    HTML tags is basic structure of HTML, such as <div></div>, <p></p>, and <h1></h1> are tags.
    HTML elements include open and close tags with the content in the tags, such as <p>content<p> is HTML element.  

4. What are attributes and how do you use them?
    attributes give additional information about the HTML elements. such as href attribute for <a>link</a> element, src attribute for <img>images</img> element, or style attribute for <p></p>, <h1></h1>, or<div></div> elements.

5. What is the difference between attributions and properties?
    
6. When should you use comments?
    when you explain a long code, commonts make it easy to edit

7. What’s the difference between a block-level element and an inline element?
    <div>content</div> is a block-level element which starts a on a new line each time,
    <span>content</span> is a inline element which doesn't start on a new line. 

8. How is an HTML document structured? (hint: What is DOCTYPE tag; HTML tag; Head tag; Body tag)
    HTML document structured with DOCTYPE which tell the brower which version we are going to use, <HTML></HTML> tag just tell the brower that this is an HTML document, and all the element are in this tag. In the HTML tag, there are two main sections which is <head></head> and <body></body>. these three are the basics to build a web page. <title></title> and <style></style> could be written in the <head></head> tag; the main content and <script></script> could be written in the <body></body> tag

9. What do you know about HTML5's new features?
    there are new tags, such as <video>, <audio>, <article>, <nav>, <footer> and so on.

 What browsers support HTML5? (hint: Explain Browser Compatibility)
    browser compatibility is the way that makes a web page looks different in different brower. That's because different brower reads code differently. some of brower can only read old version of code, but now, most of popular brower with newest version support HTML5.

10. What are self-closing tags / void tags / empty elements / singleton tags?
    self-closeing tags don't need a cloing tag to complete the element, a some of tags like <a></a> can be written as <a /> which is self-closing tags.

11. What's the difference between `<div>` and `<p>`? (hint: coding standards)
    <div> is a block-level element which can be used to decribe a container,
    <p> stand for a paragraph which is used to decribe a paragraph in most of time. 

12. How do you apply CSS styles to a web page?
    there are three way to apply CSS styles. one is using <style></style> tag within <head></head> tag and write all the CSS code in the <style> tag.
    second is to write a file that contain all the CSS style code, then link it to the .html file.
    third is add style attributes in the HTML element.

13. How do you apply JavaScript to a web page?
    similiar to apply CSS styles. one way to do it is that use <script></script> tag in the <body></body> tag and write all the js in the <script> tag.
    another way is to create a file that contian all the JS code in it, then link it to .html file.

14. What you can do with a `<meta>` tag?

15. What is a boolean attribution of an `<input>` tag?

16. What you can do with an `<a>` tag?
    <a> can be used to link another web page or another section in the same page by "id" attribute.

17. Cookies VS SessionStorage VS LocalStorage?

18. What elements are abondoned in HTML5?

19. What does `manifest` means in a `<html>` tag?


---

### Assignments

1. Can you give a sample with `<Table>`? (Show as much as you can)
    <Table>
    <tr>
        <th>table header</th>
        <th>table header</th>
    </tr>
        <td>table data</td>
        <td>table data</td>
    <tr>
    </tr>
        <td>table data</td>
        <td>table data</td>
    <tr>
    </tr>
    </Table>

2. Can you give a sample with `<Form>`? (Show as much as you can)
    <form>
    <label for="firstname">First name:</label>
    <input type="text" id="firstname" name="firstname" placeholder="First Name"><br>
    <label for="lastname">Last name:</label>
    <input type="text" id="lastname" name="lastname" placeholder="Last Name"><br>
    <input type="submit" value="Submit">
    </form>
