

document.addEventListener('DOMContentLoaded', () => {
    const bookingForm = document.getElementById('bookingform');
    const signinForm = document.getElementById('signinform');
    const signupForm = document.getElementById('signupform');

    if (bookingForm) {
        bookingForm.addEventListener('submit', (event) => {
            event.preventDefault();
            Swal.fire({
                title: 'Success!',
                text: 'Car booked successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        });
    }
    if (signinForm) {
        signinForm.addEventListener('submit', (event) => {
            event.preventDefault();
            Swal.fire({
                title: 'Welcome!',
                text: 'Signed in successfully!',
                icon: 'success',
                confirmButtonText: 'OK'
            });
        });
    }

    if (signupForm) {
        signupForm.addEventListener('submit', (event) => {
            event.preventDefault();
            const password = document.getElementById('signupPassword').value;
            const confirmPassword = document.getElementById('signupConfirmPassword').value;

            if (password === confirmPassword) {
                Swal.fire({
                    title: 'Success!',
                    text: 'Signed up successfully!',
                    icon: 'success',
                    confirmButtonText: 'OK'
                });
            } else {
                Swal.fire({
                    title: 'Error!',
                    text: 'Passwords do not match.',
                    icon: 'error',
                    confirmButtonText: 'OK'
                });
            }
        });
    }
});
