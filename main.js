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

function main(){

    _log('main.js', 'main', 'Início...');

    _log('main.js', 'main', 'fim');
}

main();

