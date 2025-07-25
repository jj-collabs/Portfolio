function thankUser() {
  alert("Thank you for reaching out! I’ll get back to you soon.");
}

function openModal() {
    const imageModal = document.getElementById('imageModal');
    imageModal.style.display = 'flex';

    // Zoom out the page to 25% by scaling the body
    document.body.style.transform = 'scale(0.25)';
    document.body.style.transformOrigin = 'top left'; // Ensures scaling from the top-left corner
    document.body.style.width = '400%'; // Adjust width to fill the scaled viewport
    document.body.style.height = '400%'; // Adjust height to fill the scaled viewport
    document.body.style.overflow = 'auto'; // Allow scrolling if content overflows
}

function closeModal() {
    const imageModal = document.getElementById('imageModal');
    imageModal.style.display = 'none';

    // Reset the page zoom when the modal is closed
    document.body.style.transform = 'scale(1)';
    document.body.style.transformOrigin = 'top left';
    document.body.style.width = '100%';
    document.body.style.height = 'auto'; // Or '100vh' if you want it to always fill the viewport height
    document.body.style.overflow = 'auto';
}
