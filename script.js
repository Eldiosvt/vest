// Simular una base de datos de videos y películas
const videos = [
    {id: 'https://cuevana.biz/pelicula/1087822/hellboy-el-hombre-torcido', title: 'Video 1'},
    {id: 'https://cuevana.biz/pelicula/1359227/lego-marvel-avengers-mision-demolicion', title: 'Video 2'},
    {id: 'https://cuevana.biz/pelicula/616446/hermanos', title: 'Video 3'}
];

const movies = [
    {id: 'https://cuevana.biz/pelicula/912649/venom-el-ultimo-baile', title: 'Película 1'},
    {id: 'https://cuevana.biz/pelicula/1179231/hombres-duros', title: 'Película 2'},
    {id: 'https://cuevana.biz/pelicula/1306764/ahi-afuera', title: 'Película 3'}
];

// Función para cargar videos de YouTube
function loadVideos() {
    const container = document.getElementById('video-container');
    videos.forEach(video => {
        const videoItem = document.createElement('div');
        videoItem.className = 'video-item';
        videoItem.innerHTML = `
            <h3>${video.title}</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${video.id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `;
        container.appendChild(videoItem);
    });
}

// Función para cargar películas (usando iframes de ejemplo)
function loadMovies() {
    const container = document.getElementById('movie-container');
    movies.forEach(movie => {
        const movieItem = document.createElement('div');
        movieItem.className = 'movie-item';
        movieItem.innerHTML = `
            <h3>${movie.title}</h3>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/${movie.id}" frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
        `;
        container.appendChild(movieItem);
    });
}

// Cargar videos y películas cuando la página esté lista
document.addEventListener('DOMContentLoaded', () => {
    loadVideos();
    loadMovies();
});
