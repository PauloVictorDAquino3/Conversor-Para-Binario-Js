
function converter_nomes_bin (input_data) {
    let bin = '';
    for (let i = 0; i < input_data.length; i++){
        bin += input_data.charCodeAt(i).toString(2) + '';
    };
    return bin.trim();
}


function btn_convert(){
    let input = document.getElementById("input-nome").value;
    let resultado = converter_nomes_bin(input);
    
    document.getElementById('area_resultado').innerHTML=`${resultado}`;
};