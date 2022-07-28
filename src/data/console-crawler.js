
let bucket = [];
document.querySelectorAll('.list01 li').forEach(x => {
    let pocket = {};
    let text = x.innerText.replace(/\s\s\s/, '').replace(/\[/gi, '').replace(/\]/gi, '');
    let lines = [];
    const N = text.match(/\n/g).length;

    for (let i = 0; i < N; i++) {
        lines.push(text.slice(0, text.indexOf('\n')));
        text = text.slice(text.indexOf('\n') + 1);
    }
    pocket.text = lines;
    pocket.date = document.querySelectorAll('.list_info span')[2].innerText.slice(-10,);
    pocket.court = [document.querySelectorAll('.list_info span')[0].innerText, document.querySelectorAll('.list_info span')[1].innerText];
    let eaNo = Number(lines[0].slice(lines[0].indexOf('물'), lines[0].indexOf('\|', lines[0].indexOf('물'))).replace(/물건번호 : /, '').slice(0, -1));
    let caseNo = lines[0].slice(lines[0].indexOf('사'), lines[0].indexOf('\|')).replace(/사건번호 : /, '').slice(0, -1);
    pocket.title = [caseNo, eaNo];
    pocket.kind = lines[0].slice(lines[0].indexOf('\|', lines[0].indexOf('물')) + 2,);
    let estimate = lines[1].replace(/,/gi, '').slice(lines[1].indexOf('감'), lines[1].indexOf('원'));
    pocket.estimate = Number(estimate.slice(estimate.indexOf(':') + 1, estimate.indexOf('원')).replace(/\s/, ''));
    let price = lines[1].replace(/,/gi, '').slice(lines[1].indexOf('최'), lines[1].indexOf('원', lines[1].indexOf('최')));
    pocket.price = Number(price.slice(price.indexOf(':') + 1, price.indexOf('원')).replace(/\s/, ''));
    pocket.percent = lines[1].slice(lines[1].indexOf('(') + 1, lines[1].indexOf(')'));
    pocket.miss = lines[1].slice(lines[1].indexOf(')') + 1).replace(/\|/, '').replace(/\s/gi, '');
    let addressLine = lines[lines.length - 1].replace(/\s/gi, '@');
    let state = addressLine.slice(0, addressLine.indexOf('@'));
    addressLine = addressLine.slice(addressLine.indexOf('@') + 1);
    let city = addressLine.slice(0, addressLine.indexOf('@'));
    addressLine = addressLine.slice(addressLine.indexOf('@') + 1).replace(/@/gi, ' ');
    let street = addressLine;
    pocket.address = [state, city, street];
    bucket.push(pocket);
    pocket.etc = (lines.length > 3 ? '복합물건' : '')
});
console.log(bucket);