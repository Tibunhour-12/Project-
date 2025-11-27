"use strict";
<script>
        // JavaScript for handling the form submission (since alert is forbidden)
        function handleSignIn(event) {
            event.preventDefault();
            const form = event.target;
            const button = form.querySelector('.sign-in-button');
            
            // Temporary message box replacement
            button.textContent = 'Logging In...';
            button.style.backgroundColor = '#9ca3af'; // gray color
            button.disabled = true;

            setTimeout(() => {
                // In a real app, this would check credentials and redirect
                const message = document.createElement('div');
                message.textContent = 'Sign-in attempt complete.';
                message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: green; color: white; padding: 10px 20px; border-radius: 5px; z-index: 1000;';
                document.body.appendChild(message);
                
                button.textContent = 'Sign in';
                button.style.backgroundColor = 'var(--primary-blue)';
                button.disabled = false;
                form.reset();
                
                setTimeout(() => message.remove(), 3000);
            }, 1500);
        }
        
        // JavaScript for the return button (optional)
        document.querySelector('.return-button').addEventListener('click', () => {
             const message = document.createElement('div');
             message.textContent = 'Navigating back...';
             message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: var(--primary-blue); color: white; padding: 10px 20px; border-radius: 5px; z-index: 1000;';
             document.body.appendChild(message);
             setTimeout(() => message.remove(), 2000);
        });
    </script>