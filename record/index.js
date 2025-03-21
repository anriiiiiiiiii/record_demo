let title = [];
let about = [];
let img = [];
let music = [];
let selectedRecordId = 0;

title = ["test1","test2","test3","test4","test4"];
about = ["this music is a test.Ok?NO?iikara souiuno"];
img = ["img/24ai1104_061_TP_V4.jpg","img/AI241016PE003_TP_V4.jpg","img/AV8684_d8019_TP_V4.jpg","img/AV8684_d8053_TP_V4.jpg","img/bob2178IMG_50981413_TP_V4.jpg"]
music = ["","","","music/yuki_no_sourestu.mp3"];
function setRecord(n){
    let recordTitle = document.getElementById("recordTitle");
    recordTitle.innerHTML = title[n];

    let recordAbout = document.getElementById("recordAbout");
    recordAbout.innerHTML = about[n];

    let recordImg = document.getElementById("recordImg");
    recordImg.src = img[n];

    let recordMusic = document.getElementById("recordMusic");
    recordMusic.src = music[n];

    let body = document.getElementById("body");
    body.style.backgroundImage = "url(" + img[n] +")";
    body.style.backdropFilter = "blur(4px) brightness(0.5)";
    document.getElementById("recordBox").style.backdropFilter = "brightness(0.5)";
}

function randomRecord(){
    let n = Math.floor( Math.random() * title.length );
    selectedRecordId = n;
    console.log(selectedRecordId);
    
    setRecord(selectedRecordId);
}