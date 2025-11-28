function showSection(sectionId, element) {
    // Hide all sections
    document.querySelectorAll('.content-section').forEach(section => {
        section.classList.remove('active');
    });

    // Remove active class from all nav items
    document.querySelectorAll('.nav-item').forEach(item => {
        item.classList.remove('active');
    });

    // Show selected section
    document.getElementById(sectionId).classList.add('active');
    element.classList.add('active');

    // Update page title
    const titles = {
        'overview': 'Visão Geral',
        'objectives': 'Objetivos',
        'methodology': 'Metodologia',
        'team': 'Equipe',
        'results': 'Resultados'
    };
    document.getElementById('pageTitle').textContent = titles[sectionId];

    // Close mobile menu
    if (window.innerWidth <= 768) {
        toggleMenu();
    }
}

function toggleMenu() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.querySelector('.overlay');
    sidebar.classList.toggle('active');
    overlay.classList.toggle('active');
}