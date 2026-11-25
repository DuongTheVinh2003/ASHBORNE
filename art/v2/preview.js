const byId = (id) => document.getElementById(id);
let selectedRegion = 'frozen';
let sealClaimed = false;
let encounterWon = false;
const formation = new Set();

const views = ['home', 'loadout', 'map', 'muster', 'battle', 'reward', 'seal'];

const regionData = {
  frozen: {
    name: 'Frozen Cathedral',
    description: 'Từ trại dưới vách băng, theo đường vượt khe kính tới cổng đôi của thành cổ.',
    route: [['✧', 'Trại Vách Băng', 'Tiếp tế'], ['◇', 'Cầu Kính', 'Giao tranh'], ['♜', 'Thành Kính Lạnh', 'Công thành']],
  },
  storm: {
    name: 'Storm Frontier',
    description: 'Caravan bám theo sườn đá. Cờ trên các trạm gác cho biết hướng gió.',
    route: [['✧', 'Trạm Cờ Gió', 'Tiếp tế'], ['◇', 'Đèo Ngược Gió', 'Săn Ấn Thú'], ['♜', 'Phế điện Đèo Gió', 'Công thành']],
  },
  ash: {
    name: 'Ashlands',
    description: 'Các đoàn tiếp tế đi vòng miệng núi lửa qua những khu dân cư đã cháy.',
    route: [['✧', 'Trại Than Đỏ', 'Tiếp tế'], ['◇', 'Rừng Cháy', 'Sự kiện'], ['♜', 'Thành Lò Tàn', 'Công thành']],
  },
  stone: {
    name: 'Stone Grave',
    description: 'Những bậc mộ của người khổng lồ vẫn là đường qua vách núi.',
    route: [['✧', 'Bến Đục Đá', 'Nghỉ chân'], ['◇', 'Bậc Người Khổng Lồ', 'Tinh anh'], ['♜', 'Thành Mộ Đá', 'Công thành']],
  },
};

function showRegion(key) {
  selectedRegion = key;
  const region = regionData[key];
  const playable = key === 'frozen';
  byId('region-title').textContent = region.name;
  byId('region-blurb').textContent = region.description;
  byId('itinerary').replaceChildren(...region.route.map(([icon, name, kind]) => {
    const item = document.createElement('li');
    item.innerHTML = '<i aria-hidden="true"></i><strong></strong><small></small>';
    item.children[0].textContent = icon;
    item.children[1].textContent = name;
    item.children[2].textContent = playable && kind === 'Công thành' && sealClaimed
      ? 'Đã thu 7♦' : kind;
    if (playable && kind === 'Công thành') item.classList.add('destination');
    return item;
  }));
  byId('enter').disabled = !playable;
  byId('enter').firstChild.textContent = sealClaimed && playable ? 'Chơi lại màn mẫu ' : 'Chuẩn bị công thành ';
  byId('route-foot').textContent = playable
    ? (sealClaimed ? 'Đã thu 7♦ Rùa Gương · Cửa thành đã mở' : 'Chạm trán đầu tiên · Rùa Gương')
    : 'Tuyến minh họa trong bản concept';
  document.querySelectorAll('[data-region]').forEach((pin) => {
    pin.setAttribute('aria-pressed', String(pin.dataset.region === key));
  });
  document.querySelector('.map-art').classList.toggle('frozen-active', playable);
}

function showView() {
  const hash = location.hash.slice(1);
  let view = views.includes(hash) ? hash : 'home';
  if (view === 'reward' && !state.finished) view = 'home';
  if (view === 'battle' && state.finished) view = 'reward';
  document.querySelectorAll('.view').forEach((panel) => { panel.hidden = panel.id !== view; });
  if (view === 'map') {
    showRegion(selectedRegion);
    byId('map-seal').hidden = !sealClaimed;
  }
  if (view === 'loadout') showWeapon();
  if (view === 'muster') showFormation();
  if (view === 'seal') {
    byId('seal-status').textContent = sealClaimed ? 'Đã ghi vào Sổ Phong Ấn' : 'Chưa thu phục trong hành trình này';
  }
  if (view === 'battle') renderBattle();
  if (view === 'reward') showReward();
  const panel = byId(view);
  panel.setAttribute('tabindex', '-1');
  panel.focus({ preventScroll: true });
  window.scrollTo(0, 0);
}

function showFormation() {
  const ready = formation.size === 2;
  document.querySelectorAll('[data-muster]').forEach((card) => {
    card.setAttribute('aria-pressed', String(formation.has(card.dataset.muster)));
  });
  byId('muster-result').classList.toggle('formed', ready);
  byId('muster-result').setAttribute('aria-hidden', String(!ready));
  byId('muster-summary').textContent = ready ? 'Cự nhân núi Khiên binh II đã sẵn sàng.' :
    formation.size === 1 ? 'Chọn lá còn lại để lập đạo quân.' : 'Chọn hai lá để xem kết quả ghép.';
  byId('fight').disabled = !ready;
}

const cards = [
  { name: 'Chém Ngang', family: 'Kiếm', type: 'attack', icon: '⚔', look: 'weapon sword', damage: 5 },
  { name: 'Đâm Thẳng', family: 'Giáo', type: 'attack', icon: '↟', look: 'weapon spear', damage: 5 },
  { name: 'Thủ Kiếm', family: 'Kỹ năng', type: 'guard', icon: '⬡', look: 'guard shield', shield: 5 },
  { name: 'Tàn Lửa', family: 'Lửa', type: 'element', icon: '♨', look: 'flame', element: 'fire' },
  { name: 'Mạch Nguồn', family: 'Nước', type: 'element', icon: '◈', look: 'tide', element: 'water' },
];

let preferredWeapon = 0;

function showWeapon() {
  const weapon = cards[preferredWeapon];
  byId('weapon-name').textContent = weapon.family;
  byId('weapon-description').textContent = preferredWeapon === 0
    ? 'Đưa Chém Ngang lên đầu tay bài. Có thể phối với Giáo hoặc gắn Nguyên tố.'
    : 'Đưa Đâm Thẳng lên đầu tay bài. Có thể phối với Kiếm hoặc gắn Nguyên tố.';
  byId('weapon-card').textContent = weapon.name;
  byId('weapon-damage').textContent = weapon.damage;
  byId('weapon-art').className = 'weapon-art ' + (preferredWeapon === 0 ? 'sword' : 'spear');
  document.querySelectorAll('[data-weapon]').forEach((button) => {
    button.setAttribute('aria-pressed', String(Number(button.dataset.weapon) === preferredWeapon));
  });
}

const elementName = { fire: 'Lửa', water: 'Nước' };
const intentCycle = [8, 9, 13];
const maxHp = 45;
const maxMana = 4;
let state;
let noteTimer;

function resetBattle() {
  state = {
    turn: 1, hero: 39, foe: 45, mana: maxMana, heroShield: 0, foeShield: 0,
    fire: 4, water: 1, overload: '', log: [], spent: new Set(), stack: [], finished: false,
  };
  const hand = byId('hand');
  const lead = hand.querySelector('[data-card-index="' + preferredWeapon + '"]');
  hand.prepend(lead);
  [...hand.children].forEach((button, position) => {
    button.style.setProperty('--angle', (position - 2) * 3 + 'deg');
    button.style.setProperty('--arc', Math.abs(position - 2) * 5 + 'px');
  });
  window.clearTimeout(noteTimer);
  byId('battle-note').textContent = '';
  renderBattle();
}

function availableResult() {
  const [base, ...rest] = state.stack.map((index) => cards[index]);
  if (!base) return {};
  const cost = state.stack.length;
  if (cost > maxMana || cost > state.mana) return { error: 'Thiếu mana' };
  const layers = rest.filter((card) => card.type === 'element');
  if (rest.length && (base.type !== 'attack' || layers.length > 1 ||
      rest.some((card) => card.type === 'guard'))) {
    return { error: 'Chồng phải cùng loại. Đặt lá Đánh thường dưới lá Nguyên tố.' };
  }
  const elemental = state.overload || layers[0]?.element || base.element || '';
  const damage = [base, ...rest].reduce((total, card) => total + (card.damage || 0), 0);
  const fire = (damage || base.type === 'element') && elemental === 'fire' ? 2 : 0;
  const water = (damage || base.type === 'element') && elemental === 'water' ? 2 : 0;
  return {
    base, cost, elemental, fire, water, damage: damage + fire, heal: water,
    shield: base.shield || 0, attached: layers.length === 1,
  };
}

function renderBattle() {
  const round = (state.turn - 1) % intentCycle.length;
  byId('turn').textContent = String(state.turn).padStart(2, '0');
  byId('intent').textContent = state.finished ? '—' : intentCycle[round];
  const intent = document.querySelector('.intent');
  intent.classList.toggle('attack', round !== 0);
  intent.querySelector('span').textContent = round === 0 ? '⬡' : '⚔';
  intent.querySelector('small').textContent = round === 0 ? 'THỦ · KHIÊN' : 'ĐÒN KẾ TIẾP';
  for (const side of ['hero', 'foe']) {
    const shield = state[side + 'Shield'];
    byId(side + '-hp').textContent = state[side] + ' / ' + maxHp + (shield ? ' · ⬡ ' + shield : '');
    byId(side + '-health').style.setProperty('--health', (state[side] / maxHp * 100) + '%');
  }
  byId('mana').textContent = state.mana + '/' + maxMana;
  byId('hud-hp').textContent = state.hero + ' / ' + maxHp;

  for (const element of ['fire', 'water']) {
    const meter = byId(element);
    meter.textContent = state[element] + '/10';
    byId(element + '-meter').style.setProperty('--fill', state[element] * 10 + '%');
    const row = meter.parentElement;
    const pending = state[element] === 10 && !state.overload;
    row.classList.toggle('pending', pending);
    row.classList.toggle('overload', state.overload === element);
    row.setAttribute('aria-label', elementName[element] + ' ' + meter.textContent +
      (pending ? ', Chờ quá tải' : state.overload === element ? ', Quá tải' : ''));
  }
  const warnings = Object.keys(elementName).filter((e) => state[e] === 10);
  byId('element-status').textContent = state.overload ? elementName[state.overload] + ' · Quá tải · −4 HP cuối lượt' :
    warnings.length ? warnings.map((e) => elementName[e]).join(', ') + ' · Chờ quá tải' : '';
  byId('battle').classList.toggle('has-overload', Boolean(state.overload));
  byId('discard').textContent = state.spent.size;

  [...byId('hand').children].forEach((button) => {
    const index = Number(button.dataset.cardIndex);
    button.disabled = state.finished || state.spent.has(index);
    const position = state.stack.indexOf(index);
    button.setAttribute('aria-pressed', String(position >= 0));
    button.querySelector('.selection-order').textContent = position < 0 ? '' : position + 1;
  });
  const result = availableResult();
  byId('commit').hidden = state.stack.length === 0;
  byId('commit').disabled = state.finished || !result.base || Boolean(result.error);
  byId('commit').textContent = state.stack.length === 1 ? 'Dùng lá' : 'Chốt chồng';
  const guide = byId('battle-guide');
  guide.hidden = state.finished || state.turn > 2;
  guide.textContent = state.turn === 1
    ? (state.stack.length > 1 ? 'Xem lá đáy, mana và sát thương rồi bấm Chốt chồng.' :
      state.spent.size ? 'Có thể ghép nhiều lá Đánh thường rồi gắn một Nguyên tố.' :
      'Rùa Gương sắp dựng Khiên. Chọn một lá Đánh thường rồi bấm Dùng lá.')
    : 'Rùa Gương sắp tấn công. Dùng Thủ Kiếm trước khi kết thúc lượt.';
  byId('end').disabled = state.finished;
  const preview = byId('stack');
  preview.replaceChildren();
  if (result.error) {
    preview.textContent = result.error;
  } else if (result.base) {
    const label = document.createElement('span');
    label.textContent = 'Lá đáy · ' + result.base.name;
    const parts = [result.cost + ' mana'];
    if (result.damage) {
      const absorbed = Math.min(result.damage, state.foeShield);
      parts.push('Rùa Gương · ' + result.damage + ' sát thương');
      if (absorbed) parts.push(absorbed + ' bị Khiên chặn');
    }
    if (result.shield) parts.push('+' + result.shield + ' Khiên');
    if (result.heal) parts.push('+' + result.heal + ' HP');
    if (result.elemental) parts.push(elementName[result.elemental]);
    preview.append(label, document.createTextNode(parts.join(' · ')));
  } else {
    preview.textContent = 'Chọn lá để đánh hoặc ghép chồng';
  }
}

function announce(message, anchor = 'turn') {
  window.clearTimeout(noteTimer);
  state.log.push(message);
  const note = byId('battle-note');
  note.dataset.anchor = anchor;
  note.textContent = message;
  noteTimer = window.setTimeout(() => { note.textContent = ''; }, 1900);
}

function showReward() {
  const pending = encounterWon && !sealClaimed;
  byId('result-title').textContent = encounterWon ? 'Rùa Gương đã bị hạ' : 'Người Thừa Kế gục ngã';
  byId('result-text').textContent = encounterWon
    ? (pending ? 'Ấn 7♦ còn lại sau trận. Thu ấn để ghi vào Sổ Phong Ấn.' : '7♦ Rùa Gương đã được ghi vào Sổ Phong Ấn.')
    : 'Quay lại công thành để thử bố trí lượt đầu khác.';
  byId('reward-art').classList.toggle('defeat-art', !encounterWon);
  byId('collect').hidden = !pending;
  byId('return-route').hidden = !encounterWon || pending;
  byId('inspect-reward').hidden = !encounterWon || pending;
  byId('retry').hidden = encounterWon;
  byId('leave-encounter').hidden = encounterWon;
}

function finishBattle(win) {
  state.finished = true;
  encounterWon = win;
  renderBattle();
  location.hash = 'reward';
}

function commitStack() {
  const result = availableResult();
  if (!result.base || result.error || state.finished) return;
  state.mana -= result.cost;
  state.stack.forEach((index) => state.spent.add(index));
  state.stack = [];
  const absorbed = Math.min(state.foeShield, result.damage);
  state.foeShield -= absorbed;
  state.foe = Math.max(0, state.foe - (result.damage - absorbed));
  state.hero = Math.min(maxHp, state.hero + result.heal);
  state.heroShield += result.shield;
  if (state.foe === 0) {
    state.log.push('Rùa Gương bị hạ.');
    finishBattle(true);
    return;
  }
  if (!state.overload && result.elemental) {
    const opposite = result.elemental === 'fire' ? 'water' : 'fire';
    if (result.attached) state[opposite] = Math.max(0, state[opposite] - 2);
    state[result.elemental] = Math.min(10, state[result.elemental] + (result.elemental === 'water' ? 3 : 2));
    state.log.push(elementName[result.elemental] + ' · ' + state[result.elemental] + '/10');
    if (result.attached) state.log.push('Tiết Chế · ' + elementName[opposite] + ' còn ' + state[opposite] + '/10');
  }
  if (result.damage) announce(result.damage + ' sát thương' + (absorbed ? ' · ' + absorbed + ' bị Khiên chặn' : ''), 'foe');
  else if (result.shield) announce('+' + result.shield + ' Khiên', 'hero');
  else if (result.heal) announce('+' + result.heal + ' HP', 'hero');
  renderBattle();
}

function endTurn() {
  if (state.finished) return;
  if (state.overload) {
    state.log.push('Phản lực ' + elementName[state.overload] + ' · −4 HP trước lượt địch');
    state.hero = Math.max(0, state.hero - 4);
    state[state.overload] = 0;
    state.overload = '';
  }
  const round = (state.turn - 1) % intentCycle.length;
  const incoming = Math.max(0, intentCycle[round] - state.heroShield);
  state.foeShield = round === 0 ? intentCycle[round] : 0;
  if (round !== 0) state.hero = Math.max(0, state.hero - incoming);
  if (state.hero === 0) {
    finishBattle(false);
    return;
  }
  state.turn += 1;
  state.mana = maxMana;
  state.heroShield = 0;
  state.spent.clear();
  state.stack = [];
  state.overload = Object.keys(elementName).find((e) => state[e] === 10) || '';
  renderBattle();
  const resolution = round === 0 ? 'Rùa Gương dựng ' + state.foeShield + ' Khiên' :
    (incoming ? 'Bạn mất ' + incoming + ' HP' : 'Đòn của Rùa Gương đã bị chặn');
  announce(resolution + ' · Lượt của bạn ' + state.turn);
}

const hudPanels = {
  relics: ['Di vật', () => ['Chưa trang bị di vật trong trận này.']],
  map: ['Tuyến hiện tại', () => regionData.frozen.route.map(([, name, kind]) => name + ' · ' + kind)],
  deck: ['Bộ bài trận mẫu', () => cards.map((card) => card.name + ' · ' + card.family + ' · 1 mana')],
  draw: ['Chồng rút', () => ['Hết lá trong chồng rút. Bộ bài mẫu đã được chia lên tay.']],
  discard: ['Chồng bỏ', () => state.spent.size
    ? [...state.spent].map((index) => cards[index].name) : ['Chưa có lá đã dùng trong lượt này.']],
  log: ['Nhật ký giao tranh', () => state.log.length ? state.log : ['Trận vừa bắt đầu.']],
  settings: ['Tùy chọn trận', () => []],
};

document.querySelectorAll('[data-hud]').forEach((button) => {
  button.addEventListener('click', () => {
    const [title, getRows] = hudPanels[button.dataset.hud];
    byId('hud-title').textContent = title;
    const content = byId('hud-content');
    const list = document.createElement('ul');
    getRows().forEach((row) => {
      const item = document.createElement('li');
      item.textContent = row;
      list.append(item);
    });
    content.replaceChildren();
    if (button.dataset.hud === 'settings') {
      const label = document.createElement('label');
      const toggle = document.createElement('input');
      toggle.type = 'checkbox';
      toggle.checked = byId('stage').classList.contains('reduce-motion');
      toggle.addEventListener('change', () => byId('stage').classList.toggle('reduce-motion', toggle.checked));
      label.append(toggle, ' Giảm chuyển động và hiệu ứng');
      content.append(label);
    } else {
      content.append(list);
    }
    byId('hud-detail').showModal();
  });
});

const sealDetails = {
  'J♣': ['J♣ · Nứt Thành', 'Voi đá giẫm vỡ phòng tuyến và phá Khiên của một địch.'],
  'K♥': ['K♥ · Nanh Tro', 'Bọ ngựa tang lễ giáng đòn lớn và gieo than vương ấn.'],
};
document.querySelectorAll('[data-equip]').forEach((chip) => {
  chip.addEventListener('click', () => {
    const [title, body] = sealDetails[chip.dataset.equip];
    byId('seal-detail-title').textContent = title;
    byId('seal-detail-text').textContent = body;
    byId('seal-detail').showModal();
  });
});
document.querySelectorAll('[data-region]').forEach((pin) => {
  pin.addEventListener('click', () => showRegion(pin.dataset.region));
});
document.querySelectorAll('[data-close]').forEach((button) => {
  button.addEventListener('click', () => byId(button.dataset.close).close());
});

cards.forEach((card, index) => {
  const button = document.createElement('button');
  button.type = 'button';
  button.className = 'combat-card ' + card.look;
  button.dataset.cardIndex = index;
  button.innerHTML = '<span class="cost">1</span><span class="selection-order" aria-hidden="true"></span>' +
    '<span class="card-icon" aria-hidden="true"></span><h3></h3><small></small>';
  button.querySelector('.card-icon').textContent = card.icon;
  button.querySelector('h3').textContent = card.name;
  button.querySelector('small').textContent = card.family;
  button.setAttribute('aria-label', card.name + ', ' + card.family + ', 1 mana');
  button.addEventListener('click', () => {
    if (state.stack.includes(index)) state.stack = state.stack.filter((entry) => entry !== index);
    else if (state.stack.length < maxMana) state.stack.push(index);
    renderBattle();
  });
  byId('hand').append(button);
});
document.querySelectorAll('[data-muster]').forEach((card) => {
  card.addEventListener('click', () => {
    const side = card.dataset.muster;
    if (formation.has(side)) formation.delete(side);
    else formation.add(side);
    showFormation();
  });
});
document.querySelectorAll('[data-weapon]').forEach((button) => {
  button.addEventListener('click', () => {
    preferredWeapon = Number(button.dataset.weapon);
    showWeapon();
  });
});
byId('start').addEventListener('click', () => formation.clear());
byId('enter').addEventListener('click', () => {
  if (selectedRegion !== 'frozen') return;
  formation.clear();
  location.hash = 'loadout';
});
byId('fight').addEventListener('click', () => {
  if (formation.size !== 2) return;
  resetBattle();
  location.hash = 'battle';
  announce('Lượt của bạn · 1');
});
byId('commit').addEventListener('click', commitStack);
byId('end').addEventListener('click', endTurn);
byId('retry').addEventListener('click', () => {
  formation.clear();
  location.hash = 'muster';
});
byId('collect').addEventListener('click', () => {
  if (!encounterWon || !state.finished) return;
  sealClaimed = true;
  showReward();
  byId('return-route').focus();
});
byId('reward-art').append(document.querySelector('#seal .artifact').cloneNode(true));
window.addEventListener('hashchange', showView);
showRegion('frozen');
resetBattle();
showView();
