window.addEventListener('hashchange', navigator, false);
window.addEventListener('DOMContentLoaded', navigator, false)

function navigator() {
    console.log({ location });
    if (location.hash.startsWith('#trends')) {
        loadTrendsPage();
    } else if (location.hash.startsWith('#search=')) {
        loadSearchPage();
    } else if (location.hash.startsWith('#movie=')) {
        loadMovieDetailsPage();
    } else if (location.hash.startsWith('#category=')) {
        loadCategoriesPage();
    } else {
        loadHomePage();
    }
}

function loadHomePage() {
    console.log('Home!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    headerTitle.classList.remove('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.remove('inactive');
    categoriesPreviewSection.classList.remove('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.add('inactive');

    getTrendingMoviesPreview();
    getCategoriesPreview();
}

function loadCategoriesPage() {
    console.log('Categories!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}

function loadMovieDetailsPage() {
    console.log('Movies!!');
}

function loadSearchPage() {
    console.log('Search!!');
}

function loadTrendsPage() {
    console.log('Trends!!');
}