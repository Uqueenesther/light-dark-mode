const toggleSwitch = document.querySelector('input[type="checkbox"]');
const nav = document.getElementById('nav');
const toggleIcon = document.getElementById('toggle-icon');
const image1 = document.getElementById('image1');
const image2 = document.getElementById('image2');
const image3 = document.getElementById('image3');
const textBox = document.getElementById('text-box');

// Light Mode Styles
function imageMode(colour){
    image1.src = `img/undraw_proud_coder_${colour}.svg`;
    image2.src = `img/undraw_feeling_proud_${colour}.svg`;
    image3.src = `img/undraw_conceptual_idea_${colour}.svg`;
     
}


// // Dark and Light Mode Style
// function toggleDarkLightMode(isDark){
//     nav.style.backgroundColor = isDark ? 'rgb(0 0 0 /50%)' : 'rgb(0 0 0 /50%)';
//     textBox.style.backgroundColor = isDark ? 'rgb(255 255 255/ 50%)' :'rgb(0 0 0/ 50%)';
//     toggleIcon.children[0].textContent = isDark ? 'dark Mode' : 'light mode';  
//     isDark ? toggleIcon.children[1].classList.replace('fa-sun','fa-moon' ) :  toggleIcon.children[1].classList.replace('fa-moon','fa-sun' );
//    isDark ? imageMode('dark') : imageMode('light');

// }

// Dark Mode Style
function darkMode(){
    nav.style.backgroundColor = 'rgb(0 0 0 /50%)';
    textBox.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    toggleIcon.children[0].textContent = 'dark Mode';
    toggleIcon.children[1].classList.replace('fa-sun','fa-moon' );
    imageMode('dark');
}

// Light Mode Style
function lightMode(){
    nav.style.backgroundColor = 'rgb(255 255 255/ 50%)';
    textBox.style.backgroundColor = 'rgb(0 0 0/ 50%)';
    toggleIcon.children[0].textContent = 'light Mode';
    toggleIcon.children[1].classList.replace('fa-moon','fa-sun' );
    imageMode('light');
     
}


// Switch Theme Dynamically
function switchTheme(event){
    if (event.target.checked){
        document.documentElement.setAttribute('data-theme', 'dark');
        localStorage.setItem('theme', 'dark');
        darkMode();
    
    } else{
        document.documentElement.setAttribute('data-theme', 'light');
        localStorage.setItem('theme', 'light');
        lightMode();
    }
}
// Event Listener
toggleSwitch.addEventListener('change', switchTheme)


// check local storage for Theme
const currentTheme = localStorage.getItem('theme');
if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    
    if(currentTheme === 'dark') {
        toggleSwitch.checked = true;
        darkMode();
    }
}