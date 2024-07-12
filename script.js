document.addEventListener("DOMContentLoaded", function() {
    const shareButton = document.getElementById('share-button');
    const sharePopup = document.getElementById('share-popup');

    shareButton.addEventListener('click', function() {
        if (sharePopup.style.display === 'flex') {
            sharePopup.style.display = 'none';
        } else {
            sharePopup.style.display = 'flex';
        }
    });

    document.addEventListener('click', function(event) {
        if (!shareButton.contains(event.target) && !sharePopup.contains(event.target)) {
            sharePopup.style.display = 'none';
        }
    });
});
