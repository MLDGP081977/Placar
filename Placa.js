let score1 = 0;
let score2 = 0;

// Função para adicionar pontos
function addPoints(team, points) {
  if (team == 1) {
    score1 += points;
    document.getElementById("score1").textContent = score1;
  } else if (team == 2) {
    score2 += points;
    document.getElementById("score2").textContent = score2;
  }
}

function subtractPoints(team) {
  if (team == 1 && score1 > 0) {
    score1 -= 1;
    document.getElementById("score1").textContent = score1;
  } else if (team == 2 && score2 > 0) {
    score2 -= 1;
    document.getElementById("score2").textContent = score2;
  }
}

function resetScores() {
  score1 = 0;
  score2 = 0;
  document.getElementById("score1").textContent = score1;
  document.getElementById("score2").textContent = score2;
}
