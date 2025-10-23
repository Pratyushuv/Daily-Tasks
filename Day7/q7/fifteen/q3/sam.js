var but1 = document.querySelector(".but");
var textinput = document.querySelector(".textinput");
var con = document.querySelector(".con");
var toggle = document.querySelector(".toggle");
//get from local storage
var localData = localStorage.getItem("data") || [];
var ldata = JSON.stringify(localData);
ldata = ldata.slice(1, ldata.length - 1);
ldata = ldata.split(",");
ldata.forEach(function (l) {
    var html = "<li class=\"list\">".concat(l, "</li>");
    con.insertAdjacentHTML("beforeend", html);
});
var arr = [];
but1.addEventListener("click", function () {
    var data = textinput.value;
    arr.push(data);
    //add to local storage
    localStorage.setItem("data", arr);
    if (data === "")
        console.log("nothing");
    else {
        var html = "<li class=\"list\">".concat(data, "</li>");
        con.insertAdjacentHTML("beforeend", html);
        textinput.value = "";
    }
});
con.addEventListener("click", function (e) {
    e.target.classList.toggle("strike");
    console.log(e.target);
});
toggle.addEventListener("click", function () {
    var strikes = document.querySelectorAll(".strike");
    console.log(Array.from(strikes).forEach(function (l) {
        l.classList.toggle("hide");
    }));
});
