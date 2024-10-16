// Update profile picture
document.getElementById('uploadPic').addEventListener('change', function (event) {
    const file = event.target.files[0];
    if (file) {
        const reader = new FileReader();
        reader.onload = function (e) {
            document.getElementById('profilePic').src = e.target.result;
        };
        reader.readAsDataURL(file);
    }
});

// Save profile changes
document.getElementById('profileForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission for demo
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const phone = document.getElementById('phone').value;
    const dob = document.getElementById('dob').value;
    const location = document.getElementById('location').value;

    // Simulate saving profile changes
    console.log(`Saving profile changes: ${username}, ${email}, ${phone}, ${dob}, ${location}`);
    alert('Profile updated successfully!');
};
