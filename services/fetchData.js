export async function fetchCategories(appState) {
    try {
        const response = await fetch(appState.url.allCategories);
        return await response.json();
    } catch (error) {
        appState.error = error
    }
}

export async function fetchProducts(appState) {
    try {
        const response = await fetch(appState.url.allProducts);
        return await response.json();
    } catch (error) {
        appState.error = error
    }
}

// export async function patchPost(appState) {
//     const urlPost = `${appState.urlPosts}/${appState.modalWindow.editedPost.id}`;
//     const payload = appState.modalWindow.editedPost;
//     const options = {
//         method: "PATCH",
//         body: JSON.stringify(payload),
//         headers: { 'Content-type': 'application/json; charset=UTF-8' },
//     };

//     try {
//         appState.postUpdate.isFetching = true;
//         const response = await fetch(urlPost, options);
//         appState.postUpdate.isFetching = false;

//         if (response.status === 404) {
//             throw new Error(response.status);
//         }

//         return response.json();
//     } catch (error) {
//         appState.postUpdate.isFetching = false;
//         appState.postUpdate.error = error;
//     }
// }