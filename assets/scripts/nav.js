// code for the side bars

// Function to toggle sidebar visibility
function toggleSidebar(sidebarId) {
    const sidebar = document.getElementById(sidebarId);
    const overlay = document.getElementById('overlay');

    if (sidebar.classList.contains('show')) {
        sidebar.classList.remove('show');
        overlay.classList.remove('show');
    } else {
        // Hide all sidebars first
        document.querySelectorAll('.sidebar').forEach(function (s) {
            s.classList.remove('show');
        });

        sidebar.classList.add('show');
        overlay.classList.add('show');
    }
}


document.getElementById('icon1').addEventListener('click', function () {
    toggleSidebar('sidebar1');
});

document.getElementById('icon2').addEventListener('click', function () {
    toggleSidebar('sidebar2');
});

document.getElementById('icon3').addEventListener('click', function () {
    toggleSidebar('sidebar3');
});

// Add event listener to overlay to hide sidebar when clicked
document.getElementById('overlay').addEventListener('click', function () {
    document.querySelectorAll('.sidebar').forEach(function (s) {
        s.classList.remove('show');
    });
    this.classList.remove('show');
});


