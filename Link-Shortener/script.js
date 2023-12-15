const shortBtn = document.getElementById('short-btn');
const reloadBtn = document.getElementById('reload-btn');

shortBtn.addEventListener('click', shortenUrl);

function shortenUrl() {
    var originalUrl = document.getElementById("originalUrl").value;
    var apiUrl = "https://tinyurl.com/api-create.php?url=" + encodeURIComponent(originalUrl);

    shortenedUrlTextarea = document.getElementById("shortenedUrl");

    fetch(apiUrl).then(response => response.text()).then(data => {
        shortenedUrlTextarea.value = data;
    }).catch(error => {
        shortenedUrlTextarea.value = "Error : Unable to shorten URL!";
    });
}

reloadBtn.addEventListener('click', () => {
    location.reload();
});


/* ------------------------ For copy button ------------------------ */
let newURL = document.getElementById('shortenedUrl');
let copyButton = document.getElementById('copy');

copyButton.onclick = () => {
    // newURL.select();

    window.navigator.clipboard.writeText(newURL.value);
    alert('Successfully copied to clipboard!');
}
