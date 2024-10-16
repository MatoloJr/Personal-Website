document.getElementById('downloadBtn').onclick = function () {
    // Redirect to the appropriate download link
    const userOS = navigator.platform.toLowerCase();
    if (userOS.includes('win')) {
        window.location.href = 'download/windows';
    } else if (userOS.includes('mac')) {
        window.location.href = 'download/mac';
    } else if (userOS.includes('android')) {
        window.location.href = 'download/android';
    } else if (userOS.includes('iphone') || userOS.includes('ipad')) {
        window.location.href = 'download/ios';
    } else {
        alert('Your device is not supported.');
    }
};

document.getElementById('androidDownload').onclick = function () {
    window.location.href = 'download/android';
};

document.getElementById('iosDownload').onclick = function () {
    window.location.href = 'download/ios';
};
