/*These lines of code are getting the id header-menu from the page and changing its font size to 1.5rem */
let header = document.querySelector(`#header-menu`);
header[`style`][`fontSize`] = `1.5rem`;

/*These lines of code are getting all p tags from the page, and returns an array of strings. With the for loop we are able to go through each index of this array and change these strings for a new ones */
let all_p_tags = document.querySelectorAll(`p`);
for(let counter = 0; counter < all_p_tags.length; counter++){
    all_p_tags[counter][`innerHTML`] = `RANDOM CONTENT`;
}

/*These lines of code gets the element by its id and change the string for a link that goes to google */
let title = document.getElementById(`main-title`);
title[`innerHTML`] = `<a href="https://www.google.com.br/">CLICK HERE</a>`;

/*These lines of code gets the elements by its class name, and returns an array of strings. With the for loop we are able to go through each index of this array, add a tag before the original tag and change the color to red of the original tag */
let p_content = document.getElementsByClassName(`main-content`);
for(let counter = 0; counter < p_content.length; counter++) {
    p_content[counter][`outerHTML`] = `<p>I was add before you</p>` + p_content[counter][`outerHTML`];
    p_content[counter][`style`][`color`] = `red`;
}

/*These lines of code gets an element by its tag name, and returns an array of strings. With the for loop we are able to change the previous tag to a completely new tag*/
let p = document.getElementsByTagName(`p`);
for(let counter = 0; counter < p.length; counter++) {
    p[counter][`outerHTML`] = `<p>Woah, what happened?</p>`
}

/*These lines of code gets an element by its tag name, and returns an array of tags. With the for loop we are able to go through each index and change the style propertie of each one, such as width and margin.*/
let img = document.getElementsByTagName(`img`);
for(let counter = 0; counter < img.length; counter++) {
    img[counter][`style`][`width`] = `50%`
    img[counter][`style`][`margin`] = `50px`
}