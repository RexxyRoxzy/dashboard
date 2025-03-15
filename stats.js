// Simuler des données (à connecter à ton bot via une API plus tard)
const stats = {
    serverCount: 15,
    userCount: 250,
    commandCount: 1200
};

document.getElementById('serverCount').textContent = stats.serverCount;
document.getElementById('userCount').textContent = stats.userCount;
document.getElementById('commandCount').textContent = stats.commandCount;
