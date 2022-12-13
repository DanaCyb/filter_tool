let filterPositions = [...positions];
const positionsContainer = document.querySelector('.positions-container');
const displayPositions = () => {
    if (filterPositions.length < 1){
        positionsContainer.innerHTML = `<h6>Brak pozycji!!</h6>`;
        return;
    }
    positionsContainer.innerHTML = filterPositions
        .map((position) => {
            const { id, image, title, price} = position;
            return `<article class="position" data-id="${id}">
                <img src="${image}"
                class="position-img img"
                alt=""
                />
                <footer>
                    <h5 class="position-name">${title}</h5>
                    <span class="position-price">${price}</span>
                </footer>
            </article>`
        })
        .join('');
};

displayPositions();

const form = document.querySelector('.input-form');
const searchInput = document.querySelector('.search-input');

form.addEventListener('keyup', ()=>{
    const inputValue = searchInput.value;
    filterPositions = positions.filter((position) =>{
        return position.title.toLowerCase().includes(inputValue);
    });
    displayPositions();
});

const companiesDOM = document.querySelector('.companies');
const displayButtons = () => {
    const buttons = [
        'all',
        ...new Set(positions.map((position)=> position.company))
    ];
    companiesDOM.innerHTML = buttons
    .map((company)=>{
        return `<button class="company-btn" data-id="${company}">${company}</button>`
    })
    .join('');
};
displayButtons();

companiesDOM.addEventListener('click',(e)=>{
    const el = e.target;
    if(el.classList.contains('company-btn')){
        if(el.dataset.id === 'all'){
            filterPositions = [...positions];
        }else{
            filterPositions = position.filter((position)=>{
                return position.company === el.dataset.id;
            });
        }
        searchInput.value = '';
        displayPositions();
    }
});