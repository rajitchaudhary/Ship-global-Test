document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');

    headers.forEach(header => {
        // handle on click event
        header.addEventListener('click', function() {
            const section = this.parentElement;
            const content = section.querySelector('.accordion-content');

            if (section.classList.contains('active')) {
                // Close the clicked content
                section.classList.remove('active');
                content.style.maxHeight = null;
            } else {
                // Close any other open sections
                closeOtherSections();

                // Open the clicked content
                section.classList.add('active');
                content.style.maxHeight = content.scrollHeight + "px";
            }
        });
    });
// code for closing all other sections
    function closeOtherSections() {
        const allSections = document.querySelectorAll('.accordion-section');
        allSections.forEach(section => {
            section.classList.remove('active');
            section.querySelector('.accordion-content').style.maxHeight = null;
        });
    }
});
