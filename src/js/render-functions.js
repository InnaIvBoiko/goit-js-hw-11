import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

const gallery = document.querySelector('.gallery');
   
function markUp(images) {
    const resalt = images.map((image) =>
        `<li class="gallery-item">
            <a class="gallery-link" href="${image.largeImageURL}">
                <img
                    class="gallery-image"
                    src="${image.previewURL}" 
                    alt="${image.tags}"
                />
            </a>
            <div class="gallery-info">
                <div class="column">
                    <h2>likes</h2>
                    <p>${image.likes}</p>
                </div>
                <div class="column">
                    <h2>views</h2>
                    <p>${image.views}</p>
                </div>
                 <div class="column">
                    <h2>comments</h2>
                    <p>${image.comments}</p>
                </div>
                <div class="column">
                    <h2>downloads</h2>
                    <p>${image.downloads}</p>
                </div>
            </div>
        </li>`)
        .join('');
        
    gallery.insertAdjacentHTML('beforeend', resalt);
    const lightbox = new SimpleLightbox('.gallery a', {
        captionsData: 'alt',
        captionDelay: 250,
        captionPosition: 'bottom'
    }).refresh();
};      
           
export { gallery, markUp };