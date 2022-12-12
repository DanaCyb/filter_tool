let filterPositions = [...positions];
const positionsContainer = document.querySelector('.positions-container');
const displayPositions = () => {
    if (filterPositions.length < 1){
        positionsContainer.innerHTML = `<h6>Brak pozycji!!</h6>`;
        return;
    }
    positionsContainer.innerHTML = filterPositions
        .map((position) => {
            const { id, image, title, prace} = position;
            return `<article class="position" data-id="${id}">
                <img src="${image}"
                class="position-img img"
                alt=""
                />
                <footer>
                    <h5 class="position-name">${title}</h5>
                    
                </footer>
            </article>`;
        })
}