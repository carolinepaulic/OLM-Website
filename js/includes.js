//Loads common elements when page is loaded.
(function() {
    var loadIncludes = function() {
        $("#head-resources").load("head.html");
        $("#navigation").load("navigation.html"); //The div to replace followed by the name of the file to replace it with
        $("#footer").load("footer.html");
    };
    $(document).ready(function() {
        loadIncludes();
    });
})();