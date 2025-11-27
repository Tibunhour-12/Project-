  "use strict";
  <script>
        // JavaScript for handling the form submission (since alert is forbidden)
        function handleSignUp(event) {
            event.preventDefault();
            const form = event.target;
            const button = form.querySelector('.sign-up-button');
            
            // Temporary message box replacement
            button.textContent = 'Processing...';
            button.style.backgroundColor = '#9ca3af'; // gray color
            button.disabled = true;

            setTimeout(() => {
                // Simulate form success
                const message = document.createElement('div');
                message.textContent = 'Account created successfully!';
                message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: green; color: white; padding: 10px 20px; border-radius: 5px; z-index: 1000;';
                document.body.appendChild(message);
                
                button.textContent = 'Sign Up';
                button.style.backgroundColor = 'var(--primary-blue)';
                button.disabled = false;
                form.reset();
                
                setTimeout(() => message.remove(), 3000);
            }, 1500);
        }
        
        // JavaScript for the back button (optional)
        function handleBack() {
             const message = document.createElement('div');
             message.textContent = 'Navigating back...';
             message.style.cssText = 'position: fixed; top: 20px; right: 20px; background: var(--primary-blue); color: white; padding: 10px 20px; border-radius: 5px; z-index: 1000;';
             document.body.appendChild(message);
             setTimeout(() => message.remove(), 2000);
        }
    </script>