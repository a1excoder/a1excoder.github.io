function parseURLParams(url) {
    var queryStart = url.indexOf("?") + 1,
        queryEnd   = url.indexOf("#") + 1 || url.length + 1,
        query = url.slice(queryStart, queryEnd - 1),
        pairs = query.replace(/\+/g, " ").split("&"),
        parms = {}, i, n, v, nv;

    if (query === url || query === "") return;

    for (i = 0; i < pairs.length; i++) {
        nv = pairs[i].split("=", 2);
        n = decodeURIComponent(nv[0]);
        v = decodeURIComponent(nv[1]);

        if (!parms.hasOwnProperty(n)) parms[n] = [];
        parms[n].push(nv.length === 2 ? v : null);
    }
    return parms;
}

function getName() {
  let text;
  let person = prompt("Введите свое имя:", "Киберхуй");
  if (person == null || person == "") {
    text = "Введи имя, заебал(а)";
  } else {
    alert("Ты точно готов(а)?");
    alert("Нихуя ты");
    window.location = "test.html?name=" + person;
  }
  document.getElementById("data").innerHTML = text;
}

function getName4Test() {
  return parseURLParams(document.URL).name[0];
}

var arr = ["Нихуя ты даешь", "Пойти поспи", "шо с тобой дядя чы тьотя", "Слава Украине", "Батько наш Бандера", "оооой бляяяя", "Я Гитлер, вам всем пи#дец"];

function ogo() {
  alert(arr[Math.floor(Math.random() * 7)]);
}