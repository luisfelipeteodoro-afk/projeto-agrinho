function checkAnswer(isCorrect, selectedButton) {
    const feedbackDiv = document.getElementById('feedback');
    const allButtons = document.querySelectorAll('.option-btn');

    // Desabilita todos os botões após a escolha para o usuário não clicar várias vezes
    allButtons.forEach(button => {
        button.disabled = true;
        button.style.opacity = '0.6';
    });

    // Destaca o botão selecionado
    selectedButton.style.opacity = '1';

    // Mostra o feedback baseado na resposta
    feedbackDiv.classList.remove('hidden');
    
    if (isCorrect) {
        feedbackDiv.textContent = "🏆 Parabéns! Você agiu como um verdadeiro cidadão digital. Investigar antes de compartilhar evita a propagação de fake news geradas por IA.";
        feedbackDiv.className = "feedback correct";
        selectedButton.style.borderColor = "#10b981";
        selectedButton.style.backgroundColor = "#d1fae5";
    } else {
        feedbackDiv.textContent = "❌ Não é a melhor opção. Compartilhar sem checar ou interagir com posts falsos ajuda a espalhar desinformação. O correto é sempre checar as fontes.";
        feedbackDiv.className = "feedback wrong";
        selectedButton.style.borderColor = "#ef4444";
        selectedButton.style.backgroundColor = "#fee2e2";
    }
}
