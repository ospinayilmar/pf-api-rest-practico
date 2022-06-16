searchFormBtn.addEventListener('click', () => {
    location.hash = `#search=${searchFormInput.value}`;
});

trendingBtn.addEventListener('click', () => {
    location.hash = '#trends';
});

arrowBtn.addEventListener('click', () => {
    history.back();
});

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

    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

function loadHomePage() {
    console.log('Home!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.add('inactive');
    arrowBtn.classList.remove('header-arrow--white');
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
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, categoryData] = location.hash.split('=');
    const [categoryId, categoryName] = categoryData.split('-');

    headerCategoryTitle.innerHTML = categoryName;

    getMoviesByCategory(categoryId);
}

function loadMovieDetailsPage() {
    console.log('Movies!!');

    headerSection.classList.add('header-container--long');
    // headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.add('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.add('inactive');
    movieDetailSection.classList.remove('inactive');
}

function loadSearchPage() {
    console.log('Search!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.add('inactive');
    searchForm.classList.remove('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');

    const [_, query] = location.hash.split('=');

    getMoviesBySearch(query);
}

function loadTrendsPage() {
    console.log('Trends!!');

    headerSection.classList.remove('header-container--long');
    headerSection.style.background = '';
    arrowBtn.classList.remove('inactive');
    arrowBtn.classList.remove('header-arrow--white');
    headerTitle.classList.add('inactive');
    headerCategoryTitle.classList.remove('inactive');
    searchForm.classList.add('inactive');

    trendingPreviewSection.classList.add('inactive');
    categoriesPreviewSection.classList.add('inactive');
    genericSection.classList.remove('inactive');
    movieDetailSection.classList.add('inactive');
}