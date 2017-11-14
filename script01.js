// Run some jquery
$(document).ready(function(){
    // When search is clicked run code
    $('#search').click(function(){
        // Gets search input
        let searchTerm = $('#searchTerm').val();
        //Api url with searchTerm
        let url = "https://en.wikipedia.org/w/api.php?action=opensearch&search=" + searchTerm + "&format=json&callback=?"

        $.ajax({
            type:"GET",
            url: url,
            async: false,
            dataType: "json",
            success: function(data){
                //console.log(data[1][0]);
                //console.log(data[2][0]);
                $('#output').html('');
                for (let i = 0; i < data[1].length; i++){
                $('#output').prepend("<li><a href = " + data[3][i] +">" + data[1][i] +"</a><p>" + data[2][i]+"</p></li>");
                }

            },
            error: function(errorMessage){
                alert("Error");
            }


        });

    });
});
// Trigger HTML button when you press enter
$("#searchTerm").keyup(function(event) {
    if (event.keyCode === 13) {
        $("#search").click();
    }
});