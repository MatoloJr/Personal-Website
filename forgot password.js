document.getElementById('sendCodeBtn').onclick = function () {
    const contact = document.getElementById('contact').value;
    const method = document.getElementById('verificationMethod').value;
    // Simulate sending verification code
    console.log(`Sending verification code to ${contact} via ${method}`);
    document.getElementById('verificationSection').style.display = 'block';

    // Start timer for verification code expiry
    setTimeout(() => {
        alert('Verification code has expired!');
    }, 60000); // 1 minute expiration
};

document.getElementById('verifyCodeBtn').onclick = function () {
    const verificationCode = document.getElementById('verificationCode').value;
    // Simulate code verification
    console.log(`Verifying code: ${verificationCode}`);
    // If successful, show new password fields
    // Add captcha verification logic here
};
