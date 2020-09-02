//Guttemberg Machado

function _log (module, procedure, data){

    let time = new Date().toISOString().split('T')[1];

    /*eslint-disable*/
    console.log(
        (time + Array(12).fill(' ').join('') ).slice(0, 12) + ' | ' +
        (module + Array(12).fill(' ').join('') ).slice(0, 12) + ' | ' +
        data
    );
    /*eslint-enable*/
}

function _bubbleSort(items) {
    var length = items.length;
    for (var i = 0; i < length; i++) {
        for (var j = 0; j < (length - i - 1); j++) {
            if(items[j].count < items[j+1].count) {
                var tmp = items[j];
                items[j] = items[j+1];
                items[j+1] = tmp;
            }
        }
    }
    return items;
}

function main(){

    _log('main.js', 'main', 'Início...');

    let buffer = 'rihreeahrrkhrrrra';
    let res = [];

    _log('main.js', 'main', '   entrada: "' + buffer + '".');

    for (let i = 0; i < buffer.length; i++ ) {
        let char = buffer.substr(i,1);
        let k;
        for (k = 0; k < res.length; k++){
            if(res[k].char == char){
                res[k].count++;
                _log('main.js', 'main', '   Incrementando "' + char + '" (count '  + res[k].count + ')');
                break;
            }
        }

        if (k >= res.length){
            _log('main.js', 'main', '   Adicionando "' + char + '" (count: 1).');
            res.push ({char: char, count: 1});
        }

    }

    let sorted = _bubbleSort(res);

    _log('main.js', 'main', '   O caractere "' + sorted[0].char + '" é o mais frequente, com ' +sorted[0].count + ' ocorrências.');

    _log('main.js', 'main', 'fim');
}

main();

