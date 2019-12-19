function checkDate(x, y, z){
    if(x == "" || y == ""){
        alert("Please enter a valid date");
        return false;
    }
    if (y == 2 && x > 29) {
        alert("Please enter a valid date");
        return false;
    }
    if (x == 31 && (y == 9 || y == 4 || y == 6 || y == 11)) {
        alert("Please enter a valid date");
        return false;
    }
    if (z == ""){
        alert("Please enter your name");
        return false;
    }
    return true;
}
function onSubmit(){
    var month = document.getElementById("Month").value;
    var day = document.getElementById("Day").value;
    var name = document.getElementById("name").value;
    if(checkDate(day, month, name) === true){
        var sign = determineSign(day, month);
        document.getElementById("sign").innerHTML = name + ", you are a " + getSign(sign);
        document.getElementById("text").innerHTML = getText(sign);
        document.getElementById("pic").style.display = "inline-block";
        document.getElementById("pic").src = getPic(sign);
    }
}
function determineSign(day, month){
    if((day >= 20 && month == 1)||(day <= 18 && month == 2)){
        return 0;
    }
    if((day >= 19 && month == 2)||(day <= 20 && month == 3)){
        return 1;
    }
    if((day >= 21 && month == 3)||(day <= 19 && month == 4)){
        return 2;
    }
    if((day >= 20 && month == 4)||(day <= 20 && month == 5)){
        return 3;
    }
    if((day >= 21 && month == 5)||(day <= 20 && month == 6)){
        return 4;
    }
    if((day >= 21 && month == 6)||(day <= 22 && month == 7)){
        return 5;
    }
    if((day >= 23 && month == 7)||(day <= 22 && month == 8)){
        return 6;
    }
    if((day >= 23 && month == 8)||(day <= 22 && month == 9)){
        return 7;
    }
    if((day >= 23 && month == 9)||(day <= 22 && month == 10)){
        return 8;
    }
    if((day >= 23 && month == 10)||(day <= 21 && month == 11)){
        return 9;
    }
    if((day >= 22 && month == 11)||(day <= 21 && month == 12)){
        return 10;
    }
    return 11;
}
function getSign(sign){
    var signArr = ["Aquarius","Pisces","Aries","Taurus","Gemini","Cancer","Leo","Virgo","Libra","Scorpio","Sagittarius","Capricorn"];
    return signArr[sign]
}
function getText(sign){
    var response = ["Congratulations Aquarius! You are aloof, egotistical, and good at arguing.",
                    "YAY! You're a Pisces! you are an emotional wreck. Congrats.",
                    "Cool. You're an Aries. You're a hot-headed, egotistical, unpleasant individual.",
                    "Hey! Taurus! Unfortunately, the only interesting thing about you is that you're stubborn. How boring.",
                    "So, youre a gemini? According to our sources, that means you're a two-faced, gossip-lover. Thats too bad.",
                    "Cancer... thats unfortunate. The name is just not great. Sorry about that.",
                    "Ok so you're a leo. That means you're image-obsessed and love getting in other people's private buisness.", +
                    "Virgo... So that means you're childish and unable to handle emotions. That sucks.",
                    "A Libra! Ok, that means you're egotistical and typically very feminine in nature.",
                    "Ok! A Scorpio. This means you're overly passionate and power obsessed. Pretty interesing combination of traits",
                    "Sagittarius! The best one if you ask me. You can be a little rude at times, but you're just being honest.",
                    "Capricorn... Munneh. You're ambitious and determined but are pretty superficial"]
    return response[sign];
}

function getPic(sign){
    var picArr = ["img/Aquarius.jpg", "img/Pisces.jpg", "img/Aries.jpg", "img/Taurus.jpg", "img/Gemini.jpg", "img/Cancer.jpg", "img/Leo.jpeg", "img/Virgo.jpeg", "img/Libra.jpg", "img/Scorpio.jpeg", "img/Saggitarius.jpg", "img/Capricorn.jpg"]
    return picArr[sign];
}
