$(document).ready(function(){
    $('.carousel').carousel();
});


function toggleVideo() {
    const trailer = document.querySelector('.trailer');
    const video = document.querySelector('.trailer video'); // Ensure correct video selector
    if (video.paused) {
        video.play(); // If video is paused, play it
    } else {
        video.pause(); // If video is playing, pause it
    }
    trailer.classList.toggle('active');
}

function changeBg(bg, title) {
    const banner = document.querySelector('.banner');
    const content = document.querySelectorAll('.content');
    banner.style.background = `url("image/${bg}")`;
    banner.style.backgroundSize = 'cover';
    banner.style.backgroundPosition = 'center';

    content.forEach(item => {
        item.classList.remove('active');
        if (item.classList.contains(title)) {
            item.classList.add('active');
        }
    });
}


