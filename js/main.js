window.onload = function () {
    var job = document.querySelector(".bigtitle__job");
    var logo = document.querySelector(".bigtitle__anthonydouardlogo");

    setTimeout(function () {
        job.style.opacity = "1";
        logo.style.opacity = "1";
    }, 100);

    var color = document.querySelector(".bigtitle__backgroundcolor");

    setTimeout(function () {
        color.style.backgroundColor = "rgba(0, 45, 41, 0.75)";
    }, 100);
};

/* Fonction qui appelle le menu en Ajax
 * Retourne le fichier menu.html
 */
function displayMenu() {
    var d = new Date();
    var str = "n=" + d.getTime();

    var XHR = new XMLHttpRequest();

    /*** Traitement de la réponse. ***/
    XHR.onreadystatechange = function () {
        if (XHR.readyState === 4 && XHR.status === 200) {
            var bigtitleText = document.querySelector(".bigtitle__text");
            bigtitleText.style.opacity = "0";

            // La réponse se trouve dans XHR.responseText
            setTimeout(function () {
                bigtitleText.outerHTML = "";
                document.getElementById("ajax__receiver").innerHTML += XHR.responseText;
            }, 300);
        }
    };
    /*********************************/

    XHR.open("GET", "menu.html", true);
    XHR.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
    XHR.send(str);

}