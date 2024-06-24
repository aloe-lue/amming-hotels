const full_year = new Date().getFullYear();
const copyrightYear = document.querySelector('div[class="full-year"]');

copyrightYear.innerText = `${full_year}`;