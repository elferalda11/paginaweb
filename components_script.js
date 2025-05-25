        document.addEventListener('DOMContentLoaded', () => {
            const componentSections = document.querySelectorAll('.component-section');

            componentSections.forEach(section => {
                section.addEventListener('click', () => {
                    const sectionId = section.id; // Get the ID of the clicked section
                    let targetPage = '';

                    // Determine the target page based on the section ID
                    switch (sectionId) {
                        case 'cpu-section':
                            targetPage = 'cpu.html';
                            break;
                        case 'gpu-section':
                            targetPage = 'gpu.html';
                            break;
                        case 'motherboard-section':
                            targetPage = 'motherboard.html';
                            break;
                        case 'ram-section':
                            targetPage = 'ram.html';
                            break;
                        case 'storage-section':
                            targetPage = 'storage.html';
                            break;
                        case 'psu-section':
                            targetPage = 'psu.html';
                            break;
                        case 'case-section':
                            targetPage = 'case.html';
                            break;
                        case 'cooling-section':
                            targetPage = 'coolin.html';
                            break;
                        default:
                            console.warn('Unknown component section clicked:', sectionId);
                            // Optionally, redirect to a generic error or home page
                            targetPage = 'index.html';
                            break;
                    }

                    // If a target page is determined, navigate to it
                    if (targetPage) {
                        window.location.href = targetPage;
                    }
                });
            });
        });