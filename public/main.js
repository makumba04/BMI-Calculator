function BMI_METRIC() {

    var weight = parseFloat(document.getElementById('INPUT_WEIGHT_METRIC').value);
    var height = parseFloat(document.getElementById('INPUT_HEIGHT_METRIC').value);
    var result_container = document.getElementById('RESULT_METRIC');
    result_container.innerHTML = '';

    if (isNaN(weight) || isNaN(height) ) {

        error_message = document.createElement('p');
        error_message.innerText = "Please enter your weight and height";

        result_container.appendChild(error_message);
    } else if ( weight <= 44 || height <= 1.30 ){
        
        error_message = document.createElement('p');
        error_message.innerText = "Please enter a valid number";
        
        result_container.appendChild(error_message);
    }else {

        var BMI_VALUE = (weight / (height**2)).toFixed(2);

        var BMI = document.createElement('p');
        BMI.innerText = 'Your BMI is: ' + BMI_VALUE;

        result_container.appendChild(BMI);
    }
}

function BMI_IMPERIAL() {

    var weight = parseFloat(document.getElementById('INPUT_WEIGHT_IMPERIAL').value);
    var height = parseFloat(document.getElementById('INPUT_HEIGHT_IMPERIAL').value);
    var result_container = document.getElementById('RESULT_IMPERIAL');
    result_container.innerHTML = '';

    if ( isNaN(weight) || isNaN(height )) {

        error_message = document.createElement('p');
        error_message.innerText = "Please enter your weight and height";
        
        result_container.appendChild(error_message);
    } else if ( weight <= 104 || height <= 58 ){

        error_message = document.createElement('p');
        error_message.innerText = "Please enter a valid number";
        
        result_container.appendChild(error_message);
    } else {
    
        var BMI_VALUE = ((weight / (height ** 2)) * 703).toFixed(2);
    
        var BMI = document.createElement('p');
        BMI.innerText = 'Your BMI is: ' + BMI_VALUE;
        
        result_container.appendChild(BMI);
    }    
}

function CHANGE_UNITS() {
    
    const METRIC_CONTAINER = document.getElementById('METRIC_SYSTEM');
    const IMPERIAL_CONTAINER = document.getElementById('IMPERIAL_SYSTEM');
    const CHANGE_UNITS_BTN = document.getElementById('CHANGE_UNITS_BTN');
    var RESULT_METRIC = document.getElementById('RESULT_METRIC');
    var RESULT_IMPERIAL = document.getElementById('RESULT_IMPERIAL');
    var INPUT_WEIGHT_METRIC = document.getElementById('INPUT_WEIGHT_METRIC');
    var INPUT_HEIGHT_METRIC = document.getElementById('INPUT_HEIGHT_METRIC');
    var INPUT_WEIGHT_IMPERIAL = document.getElementById('INPUT_WEIGHT_IMPERIAL');
    var INPUT_HEIGHT_IMPERIAL = document.getElementById('INPUT_HEIGHT_IMPERIAL');


    if (METRIC_CONTAINER.style.display === 'none') {

        INPUT_WEIGHT_METRIC.value = '';
        INPUT_HEIGHT_METRIC.value = '';
        INPUT_WEIGHT_IMPERIAL.value = '';
        INPUT_HEIGHT_IMPERIAL.value = '';
        METRIC_CONTAINER.style.display = 'flex';
        IMPERIAL_CONTAINER.style.display = 'none';
        CHANGE_UNITS_BTN.innerText = 'To imperial';
        RESULT_METRIC.innerHTML = '';
    } else {

        INPUT_WEIGHT_METRIC.value = '';
        INPUT_HEIGHT_METRIC.value = '';
        INPUT_WEIGHT_IMPERIAL.value = '';
        INPUT_HEIGHT_IMPERIAL.value = '';
        METRIC_CONTAINER.style.display = 'none';
        IMPERIAL_CONTAINER.style.display = 'flex';
        CHANGE_UNITS_BTN.innerText = 'To metric';
        RESULT_IMPERIAL.innerHTML = '';
    }
}