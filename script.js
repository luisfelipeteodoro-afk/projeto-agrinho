function checkAnswer(isCorrect, selectedButton) {
    const feedbackDiv = document.getElementById('feedback');
    const allButtons = document.querySelectorAll('.option-btn');

    if (!feedbackDiv || !selectedButton) return;

    // 1. Desabilita e estiliza todos os botões de uma vez
    allButtons.forEach(button => {
        button.disabled = true;
        button.classList.add('disabled-option');
    });

    // 2. Destaca o botão que o usuário clicou
    selectedButton.classList.remove('disabled-option');
    selectedButton.classList.add(isCorrect ? 'selected-correct' : 'selected-wrong');

    // 3. Configura e exibe o feedback
    feedbackDiv.classList.remove('hidden');
    feedbackDiv.className = `feedback ${isCorrect ? 'correct' : 'wrong'}`;
    
    feedbackDiv.textContent = isCorrect 
        ? "🏆 Parabéns! Você agiu como um verdadeiro cidadão digital. Investigar antes de compartilhar evita a propagação de fake news geradas por IA."
        : "❌ Não é a melhor opção. Compartilhar sem checar ou interagir com posts falsos ajuda a espalhar desinformação. O correto é sempre checar as fontes.";
}
