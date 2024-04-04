console.log('theme.js');

const lighttheme = 'solawiLight';
const darktheme = 'solawiDark';

console.log('onload.js');
if (
  localStorage.theme === darktheme ||
  (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)
) {
  console.log('onload.js dark');
  document.documentElement.classList.add(darktheme);
  document.documentElement.setAttribute('data-theme', darktheme);
  localStorage.theme = darktheme;
} else {
  console.log('onload.js light');
  document.documentElement.classList.remove(darktheme);
  document.documentElement.setAttribute('data-theme', lighttheme);
  localStorage.theme = lighttheme;
}

window.themeModeToggle = (btn) => {
  console.log('themeModeToggle');
  if (localStorage.theme === lighttheme) {
    document.documentElement.classList.remove(lighttheme);
    localStorage.theme = darktheme;
    document.documentElement.classList.add(darktheme);
    document.documentElement.setAttribute('data-theme', darktheme);
    // btn.innerHTML = darktheme;
  } else if (localStorage.theme === darktheme) {
    document.documentElement.classList.remove(darktheme);
    localStorage.theme = lighttheme;
    document.documentElement.classList.add(lighttheme);
    document.documentElement.setAttribute('data-theme', lighttheme);
    // btn.innerHTML = lighttheme;
  } else {
    const matched = window.matchMedia('(prefers-color-scheme: dark)').matches;

    if (matched) {
      console.log('Currently in dark mode');
    } else {
      console.log('Currently not in dark mode');
    }
  }
};
