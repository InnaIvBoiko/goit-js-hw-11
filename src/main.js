import { keywords, searchImg, errorMessage } from './js/pixabay-api';
import { gallery, markUp } from "./js/render-functions";

const formSearch = document.querySelector('.form-search');

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();

    const loading = document.querySelector('.loading')
    gallery.innerHTML = '';
    
    if (keywords.value) {
        loading.classList.remove('visually-hidden');
        setTimeout(() => {
            loading.classList.add('visually-hidden');            
        }, 1000); 
        setTimeout(() => { 
            searchImg()
                .then(data => {
                    if (parseInt(data.totalHits) > 0) {
                        return data.hits;
                    };
                })
                .then((images) => {
                    markUp(images);
                })
                .catch(() => {
                    errorMessage();
                })
                .finally(() => {
                    formSearch.reset();
                });
        }, 1000);
    };   
});