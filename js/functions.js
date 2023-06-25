function isMobile() {
	return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

function convertTime(inputTime) {
    inputTime = Math.round(inputTime);
    let hour = parseInt(inputTime / 3600);
    let minute = parseInt((inputTime % 3600) / 60);
    let second = parseInt(inputTime % 60);

    let result = String(hour).padStart(2, '0') + ":" + String(minute).padStart(2, '0') + ":" + String(second).padStart(2, '0');
    return result;
}

function displayImage() {
    let displaying = document.getElementById("imageSet");
    console.log(isMobile());
    if (isMobile()) {
        displaying.innerHTML = "<img src=\"image\\mobileres.png\" class=\"img-fluid p-3\" style=\"max-width: 75%; min-width: 500px;\">";
    } else {
        displaying.innerHTML = "<img src=\"image\\screenshot.png\" class=\"img-fluid p-3\" style=\"max-width: 75%; min-width: 800px;\">";
    }
}

displayImage();