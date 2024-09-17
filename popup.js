document.addEventListener('DOMContentLoaded', function() {
    const button = document.querySelector('.button');
    const container = document.querySelector('.container');
    
    button.addEventListener('click', function() {
        // Get the active tab
        chrome.tabs.query({active: true, currentWindow: true}, function(tabs) {
            const currentTab = tabs[0];
            const title = currentTab.title;

            // Display the title inside the container div
            const titleElement = document.createElement('p');
            titleElement.textContent = `${title}`;
            container.appendChild(titleElement);

            // Hide the button after the title is displayed
            button.style.display = 'none';
        });
    });
});
