document.getElementById('logoutBtn').onclick = function () {
    // Simulate logging out
    alert('You have successfully logged out.');
    // Redirect to login page
    window.location.href = 'login.html';
};

document.getElementById('cancelBtn').onclick = function () {
    // Go back to the previous page or home
    window.history.back();
};
