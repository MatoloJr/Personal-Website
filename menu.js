document.getElementById('settingsForm').onsubmit = function (event) {
    event.preventDefault(); // Prevent form submission for demo
    const language = document.getElementById('language').value;
    const currency = document.getElementById('currency').value;
    const theme = document.getElementById('theme').value;
    const twoFAEnabled = document.getElementById('twoFA').checked;
    const profileVisibility = document.getElementById('profileVisibility').value;

    // Simulate saving settings
    console.log(`Settings saved: Language - ${language}, Currency - ${currency}, Theme - ${theme}, 2FA - ${twoFAEnabled}, Profile Visibility - ${profileVisibility}`);
    alert('Settings updated successfully!');
};
