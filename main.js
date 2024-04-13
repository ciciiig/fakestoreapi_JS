import { fetchCategories } from "./services/fetchData.js";
import { createNavItems } from "./utils/createNavItems.js";

const appState = {
    url: {
        allProducts: 'https://fakestoreapi.com/products',
        allCategories: 'https://fakestoreapi.com/products/categories',
    },
    error: '',
    categories: [],
}

const elements = {
    appContainer: document.getElementById('app-container'),
    navItemsContainer: document.querySelector('#main-nav2 .navbar-nav'),
}

function render() {
    createNavItems(elements.navItemsContainer, appState.categories);
}

async function initializePage() {
    // fetch data
    appState.categories = await fetchCategories(appState);
    // if no data stop app working
    if (appState.error) return;

    // render
    render()
}

// RUN APP
initializePage();

