let noCount = 0;

function handleYes() {
    document.getElementById('question').style.display = 'none';
    document.getElementById('buttonContainer').style.display = 'none';
    document.querySelector('.heart').textContent = '❤️';
    document.getElementById('dateDetails').style.display = 'block';
}

function handleNo() {
    noCount++;
    const container = document.getElementById('container');
    container.classList.add('shake');
    
    setTimeout(() => {
        container.classList.remove('shake');
    }, 500);

    if (noCount === 1) {
        document.getElementById('question').textContent = 'Σε παρακαλώ;';
    } else if (noCount === 2) {
        document.getElementById('question').textContent = 'Σε παρακαλωωω;';
    } else if (noCount === 3) {
        document.getElementById('question').textContent = 'Σε παρακαλωωωωωω;';
    } else if (noCount >= 4) {
        document.getElementById('question').textContent = 'Ει! Θα είσαι!';
        document.getElementById('noBtn').style.display = 'none';
        document.querySelector('.heart').textContent = '😤';
    }
}

// Event listeners
document.addEventListener('DOMContentLoaded', () => {
    document.getElementById('yesBtn').addEventListener('click', handleYes);
    document.getElementById('noBtn').addEventListener('click', handleNo);
});
