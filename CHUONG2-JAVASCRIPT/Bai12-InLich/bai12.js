function solution() {

    //lay gia tri
    let dayInput = parseInt(document.getElementById('day').value);
    let monthInput = parseInt(document.getElementById('month').value);
    let yearInput = parseInt(document.getElementById('year').value);

    //kiem tra xem da nhap du chua
    if (isNaN(dayInput) || isNaN(monthInput) || isNaN(yearInput)) {
        alert("Vui lòng nhập đầy đủ ngày, tháng, năm!");
        return;
    }

    //kiem tra ngay hop le
    let dateObj = new Date(yearInput, monthInput - 1, dayInput);
    if(dateObj.getFullYear() !== yearInput || dateObj.getMonth() !== (monthInput - 1) || dateObj.getDate() !== dayInput){
        alert("Ngày, tháng, năm không hợp lệ trong thực tế!");
        return;
    }

    //lay gia tri de in ra
    let year = dateObj.getFullYear();
    let month = dateObj.getMonth() + 1;
    let dayNum = dateObj.getDate();
    let dayOfWeek = dateObj.getDay();
    let weekdays = ["Chủ Nhật", "Thứ Hai", "Thứ Ba", "Thứ Tư", "Thứ Năm", "Thứ Sáu", "Thứ Bảy"];
    let weekdayStr = weekdays[dayOfWeek];

    //lay thoi gian tu may tinh de tinh
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
    else{
        greetingText = "Chào buổi tối !";
    }

    //in ra ket qua de hien len man hinh
    document.getElementById('displayYear').innerText = year;
    document.getElementById('displayMonth').innerText = "Tháng " + month;
    document.getElementById('displayDay').innerText = dayNum;
    document.getElementById('displayWeekly').innerText = weekdayStr;

    //thay doi buoi sang trua chieu toi
    const greetingElement = document.querySelector('.good-morning p');
    if (greetingElement) {
        greetingElement.innerText = greetingText;
    }
}

//thuc hien chuong tỉnh khi bam nut
const printButton = document.querySelector('.input button');
printButton.addEventListener('click', solution);