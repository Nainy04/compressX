document.getElementById('file-input').addEventListener('change', handleFileUpload);

function handleFileUpload(event) {
    const file = event.target.files[0]; 
    const errorDiv = document.getElementById('error-message'); 

    errorDiv.textContent = "";

    if (file) {
        const maxSize = 50 * 1024 * 1024; 

        if (file.size > maxSize) {
            errorDiv.textContent = "Error: File size exceeds 50 MB. Please try a smaller file.";
        } else {
            errorDiv.textContent = `File "${file.name}" uploaded successfully!`;
        }
    } else {
        errorDiv.textContent = "No file selected.";
    }
}
