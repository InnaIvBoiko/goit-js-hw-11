import iziToast from "izitoast";
import "izitoast/dist/css/iziToast.min.css";

import ErrorIcon from '../img/error.svg';


const formSearch = document.querySelector('.form');
const keywords = document.querySelector('.key-words');

const API_KEY = '42438077-634a4b32cfcaa96ebaa8c4719';

async function searchImg() {
    const keywordsValue = encodeURIComponent(keywords.value);  
    const url = `https://pixabay.com/api/?key=${API_KEY}&q=${keywordsValue}`;

    const response = await fetch(url);
    const data = await response.json();

    if (parseInt(data.totalHits) > 0) {
        return data;
    } else {
        errorMessage();
    };   
};

formSearch.addEventListener('submit', (event) => {
    event.preventDefault();
    
    if (keywords.value) {
        searchImg();
    };

    formSearch.reset();
});

const errorMessage = () => {
    iziToast.show({
        message: 'Sorry, there are no images matching your search query. Please try again!',
        messageColor: '#fff',
        messageSize: '16',
        backgroundColor: '#EF4040',
        iconUrl: ErrorIcon,
        position: 'topRight',
        close: true,
        layout: 2,
        timeout: 3000
    });
};


