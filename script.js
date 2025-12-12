function toggleMenu() {
            const menu = document.querySelector('.menu');
            menu.classList.toggle('active');
        }

        function validateForm() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;
            if (!name || !email || !message) {
                alert("Please fill out all fields.");
                return false;
            }
            alert("Thank you for your message!");
            return true; 
        }