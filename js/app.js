/**
 * 
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 * 
 * Dependencies: None
 * 
 * JS Version: ES2015/ES6
 * 
 * JS Standard: ESlint
 * 
*/

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
*/

/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active


// Creating the button Element and storing the array of button in buttons element.
let buttons =[];
for(let i = 0; i < 4; i++){
  let button= document.createElement('button') ;
  button.textContent = "section" + (i + 1);
  buttons.push(button);
}
console.log('buttons' , buttons)

let ulContainer = document.querySelector('#navbar__list');

// Getting and storing my section tags

const mySection = document.querySelectorAll("section");
console.log('mySection', mySection);

// Add each of the buttons to the ulContainer as a list

buttons.forEach(function (button, index){
  button.addEventListener('click', (event)=>{
    event.preventDefault();
    console.log('mySection[index]', mySection[index]);
    mySection[index].scrollIntoView({
      behavior : "smooth",
    });
  });
    let listItem =document.createElement('li');
    listItem.appendChild(button);
    ulContainer.appendChild(listItem);
    
});

// Adding eventlistener to the window for scroll event

 document.addEventListener('scroll', () => {
  console.log ('mySection inviewport', mySection);
   mySection.forEach(function (section, index) {
       const sectionPosition = section.getBoundingClientRect();
      const isInViewport = sectionPosition.top >= 0 && sectionPosition.left > 0
        && sectionPosition.right <= window.innerWidth && sectionPosition.bottom <= window.innerHeight;
        
      if (isInViewport) {
        section.classList.add('your-active-class');
        buttons[index].classList.add('your-active-class'); // Add the 'active-button' class to the corresponding button
      console.log ('mySection inviewport', mySection);
      console.log('buttons invieport', buttons)
      } else {
         section.classList.remove('your-active-class');
         buttons[index].classList.remove('your-active-class'); // Add the 'active-button' class to the corresponding button
      }
    });
  })


/**
 * Define Global Variables
 * 
*/


/**
 * End Global Variables
 * Start Helper Functions
 * 
*/



/**
 * End Helper Functions
 * Begin Main Functions
 * 
*/

// build the nav


// Add class 'active' to section when near top of viewport


// Scroll to anchor ID using scrollTO event


/**
 * End Main Functions
 * Begin Events
 * 
*/

// Build menu 

// Scroll to section on link click

// Set sections as active





