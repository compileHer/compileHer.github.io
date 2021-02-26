$("#filters :checkbox").click(function() {
    $("div").hide();
    $("#filters :checkbox:checked").each(function() {
        $("." + $(this).val()).show();
    });
 });

