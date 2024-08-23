document.addEventListener('DOMContentLoaded', () => {
    const gameContainer = document.getElementById('gameContainer');
    const games = [
        { name: 'Do You know Game', points: 25, file: 'quizGame.js' },
        { name: 'UnScramble', points: 10, file: 'Unscramble.js' },
        { name: 'Fill In Blanks Game', points: 20, file: 'fillBlanks.js' },
       
      
    ];

    games.forEach(game => {
        const gameButton = document.createElement('button');
        gameButton.textContent = `${game.name} - ${game.points} Points`;
        gameButton.addEventListener('click', () => {
            loadGame(game.file);
        });
        gameContainer.appendChild(gameButton);
    });

    function loadGame(gameFile) {
        const script = document.createElement('script');
        script.src = `games/${gameFile}`;
        document.body.appendChild(script);
    }

    const bookingForm = document.getElementById('bookingForm');
    bookingForm.addEventListener('submit', function (event) {
        event.preventDefault();
        alert('Your trip has been booked! We will contact you shortly.');
        
    });
});
