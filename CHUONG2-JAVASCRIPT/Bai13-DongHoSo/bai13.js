function formatTwoDigit(num){
    return num < 10 ? "0" + num : "" + num
}

function updateClock(){
    const now = new Date();

    //lay tgian hien tai
    const hours = now.getHours();
    const minutes = now.getMinutes();
    const seconds = now.getSeconds();

    //chuyen sang ki tu
    const hStr = formatTwoDigit(hours);
    const mStr = formatTwoDigit(minutes);
    const sStr = formatTwoDigit(seconds);

    document.getElementById('h1').src = "0" + hStr[0] + ".gif";
    document.getElementById('h2').src = "0" + hStr[1] + ".gif";

    document.getElementById('m1').src = "0" + mStr[0] + ".gif";
    document.getElementById('m2').src = "0" + mStr[1] + ".gif";

    document.getElementById('s1').src = "0" + sStr[0] + ".gif";
    document.getElementById('s2').src = "0" + sStr[1] + ".gif";
    

    let currentHours = new Date().getHours();
    let greetingText = "";
    if(currentHours >= 4 && currentHours < 11){
        greetingText = "Chào buổi sáng !";
    }
    else if(currentHours >= 11 && currentHours < 13){
        greetingText = "Chào buổi trưa !";
    }
    else if(currentHours >= 13 && currentHours < 18){
        greetingText = "Chào buổi chiều !";
    } 
    else if(currentHours >= 18 && currentHours < 24){
        greetingText = "Chào buổi tối !";
    }
    else{
        greetingText = "Chào buổi đêm !";
    }

    const greetingElement = document.querySelector('.text-box p');
    if (greetingElement) {
        greetingElement.innerText = greetingText;
    }
}

updateClock();
setInterval(updateClock, 1000);