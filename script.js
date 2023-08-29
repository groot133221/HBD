function insertImage() {
    const divElement = document.getElementById("gift-img-happy");
    divElement.style.backgroundImage = `url("happy.gif")`;
}

function insertImage2() {
    const divElement = document.getElementById("gift-img-fell");
    divElement.style.backgroundImage = `url("rabbit.gif")`;
}

function insertImage3() {
    const divElement = document.getElementById("gift-img-cont1");
    divElement.style.backgroundImage = `url("tom2.gif")`;
}

function insertImage4() {
    const divElement = document.getElementById("gift-img-cont2");
    divElement.style.backgroundImage = `url("ravi.jpg")`;
}

function insertImage5() {
    const divElement = document.getElementById("gift-img-cont3");
    divElement.style.backgroundImage = `url("ryan2.jpg")`;
}

function insertImage6() {
    const divElement = document.getElementById("gift-img-cont4");
    divElement.style.backgroundImage = `url("113.png")`;
}

function insertImage7() {
    const divElement = document.getElementById("gift-img-cont5");
    divElement.style.backgroundImage = `url("114.jpg")`;
}

function insertImage8() {
    const divElement = document.getElementById("gift-img-cont6");
    divElement.style.backgroundImage = `url("115.jpg")`;
}

function insertImage9() {
    const divElement = document.getElementById("gift-img-cont7");
    divElement.style.backgroundImage = `url("116.jpg")`;
}

let clickCount = 0;

function handleClick() {
    clickCount++;

    // if (clickCount < 5) {
    //     const divElement = document.getElementById("gift-img-cheers");
    //     // alert("Please click correctly ")
    // }

    if (clickCount === 1) {
        const divElement = document.getElementById("gift-img-cheers");
        divElement.style.backgroundImage = `url("cheers2.gif")`; 
    }
}

function navigateToPage(pageURL) {
    window.location.href = pageURL;
}