class Dropdown {
  constructor(element) {
    
    // Assign this.element to the dropdown element
    this.element = element;
    
    // Get the element with the ".dropdown-button" class found in the dropdown element (look at the HTML for context)
    this.button = this.element.querySelector('.dropdown-button');
    
    
    // assign the reference to the ".dropdown-content" class found in the dropdown element
    this.content = this.element.querySelector('.dropdown-content');
    
    // Add a click handler to the button reference and call the toggleContent method.
    this.button.addEventListener('click', (event) => {
      this.toggleContent();
    })
  }

  toggleContent() {
    // Toggle the ".dropdown-hidden" class off and on
    this.content.classList.toggle('dropdown-hidden');

      // Simple slide down animation
      TweenMax.from('.dropdown-content', 0.7, {top: -10, zIndex:-5});
      TweenMax.to('.dropdown-content', 0.7, {top:70});

      // text fade in animation
      let linksText = document.querySelectorAll('.dropdown-content a');

      linksText.forEach(linkText => {
        TweenMax.from(linkText, 1.2, {autoAlpha: 0});
        TweenMax.to(linkText, 1.2, {autoAlpha: 1});
      })
    
  }
}


// Nothing to do here, just study what the code is doing and move on to the Dropdown class
let dropdowns = document.querySelectorAll('.dropdown').forEach( dropdown => new Dropdown(dropdown));

// animation for drop down button
let dropdownButton = document.querySelector('.dropdown-button');
dropdownButton.addEventListener('mouseenter', () => {
  TweenMax.to('.dropdown-button', 0.3, {backgroundColor: '#be2530'});
});
dropdownButton.addEventListener('mouseleave', () => {
  TweenMax.to('.dropdown-button', 0.3, {backgroundColor: '#931d25'});
});
