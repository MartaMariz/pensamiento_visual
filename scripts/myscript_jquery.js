$(function () {
    function hideExample() {
        $(".example").hide();
    }
    function addText(){
        $("#text2 p").append("Yellow");

    }

    $("#button2").on("click", hideExample);
    $("#button3").on("click", addText);

});
