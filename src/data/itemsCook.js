import itemsRaw from "./itemsRaw";

let itemLabel = itemsRaw.filter(x => x.length > 10);
let itemsCut = itemsRaw.filter(x => x.length < 10);
let itemsCook = {};

itemsCook.labels = itemLabel;
itemsCook.itemsList = itemsCut;
itemsCook.cases = [];
itemsCook.labels.forEach(x => {
    itemsCook.cases.push(Number(x.slice(-4, -2)));
});
itemsCook.bucket = [];
itemsCook.itemsList.forEach((x, i) => {
    let pocket = {};
    pocket.id = i;
    pocket.title = x[0].slice(x[0].indexOf('호') + 4, x[0].indexOf('물') - 2);
    let addressLine = x[x.length - 2];
    pocket.address = [
        addressLine.slice(0, addressLine.indexOf('시') + 1),
        addressLine.slice(addressLine.indexOf(' ') + 1, addressLine.indexOf('구') + 1),
        addressLine.slice(addressLine.indexOf('구') + 2, addressLine.indexOf(',')),
        addressLine.slice(addressLine.indexOf(',') + 2,).replace(/\s/gi, ''),
    ];

    switch (pocket.address[1]) {
        case '강남구':
        case '서초구':
        case '종로구':
        case '중구':
        case '동작구':
        case '관악구':
            pocket.court = '서울중앙지법'
            break;
        case '송파구':
        case '강동구':
        case '성동구':
        case '광진구':
            pocket.court = '서울동부지법'
            break;
        case '용산구':
        case '마포구':
        case '서대문구':
        case '은평구':
            pocket.court = '서울서부지법'
            break;
        case '영등포구':
        case '양천구':
        case '강서구':
        case '구로구':
        case '금천구':
            pocket.court = '서울남부지법'
            break;
        case '강북구':
        case '노원구':
        case '성북구':
        case '중랑구':
        case '동대문구':
            pocket.court = '서울북부지법'
            break;
        default:
            break;
    }
    pocket.kind = x[0].slice(x[0].indexOf('물') + 10).replace(/\s/gi, '');

    let priceLine = x[1].replace(/,/gi, '').replace(/원/gi, '');
    pocket.estimate = Number(priceLine.slice(6, priceLine.indexOf('최') - 2));
    pocket.price = Number(priceLine.slice(priceLine.indexOf('최') + 6, priceLine.indexOf('(') - 2));
    pocket.percent = priceLine.slice(priceLine.indexOf('(') + 1, priceLine.indexOf('%') + 1);
    pocket.miss = priceLine.slice(priceLine.indexOf(')') + 2,).replace(/\s/gi, '');

    itemsCook.bucket.push(pocket);
})


// let itemsCook = {};

// itemsCook.center = itemsCook.itemsList.slice(0, itemsCook.cases[0]).concat(itemsCook.itemsList.slice(itemsCook.cases[0], itemsCook.cases[0] + itemsCook.cases[1]));


export default itemsCook;
