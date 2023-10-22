const allHouses = [
    {
        id: 1,
        title: 'LOFTHAUS R70',
        price: 4465000,
        area: 70,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-1.jpg',

    },
    {
        id: 2,
        title: 'LOFTHAUS R90',
        price: 5115000,
        area: 90,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-2.jpg',
    },
    {
        id: 3,
        title: 'LOFTHAUS M102',
        price: 6360000,
        area: 102,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-3.jpg',
    },
    {
        id: 4,
        title: 'LOFTHAUS M125',
        price: 7300000,
        area: 125,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-4.jpg',
    },
    {
        id: 5,
        title: 'LOFTHAUS M130',
        price: 7910000,
        area: 130,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-5.jpg',
    },
    {
        id: 6,
        title: 'LOFTHAUS С140',
        price: 6970000,
        area: 140,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-6.jpg',
    },
    {
        id: 7,
        title: 'LOFTHAUS M150',
        price: 8820000,
        area: 150,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-7.jpg',
    },
    {
        id: 8,
        title: 'LOFTHAUS S160',
        price: 9120000,
        area: 160,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-8.jpg',
    },
    {
        id: 9,
        title: 'LOFTHAUS ONE 200',
        price: 16740000,
        area: 200,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-9.jpg',
    },
    {
        id: 10,
        title: 'LOFTHAUS S207',
        price: 11420000,
        area: 207,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-10.jpg',
    },
    {
        id: 11,
        title: 'LOFTHAUS К227',
        price: 10850000,
        area: 227,
        img: 'https://topttedhbiu-dejlbfuh4uk.github.io/Layout_LoftHouse/images/item-11.jpg',
    },
];

const containerBtnApplyEl = document.querySelector('.container-btn-apply');
const filterInputEls = [...document.querySelectorAll('.filter-input')];
const filterInvalidMsgEls = [...document.querySelectorAll('.filter-invalid-msg')];
const containerItemEls = [...document.querySelectorAll('.item')];

filterInputEls.forEach((filterInputEl, index) => {
    filterInputEl.filterInvalidMsgEls = filterInvalidMsgEls[index];
});

const removeHouses = (filters) => {
    allHouses.forEach((house, index) => {
        const priceInRange = house.price >= filters.price.from && house.price <= filters.price.to;
        const areaInRange = house.area >= filters.area.from && house.area <= filters.area.to;

        if (!(priceInRange && areaInRange)) {
            const houseElement = containerItemEls[index];
            if (houseElement) {
                houseElement.remove();
                console.log('+');
            }
        }
    });
};

containerBtnApplyEl.addEventListener('click', () => {
    const filters = {};

    filterInputEls.forEach(filterInputEl => {

        if (filterInputEl.value || filterInputEl.value === 0) {
            const [filterKey, filterSubKey] = filterInputEl.id.split('-');
            const filter = filters[filterKey] = filters[filterKey] || {};
            filter[filterSubKey] = filterInputEl.value;
        } else {
            filterInputEl.filterInvalidMsgEls.classList.add('invalid');
            filterInputEl.filterInvalidMsgEls.classList.remove('hidden-filter-invalid-msg');
        }

        if (!filterInputEl.listensToChanges) {
            filterInputEl.addEventListener('input', () => {
                const isValid = filterInputEl.value || filterInputEl.value === 0;
                filterInputEl.filterInvalidMsgEls.classList.toggle('invalid', !isValid);
                filterInputEl.filterInvalidMsgEls.classList.toggle('hidden-filter-invalid-msg', isValid);
            });
            filterInputEl.listensToChanges = true;
        }

    });
    removeHouses(filters);
});




