$(document).ready(function() {
    // Function to load module content dynamically
    $('#sidebar .nav-link').click(function(event) {
        event.preventDefault();  // Prevent default anchor behavior
        const moduleFile = $(this).data('module');  // Get the module file from data attribute

        // Load the selected module content into the #moduleContent div
        $('#moduleContent').load(moduleFile, function(response, status, xhr) {
            if (status == "error") {
                $('#moduleContent').html("<p>Sorry, the content could not be loaded.</p>");
            }
        });

        // Highlight the active module link
        $('#sidebar .nav-link').removeClass('active');
        $(this).addClass('active');
    });
});
