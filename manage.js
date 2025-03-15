document.getElementById('manageForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const userId = this[0].value;
    const action = this[1].value;
    const amount = this[2].value;
    // Simuler une action (à connecter à ton bot via une API)
    alert(`Managing ${userId}: ${action} +${amount}`);
    // Ajouter à la liste des utilisateurs (simulation)
    const userList = document.getElementById('userList');
    userList.innerHTML += `<p>User ${userId}: ${action} increased by ${amount}</p>`;
});
