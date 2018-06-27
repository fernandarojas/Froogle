$("#find-item").on("click", function(event) { 
    event.preventDefault(); 

    var item = $("#item-input").val().trim();

    var queryURL = "https://api.ebay.com/buy/browse/v1/item_summary/search?q=" + item + "&limit=3" ;


    $.ajax({
        url: queryURL,
        headers: { 
            'Authorization':'Bearer v^1.1#i^1#r^0#f^0#I^3#p^3#t^H4sIAAAAAAAAAOVXe2wURRjv9YW1LYhRxELIsagx4N7N7N5r197h0Ue4SK8n1zaAmDK7O9su7O2eO3uUwyi1RtQACRrS+IeBJoCvGB8xKkaD1AQQiIJGkyZKIBITokZNgKBAwNnrg2sNLW35o4n95zoz3+P3/b7ft5kBnaVlCzcv3Xyx0jWtsKcTdBa6XLAclJWWLJpeVFhVUgDyDFw9nfd1FncVna0mKKWnxeWYpE2DYPeGlG4QMbcZZjKWIZqIaEQ0UAoT0ZbFZLRhmch5gJi2TNuUTZ1xx2rDTICDajAIAkG/gAGUJbprDMZsMsNMkFcg8gGBU4KqDyJMzwnJ4JhBbGTYYYYDMMSCAMsFmwAQeV6E0AMDvlWMuwVbRDMNauIBTCQHV8z5WnlYR4eKCMGWTYMwkVi0PtkYjdXWxZuqvXmxIgM8JG1kZ8jwVY2pYHcL0jN49DQkZy0mM7KMCWG8kf4Mw4OK0UEwE4Cfo5oLyaofhZAg4AAvCIFbQmW9aaWQPToOZ0dTWDVnKmLD1uzsWIxSNqS1WLYHVnEaIlbrdn4eyyBdUzVshZm6JdGVzcm65Yw7mUhY5npNwYpTKQR+3gc4GOKYiGqZaxGRB1L0xxkgeESOGtNQNIcu4o6b9hJM8eKRrHB5rFCjRqPRiqq2gyXfjhtkzy+sctrZ37+M3W44HcUpSoE7txyb+0ExXG//rZIDzyucpADI+wS/FJSFG8jBmfVxSSLidCWaSHgdLFhCWTaFrHXYTutIxqxM6c2ksKUpIu9XOT6kYlYJCCrrE1SVlfxKgIUqxgBjSZKF0P9DGbZtaVLGxkPqGHmQKy/MJGUzjROmrslZZqRJ7jszoIUNJMy023Za9Ho7Ojo8HbzHtNq8HADQu6JhWVJuxynEDNlqYxuzWk4VMv38UnvRzqYpmg1UdDS50cZEeEtJIMvOJrGu041ByQ7DFhm5e4MiiVPk1CrP8Sc0AEprHkfRHtlMeU1EJ9jZas0hdt+MkZdQgjz980AjeyyMFNPQsxNxHoePZqynojKt7BgJnVkfPcA4kiJZNjOGPZEaB1zH4aFmdFXTdWd2JpIwz308MA2kZ21NJkMpJyX8aDodU6aW8OuxZSBDQewS07RrUCrNJpbXshIny5KCJZkVIEAykEKTqruhTZtiZUMfJ/h8HKBeIDCp2mrx+qnWUwic6zQo7iqMSywPgcD6FBWwiKf/ySgY8GE6fnIITaruGl2js9SUnWpf8qUmsbEyudLoJWpqFeXM5OBIIswFWEmFgPXxAs9KzjIkc8GbLdl7wxvJf66h3uEvwEhB7g92uT4CXa4P6CMSeMH9cAGYX1rUXFxUUUU0G3s0pHqI1mbQh42FPetwNo00q7DU9fjc999qzXtz9jwBZg+9OsuKYHneExTMvX5SAmfcUwlDIMAFAeB5CFeBBddPi+Gs4rsq3nnEKjlxlJdmPvrt+T2Zc6c/fX0pqBwycrlKCoq7XAVnlr1XVn3kYODdTWbr4h/+fMh/25W+aR3BXV/s6+vb0jlnWvelLx94dtFT8/d9eOxab99K99/+hZGvzm26e6anck+0O1sYWnf+3nLx+Lavd8ZO/7Xmt/YDF+b9sV+bfmr39rmrn+/9fPWly2dnNx8/Ger5ZeYnXPIMyWz9p2LO1SNvngpVNb3CXnjmsr8bXt3b+eOVhhlv1CobK3pf/fX7309vLJ9+qPGo+PCxXbfPUnecKDn3UuTg6tAV8+e6i2/vfLr9NaW5cvudXeTAxjuem/fNthfaflp5tio+p1d/Od734sfRNS2RQ4d3nNy/Y2/r2u+qexd7649V735we13TCqG0oXtr+snPrsU3lbW1HD64cH5/+/4FFBWaaA0QAAA=',
            'Content-Type':'application/json',
            'X-EBAY-C-ENDUSERCTX':'affiliateCampaignId=<ePNCampaignId>,affiliateReferenceId=<referenceId>'
        },
        dataType: 'jsonp',
        method: "GET"
        }).then(function(response) {
            console.log(response);
            
            $("#items-view").text(JSON.stringify(response));
        })
});

//B0198TV01Q