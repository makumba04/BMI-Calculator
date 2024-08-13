function BMI_METRIC() {

    var weight = parseFloat(document.getElementById('INPUT_WEIGHT').value);
    var height = parseFloat(document.getElementById('INPUT_HEIGHT').value);
    var result_container = document.getElementById('result');

    var BMI_VALUE = (weight / (height**2)).toFixed(2);

    var BMI = document.createElement('p');
    BMI.innerText = BMI_VALUE;

    result_container.appendChild(BMI);
}

function BMI_IMPERIAL() {

    var weight = parseFloat(document.getElementById('INPUT_WEIGHT').value);
    var height = parseInt(document.getElementById('INPUT_HEIGHT').value);
    var result_container = document.getElementById('result');

    var BMI_VALUE = ((weight / (height**2)) * 703).toFixed(2);

    console.log(BMI_VALUE);

    var BMI = document.createElement('p');
    BMI.innerText = BMI_VALUE;

    result_container.appendChild(BMI);
}