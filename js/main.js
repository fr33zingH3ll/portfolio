function setActive(tabId) {
    const onglets = document.querySelectorAll('.onglet');

    onglets.forEach(onglet => {
        if (onglet.id === tabId) {
            onglet.classList.add('active');
        } else {
            onglet.classList.remove('active');
        }
    });
}