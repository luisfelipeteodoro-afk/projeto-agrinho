/* Configurações Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
}

body {
    background-color: #f0f4f8;
    color: #333;
    line-height: 1.6;
}

/* Cabeçalho */
header {
    background: linear-gradient(135deg, #1e3c72, #2a5298);
    color: white;
    text-align: center;
    padding: 3rem 1rem;
    box-shadow: 0 4px 6px rgba(0,0,0,0.1);
}

header h1 {
    font-size: 2.5rem;
    margin-bottom: 0.5rem;
}

/* Layout Principal */
.container {
    max-width: 900px;
    margin: 2rem auto;
    padding: 0 1rem;
}

.card {
    background: white;
    padding: 2rem;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.05);
    margin-bottom: 2rem;
}

h2 {
    color: #1e3c72;
    margin-bottom: 1rem;
}

/* Pilares (Grid de Informações) */
.pillars {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
}

.pillar-box {
    background-color: #f8fafc;
    border-left: 4px solid #2a5298;
    padding: 1rem;
    border-radius: 4px;
}

.pillar-box h3 {
    color: #2a5298;
    margin-bottom: 0.5rem;
}

/* Estilização do Quiz */
.quiz-container {
    background-color: #f8fafc;
    padding: 1.5rem;
    border-radius: 8px;
    margin-top: 1rem;
}

.question {
    margin-bottom: 1rem;
    font-size: 1.1rem;
}

.options {
    display: flex;
    flex-direction: column;
    gap: 0.8rem;
}

.option-btn {
    background-color: white;
    border: 2px solid #cbd5e1;
    padding: 0.8rem 1rem;
    border-radius: 6px;
    cursor: pointer;
    text-align: left;
    font-size: 1rem;
    transition: all 0.2s ease;
}

.option-btn:hover {
    background-color: #e2e8f0;
    border-color: #94a3b8;
}

/* Feedback do Quiz */
.feedback {
    margin-top: 1rem;
    padding: 1rem;
    border-radius: 6px;
    font-weight: bold;
}

.feedback.correct {
    background-color: #d1fae5;
    color: #065f46;
    border: 1px solid #10b981;
}

.feedback.wrong {
    background-color: #fee2e2;
    color: #991b1b;
    border: 1px solid #ef4444;
}

.hidden {
    display: none;
}

/* Rodapé */
footer {
    text-align: center;
    padding: 2rem;
    color: #64748b;
    font-size: 0.9rem;
}
