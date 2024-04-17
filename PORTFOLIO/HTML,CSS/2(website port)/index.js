function darkMode() {
    const body = document.body;
    
    // Toggle background color of body
    if (body.style.backgroundColor === 'black' || body.style.backgroundColor === '') {
        body.style.backgroundColor = 'white';
    } else {
        body.style.backgroundColor = 'black';
    }

    // Toggle text color
    const textElements = document.querySelectorAll('.text-color, .skill p, .education-experience p, .education-experience h4');
    textElements.forEach(text => {
        if (text.style.color === 'white' || text.style.color === '') {
            text.style.color = 'black';
        } else {
            text.style.color = 'white';
        }

        // Add hover effect
        text.addEventListener('mouseover', function () {
            this.style.color = '#f6b000'; // Change text color on hover
        });

        // Remove hover effect
        text.addEventListener('mouseout', function () {
            // Check if the text should be in light or dark mode
            const bodyColor = body.style.backgroundColor;
            if (bodyColor === 'black') {
                this.style.color = 'white'; // Change text color to white in dark mode
            } else {
                this.style.color = 'black'; // Change text color to black in light mode
            }
        });
    });
}