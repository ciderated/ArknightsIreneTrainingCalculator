let trainTime;
let ireneMultiplier = 1;
let ireneSpeed;
let ireneNeed;
let trainSpeed;
let ascalonSkill;
let selectedValue;

function trainingSpeed() { // 훈련 속도
    let ireneApplied = document.getElementById("irene").checked;
    let ascalonApplied = document.getElementById("ascalonApplied").checked;

    if (ascalonApplied == true) {
        ascalonSkill = 0.05;
    } else {
        ascalonSkill = 0;
    }

    trainSpeed = (document.getElementById("trainSpeed").value) / 100 + ascalonSkill;

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
    console.log(appliedTime / finalTrainSpeed);
    if (appliedTime - ireneNeed < 0) {
        resultElement.innerHTML = "<h1>NN:NN:NN</h1>";
        result2Element.innerHTML = "<h1>아이린 사용 불가!</h1>";
    } else {
        resultElement.innerHTML = "<h1>" + convertTime(time2Change) + "</h1>";
        result2Element.innerHTML = "<h1>" + convertTime(time2Change2) + "</h1>";
    }
}