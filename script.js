const listScoreCard = document.querySelector('.list-score-card');

const data = async () => {
  return await fetch('./data.json').then(res => res.json());
};

const fetchData = async () => {
  const result = await data().then(res => res);

  for (let card of result) {
    const scoreCard = document.createElement('div')
    scoreCard.className = 'score-card'
    scoreCard.style.backgroundColor = card.backgroundColor

    scoreCard.innerHTML = `
      <div class="logo-title">
        <img src="${card.icon}" alt="${card.category}">
        <p class="title" style="color: ${card.textColor};">${card.category}</p>
      </div>

      <div class="score">
        <p class="current-score">${card.score}</p>
        <p class="of-score">/</p>
        <p class="of-score">100</p>
      </div>
    `

    listScoreCard.appendChild(scoreCard)
  }
};

fetchData();
