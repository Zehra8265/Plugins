$(document).ready(function () {
    $("#save-btn").click(function () {
        const list = $('#save').val();
        $("ol").append('<li>'+list+'</li>');
        $('#save').val("")
    });
    $("#search-btn").click(function () {
        const text = $('#search').val().toLowerCase().trim();
        $("ol li").filter(function () {
            return $(this).text().toLowerCase().trim().indexOf(text) ==-1
        }).hide();
        $('#search').val("")
    });
})