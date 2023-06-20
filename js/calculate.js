let trainTime;
let ireneMultiplier = 1;
let ireneSpeed;
let ireneNeed;
let trainSpeed;
let selectedValue;

function trainingSpeed() { // 훈련 속도
    let ireneApplied = document.getElementById("irene").checked;
    trainSpeed = (document.getElementById("trainSpeed").value) / 100;

    if (ireneApplied == true) {
        ireneMultiplier = 0.5;
    } else {
        ireneMultiplier = 1;
    }
    return ireneMultiplier;
}

function ireneSpeedUp() {
    let ireneSkillApplied = document.getElementById("ireneSkillApplied").checked;
    if (ireneSkillApplied == true) {
        ireneSpeed = 0.3;
    } else {
        ireneSpeed = 0;
    }
}

function trainingCalc() { // 훈련 계산
    let selectedRadioButton = document.querySelector('input[name="skillMastery"]:checked');

    if (selectedRadioButton) {
        selectedValue = selectedRadioButton.value;
        trainTime = parseInt(selectedValue) * 3600;
    }

    ireneSpeedUp();
    trainingSpeed();

    let resultElement = document.getElementById("finalresult1");
    let result2Element = document.getElementById("finalresult2");

    let appliedTime = trainTime * ireneMultiplier; // 아이린 적용 후
    let finalTrainSpeed = 1 + trainSpeed + 0.05; // 최종 훈련 가속

    ireneNeed = 5 * 3600 * (1 + ireneSpeed + 0.05);

    let time2Change = (appliedTime / finalTrainSpeed) - ((appliedTime - ireneNeed) / finalTrainSpeed);
    let time2Change2 = ((appliedTime - ireneNeed) / (finalTrainSpeed));

    if (appliedTime - ireneNeed < 0) {
        resultElement.innerHTML = "<p class=\"fs-1\">NN:NN:NN</p>";
        result2Element.innerHTML = "<p class=\"fw-bold fs-1\">아이린 사용 불가!</p>";
    } else {
        resultElement.innerHTML = "<p class=\"fw-bold fs-1\">" + convertTime(time2Change) + "</p>";
        result2Element.innerHTML = "<p class=\"fs-1\">" + convertTime(time2Change2) + "</p>";
    }
    
    
}

function convertTime(inputTime) {
    inputTime = Math.round(inputTime)
    let hour = parseInt(inputTime / 3600);
    let minute = parseInt((inputTime % 3600) / 60);
    let second = parseInt(inputTime % 60)

    let result = String(hour).padStart(2, '0') + ":" + String(minute).padStart(2, '0') + ":" + String(second).padStart(2, '0');
    return result;
}