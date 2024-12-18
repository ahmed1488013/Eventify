// RSVP Button Interaction
document.querySelectorAll('.rsvp-button').forEach(button => {
    button.addEventListener('click', () => {
        alert('You have successfully RSVP\'d to the event!');
        button.style.backgroundColor = '#1565C0';
        setTimeout(() => button.style.backgroundColor = '#1976D2', 2000);
    });
});

// Invite Button Interaction
const inviteButtons = document.querySelectorAll('.invite-button');
inviteButtons.forEach(button => {
    button.addEventListener('click', () => {
        button.innerHTML = 'Invitation Sent!';
        button.style.backgroundColor = '#FF9800';
        setTimeout(() => {
            button.innerHTML = 'Invite';
            button.style.backgroundColor = '#FFC107';
        }, 2000);
    });
});
