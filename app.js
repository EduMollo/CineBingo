const categories = [
  {
    id: 'geral', label: 'Todos os filmes', emoji: '🎬', overline: 'CARTELA PARA TODO FILME',
    items: [
      'Abertura de arrepiar', 'Trilha sonora marcante', 'Atuação de respeito', 'Cena que vira meme', 'Reviravolta boa',
      'Diálogo que fica', 'Visual de encher os olhos', 'Vilão memorável', 'Herói improvável', 'Amizade verdadeira',
      'Silêncio que diz tudo', 'Final surpreendente', 'Cena para rever', 'Detalhe escondido', 'Personagem rouba a cena',
      'Plano sequência', 'Momento de tensão', 'Risada inesperada', 'Lágrima escapou', 'Química no elenco',
      'Frase de efeito', 'Câmera criativa', 'Começo que prende', 'Final que satisfaz', 'Referência esperta',
      'Cena pós-créditos', 'Objeto importante volta', 'Pista bem plantada', 'Montagem incrível', 'Figurino impecável',
      'Cenário com personalidade', 'Mudança de coração', 'Dupla perfeita', 'Entrada triunfal', 'Escolha difícil',
      'Aplauso no final', 'Comida com destaque', 'Dança inesperada', 'Cena à noite', 'Título faz sentido'
    ]
  },
  {
    id: 'acao', label: 'Ação', emoji: '💥', overline: 'CARTELA DE AÇÃO',
    items: [
      'Explosão bem na hora', 'Perseguição insana', 'Herói sai ileso', 'Entrada em câmera lenta', 'Luta coreografada',
      'Salto impossível', 'Plano que dá errado', 'Vilão faz discurso', 'Contagem regressiva', 'Carro vira sucata',
      'Frase antes do golpe', 'Aliado aparece do nada', 'Missão quase impossível', 'Arma fica sem bala', 'Fuga pelo telhado',
      'Disfarce revelado', 'Confronto no final', 'Prédio em perigo', 'Óculos escuros à noite', 'Equipe se reúne',
      'Herói protege alguém', 'Traição na equipe', 'Ataque surpresa', 'Perseguição a pé', 'Elevador dramático',
      'Luta na chuva', 'Mapa ou plano na mesa', 'Explosão ao fundo', 'Gadget salvador', 'Duelo de olhares',
      'Vilão subestima herói', 'Resgate no último segundo', 'Música na batalha', 'Veículo improvável', 'Porta arrombada',
      'Câmera acompanha a luta', 'Treino acelerado', 'Grande fuga', 'Herói perde a calma', 'Missão cumprida'
    ]
  },
  {
    id: 'terror', label: 'Terror', emoji: '👻', overline: 'CARTELA DE TERROR',
    items: [
      'Porta range sozinha', 'Alguém diz “não vá”', 'Espelho suspeito', 'Luz pisca', 'Corredor escuro',
      'Barulho no andar de cima', 'Telefone sem sinal', 'Susto no silêncio', 'Personagem se separa', 'Boneca perturbadora',
      'Olhos na escuridão', 'Casa tem segredo', 'Passos atrás de alguém', 'Chave não funciona', 'Câmera revela algo',
      'Criança sabe demais', 'Última luz se apaga', 'Fuga pela floresta', 'Ritual estranho', 'Vilão aparece no fundo',
      'Porta se fecha sozinha', 'Alguém investiga ruído', 'Foto assustadora', 'Pesadelo vira real', 'Trilha fica muda',
      'Respiração ofegante', 'Porão misterioso', 'Não era o gato', 'Janela bate', 'Falso alívio',
      'Mensagem sinistra', 'Lanterna falha', 'Sombra se move', 'Revelação monstruosa', 'Sobrevivente final',
      'Chuva na janela', 'Alguém grita “corre!”', 'Objeto muda de lugar', 'Olhar para trás', 'Fim em aberto'
    ]
  },
  {
    id: 'romance', label: 'Romance', emoji: '💘', overline: 'CARTELA DE ROMANCE',
    items: [
      'Encontro por acaso', 'Olhares se cruzam', 'Conversa até amanhecer', 'Chuva na cena', 'Primeiro beijo',
      'Amigo dá conselho', 'Mal-entendido clássico', 'Declaração sincera', 'Dança a dois', 'Quase beijo',
      'Bilhete inesperado', 'Viagem muda tudo', 'Café compartilhado', 'Presente simbólico', 'Alguém corre atrás',
      'Reencontro emocionante', 'Música do casal', 'Riso sem motivo', 'Segredo revelado', 'Abraço demorado',
      'Mão encontra mão', 'Pôr do sol perfeito', 'Ciúme discreto', 'Convite de última hora', 'Escolha pelo amor',
      'Família se intromete', 'Mensagem não enviada', 'Amor de infância', 'Inimigos se entendem', 'Carta guardada',
      'Pedido inesperado', 'Beijo interrompido', 'Aeroporto dramático', 'Encontro no mesmo lugar', 'Duas pessoas mudam',
      'Sorriso no final', 'A verdade vem à tona', 'Promessa cumprida', 'Planos para o futuro', 'Final de coração quente'
    ]
  },
  {
    id: 'comedia', label: 'Comédia', emoji: '😂', overline: 'CARTELA DE COMÉDIA',
    items: [
      'Piada que volta depois', 'Silêncio constrangedor', 'Mentira sai do controle', 'Queda espetacular', 'Dupla improvável',
      'Confusão de nomes', 'Disfarce ridículo', 'Bordão instantâneo', 'Reação exagerada', 'Plano dá muito errado',
      'Pessoa errada aparece', 'Objeto desaparece', 'Dança desajeitada', 'Jantar vira desastre', 'Alguém finge normalidade',
      'Mensagem enviada errado', 'Amigo atrapalha tudo', 'Festa fora de controle', 'Perseguição absurda', 'Animal rouba a cena',
      'Vergonha alheia', 'Quebra da quarta parede', 'Troca de identidade', 'Personagem fala demais', 'Risada no pior momento',
      'Fala com duplo sentido', 'Briga por bobagem', 'Tentativa de impressionar', 'Chefe aparece na hora', 'Desculpa impossível',
      'Reunião constrangedora', 'Surpresa atrás da porta', 'Comida voa', 'Piada visual perfeita', 'Final caótico',
      'Alguém escuta metade', 'Entrada desastrosa', 'Foto comprometedora', 'Segredo bobo', 'Todos riem juntos'
    ]
  },
  {
    id: 'ficcao', label: 'Ficção científica', emoji: '🛸', overline: 'CARTELA DE FICÇÃO',
    items: [
      'Tecnologia impressiona', 'Robô tem sentimentos', 'Viagem no tempo', 'Planeta desconhecido', 'Mensagem do espaço',
      'Cientista avisa tarde', 'Experimento dá errado', 'IA fala com calma', 'Porta automática dramática', 'Holograma aparece',
      'Regra do universo muda', 'Código salva o dia', 'Nave quase explode', 'Realidade é questionada', 'Criatura inesperada',
      'Linha do tempo confusa', 'Dilema humano', 'Luz azul misteriosa', 'Sinal desconhecido', 'Traje futurista',
      'Descoberta no laboratório', 'Protocolo secreto', 'Mundo distópico', 'Exploração espacial', 'Memória alterada',
      'Clone encontra original', 'Máquina ganha vida', 'Portal se abre', 'Contagem para o desastre', 'Solução improvável',
      'Computador diz não', 'Cidade do futuro', 'Tempo se repete', 'Alien não é vilão', 'Sacrifício pela missão',
      'Gravidade falha', 'O universo é maior', 'Mensagem do futuro', 'Tripulação em risco', 'Humanidade tem esperança'
    ]
  },
  {
    id: 'animacao', label: 'Animação', emoji: '✨', overline: 'CARTELA DE ANIMAÇÃO',
    items: [
      'Mundo cheio de cor', 'Amigo inesperado', 'Animal fala', 'Canção grudenta', 'Lição sobre crescer',
      'Vilão estiloso', 'Paisagem de sonho', 'Objeto ganha vida', 'Piada para adultos', 'Abraço coletivo',
      'Jornada para casa', 'Personagem pequeno valente', 'Magia dá errado', 'Família se reconecta', 'Dança contagiante',
      'Montagem emocionante', 'Criatura adorável', 'Dupla faz bagunça', 'Coragem aparece', 'Segredo de família',
      'Cenário inventivo', 'Corrida alucinante', 'Lágrima inesperada', 'Amigo salva o dia', 'Uma escolha generosa',
      'Rival vira aliado', 'Comida desenhada linda', 'Vilão tem música', 'Silêncio emocionante', 'Brinquedo importante',
      'Voo incrível', 'Descoberta mágica', 'Criança ensina adulto', 'Reencontro feliz', 'Final com esperança',
      'Personagem canta mal', 'Mundo escondido', 'Detalhe no fundo', 'Abraço depois da aventura', 'Créditos divertidos'
    ]
  }
];

const storageKey = 'filme-bingo-v1';
const iconIds = ['star', 'reel', 'spark', 'heart', 'moon', 'bolt', 'eye', 'flower'];
const tabs = document.getElementById('categoryTabs');
const grid = document.getElementById('bingoGrid');
const cardNumber = document.getElementById('cardNumber');
const boardCategory = document.getElementById('board-category');
const markedCount = document.getElementById('markedCount');
const lineCount = document.getElementById('lineCount');
const verdict = document.getElementById('verdict');
const progressBar = document.getElementById('progressBar');
const progressFill = document.getElementById('progressFill');
const filmCallout = document.getElementById('filmCallout');

function randomInt(max) {
  if (window.crypto?.getRandomValues) {
    const value = new Uint32Array(1);
    window.crypto.getRandomValues(value);
    return value[0] % max;
  }
  return Math.floor(Math.random() * max);
}

function shuffle(items) {
  const copy = [...items];
  for (let index = copy.length - 1; index > 0; index--) {
    const other = randomInt(index + 1);
    [copy[index], copy[other]] = [copy[other], copy[index]];
  }
  return copy;
}

function makeCard(categoryId) {
  const category = categories.find(({ id }) => id === categoryId) || categories[0];
  return { categoryId: category.id, number: String(1000 + randomInt(9000)), items: shuffle(category.items).slice(0, 24), marked: [] };
}

function loadCard() {
  try {
    const saved = JSON.parse(localStorage.getItem(storageKey));
    const category = categories.find(({ id }) => id === saved?.categoryId);
    if (category && Array.isArray(saved.items) && saved.items.length === 24 && new Set(saved.items).size === 24 && saved.items.every(item => category.items.includes(item)) && Array.isArray(saved.marked) && saved.marked.every(index => Number.isInteger(index) && index >= 0 && index < 25 && index !== 12)) {
      return { categoryId: category.id, number: String(saved.number || '0000'), items: saved.items, marked: [...new Set(saved.marked)] };
    }
  } catch (_) { /* Local storage may be unavailable. */ }
  return makeCard('geral');
}

let card = loadCard();

function saveCard() {
  try { localStorage.setItem(storageKey, JSON.stringify(card)); } catch (_) { /* The game still works without storage. */ }
}

function icon(name, className = 'chalk-svg') {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', className);
  svg.setAttribute('aria-hidden', 'true');
  const use = document.createElementNS('http://www.w3.org/2000/svg', 'use');
  use.setAttribute('href', `#icon-${name}`);
  svg.append(use);
  return svg;
}

function xMark() {
  const svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
  svg.setAttribute('class', 'chalk-x');
  svg.setAttribute('viewBox', '0 0 100 100');
  svg.setAttribute('aria-hidden', 'true');
  for (const data of ['M17 14 C39 37 58 58 83 87', 'M20 17 C42 37 59 61 80 84', 'M84 15 C61 40 43 61 17 86']) {
    const path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
    path.setAttribute('d', data);
    svg.append(path);
  }
  return svg;
}

function renderTabs() {
  tabs.replaceChildren();
  for (const category of categories) {
    const button = document.createElement('button');
    button.className = 'category-button';
    button.type = 'button';
    button.setAttribute('aria-pressed', String(card.categoryId === category.id));
    button.innerHTML = `<span class="emoji" aria-hidden="true">${category.emoji}</span><span>${category.label}</span>`;
    button.addEventListener('click', () => {
      if (card.categoryId === category.id) return;
      card = makeCard(category.id);
      saveCard();
      render();
    });
    tabs.append(button);
  }
}

function getLines() {
  const marked = new Set(card.marked);
  marked.add(12);
  const lines = [];
  for (let row = 0; row < 5; row++) lines.push([0, 1, 2, 3, 4].map(column => row * 5 + column));
  for (let column = 0; column < 5; column++) lines.push([0, 1, 2, 3, 4].map(row => row * 5 + column));
  lines.push([0, 6, 12, 18, 24], [4, 8, 12, 16, 20]);
  return lines.filter(line => line.every(index => marked.has(index)));
}

function renderGrid() {
  const winningCells = new Set(getLines().flat());
  grid.replaceChildren();
  let itemIndex = 0;
  for (let index = 0; index < 25; index++) {
    const isFree = index === 12;
    const label = isFree ? 'CENA LIVRE' : card.items[itemIndex++];
    const marked = isFree || card.marked.includes(index);
    const cell = document.createElement('button');
    cell.type = 'button';
    cell.className = `bingo-cell${marked && !isFree ? ' is-marked' : ''}${isFree ? ' is-free' : ''}${winningCells.has(index) ? ' is-winning' : ''}`;
    cell.setAttribute('aria-label', `${label}${isFree ? ', casa livre' : marked ? ', marcado' : ', não marcado'}`);
    cell.setAttribute('aria-pressed', String(marked));
    if (isFree) cell.disabled = true;
    const image = document.createElement('span');
    image.className = 'cell-icon';
    image.append(icon(isFree ? 'star' : iconIds[(index + card.categoryId.length) % iconIds.length]));
    const text = document.createElement('span');
    text.className = 'cell-label';
    text.textContent = label;
    cell.append(image, text);
    if (!isFree) {
      cell.append(xMark());
      cell.addEventListener('click', () => {
        card.marked = card.marked.includes(index) ? card.marked.filter(value => value !== index) : [...card.marked, index];
        saveCard();
        renderGrid();
        renderScore();
        grid.children[index].focus({ preventScroll: true });
      });
    }
    grid.append(cell);
  }
}

function getVerdict(count, lines) {
  if (count >= 18 || lines >= 3) return ['Esse filme é foda!', 'Pode recomendar sem medo.'];
  if (count >= 12 || lines >= 2) return ['Cinema de respeito!', 'A sessão está rendendo.'];
  if (count >= 6 || lines >= 1) return ['Tá ficando bom!', 'Já tem cena para comentar.'];
  if (count > 0) return ['Tem potencial...', 'Continue de olho na tela.'];
  return ['Aperte o play', 'O filme mal começou.'];
}

function renderScore() {
  const count = card.marked.length;
  const lines = getLines().length;
  const [title, subtitle] = getVerdict(count, lines);
  markedCount.textContent = count;
  lineCount.textContent = `${lines} / 12`;
  progressFill.style.width = `${count / 24 * 100}%`;
  progressBar.setAttribute('aria-valuenow', String(count));
  verdict.replaceChildren(document.createTextNode(title));
  const description = document.createElement('span');
  description.textContent = subtitle;
  verdict.append(description);
  filmCallout.hidden = lines === 0;
}

function render() {
  const category = categories.find(({ id }) => id === card.categoryId);
  boardCategory.textContent = category.overline;
  cardNumber.textContent = `#${card.number}`;
  renderTabs();
  renderGrid();
  renderScore();
}

document.getElementById('refreshButton').addEventListener('click', () => {
  card = makeCard(card.categoryId);
  saveCard();
  render();
});

document.getElementById('clearButton').addEventListener('click', () => {
  if (card.marked.length === 0) return;
  card.marked = [];
  saveCard();
  renderGrid();
  renderScore();
});

render();

