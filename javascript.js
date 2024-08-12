function switchLanguage(lang) {
    document.querySelectorAll('.english, .arabic, .german').forEach(el => el.style.display = 'none');
    document.querySelectorAll('.' + lang).forEach(el => el.style.display = 'flex');
    // just testing stuff :
    localStorage.setItem('preferredLanguage', lang);
    // close
}

function handleLanguageSwitch(lang) {
    const confirmBox = document.querySelector('.confirm-box');
    confirmBox.style.display = 'flex';

    document.getElementById('confirm-yes').onclick = function() {
        confirmBox.style.display = 'none';
        switchLanguage(lang);
    };

    document.getElementById('confirm-no').onclick = function() {
        confirmBox.style.display = 'none';
    };
}
// open test
const savedLanguage = localStorage.getItem('preferredLanguage') || 'english';
switchLanguage(savedLanguage);
// close

//the dark mode thingy
function darkMode() {
    const darkening = document.body
    darkening.classList.toggle("dark_theme")
}