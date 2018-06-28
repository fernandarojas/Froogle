$("#find-item").on("click", function(event) { 
    event.preventDefault(); 

    wallmartApi();
    eBayApi();
});

function wallmartApi() {
    var item = $("#item-input").val().trim();
    var queryURL = "http://api.walmartlabs.com/v1/search?apiKey=rq6dj88wfdksdssv8d2szvq8&query=" + item;

    $.ajax({
        url: queryURL,
        dataType: "jsonp",
        type: "GET"
        }).then(function(response) {
            console.log(response);
        });
};

function eBayApi() {
    var item = $("#item-input").val().trim();
    var AppID = "Fernanda-BootCamp-PRD-b2ccbdebc-910ac0b8",
        keywords = encodeURI(item),
        queryURL = "http://svcs.ebay.com/services/search/FindingService/v1?OPERATION-NAME=findItemsByKeywords&SERVICE-VERSION=1.0.0&SECURITY-APPNAME=";
        queryURL += AppID;
        queryURL += "&RESPONSE-DATA-FORMAT=JSON&REST-PAYLOAD&keywords=";
        queryURL += keywords;

    $.ajax({
        url: queryURL,
        dataType: "jsonp",
        type: "GET"
        }).then(function(response) {
            console.log(response);

            for (var i = 0; i < response.length; i++) { 

                var itemName = response.searchResult.item[i];
                console.log(itemName);
            }
            

        });
};