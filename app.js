'use strict';

// ── Text pools ────────────────────────────────────────────────────────────────

const TEXTS = {
  f1: [
    "To finish first, first you have to finish. Every tenth of a second counts on the limit, and the car only speaks to you through your fingertips.",
    "The pit wall is your second brain. You trust the data, you trust the strategy, and then you go flat out and let the tires do the talking.",
    "Monaco never forgives a mistake. The barriers are close, the track is unforgiving, and the only way through is total commitment every single lap.",
    "Senna said the day you no longer push the boundaries is the day you stop being a racing driver. That hunger never leaves you, not once.",
    "Downforce, balance, tire deg — the car is a living puzzle. Setups that work in Silverstone fall apart in Singapore. You always chase the edge.",
    "DRS zones, undercuts, safety car windows — modern F1 is chess at three hundred kilometers per hour. Blink and the race has already changed.",
    "The formation lap is where you feel the tires waking up, the adrenaline climbing. By the time the lights go out, everything else disappears.",
    "Overcut or undercut — that is the question. Tire temps, gap to traffic, pit lane time loss: the strategist earns their keep in those five seconds.",
    "Red Bull brought the floor concept that defined a generation. Ferrari answered with power. Mercedes chased balance. The midfield just survived.",
    "A world champion is made in the wet. That is where the instinct separates the brave from the brilliant, the calculated risk from the crash.",
    "The podium ceremony smells like champagne and burnt rubber. You spent the whole race three seconds behind and now all of it makes sense.",
    "Verstappen's throttle application out of slow corners is something else entirely. He finds grip where the data says none should exist. Pure feel.",
    "Qualifying in Q3 on a banker lap — you nail the entry, carry momentum, and the lap just flows. Those eight tenths appear out of nowhere.",
    "The radio crackles: box this lap, box this lap. You confirm, brake early into the pits, and four fresh tires hit the ground in 2.4 seconds.",
    "Interlagos roars when it rains. The crowd knows chaos is coming, and somewhere in that chaos, a legend is always about to be born.",
  ],
  cosmos: [
    "Light leaving a dying star travels eight minutes before it touches your skin. You are, in every breath, made of something that exploded long before Earth existed.",
    "The universe is not a place you live inside. It is the fabric of every moment, every particle oscillating at frequencies that predate language itself.",
    "A neutron star packs the mass of our sun into a city block. Its crust is the hardest known material. Its surface curves spacetime like a fist.",
    "We sent Voyager past the heliopause with the golden record tucked inside — greetings, music, a map home — just in case anyone out there is listening.",
    "The James Webb telescope peers back thirteen billion years. What it sees is not history. What it sees is the universe learning how to make stars.",
    "Black holes do not suck. They sit there, warping spacetime, and everything that wanders too close simply cannot find a path that leads away.",
    "Dark matter is the scaffolding of everything. We cannot see it, detect it directly, or touch it — and yet without it, no galaxy would hold its shape.",
    "On a cosmic scale, the Milky Way and Andromeda are already falling toward each other. In four billion years, they will merge without a single star collision.",
    "The cosmic microwave background is the echo of the Big Bang, cooled into radio noise. Every television tuned to static once played a slice of that signal.",
    "Europa's ocean sits beneath forty kilometers of ice and may be twice the volume of Earth's oceans. If life exists elsewhere, it might be there, right now.",
    "Pulsars spin up to seven hundred times per second, sweeping beams of radiation so regular that early astronomers thought they were signals from intelligence.",
    "The Fermi paradox is not a paradox — it is a silence, vast and unresolved, that sits between the math saying life should be everywhere and the radio saying nothing.",
  ],
  cinema: [
    "Kubrick left nothing to chance. Every prop, every angle, every edit was intentional. The Shining does not tell you what to fear — it makes you construct it yourself.",
    "Hitchcock called actors cattle. What he meant was the camera is the real performer. The actor is just the vessel through which suspense travels.",
    "Leone built tension with silence. Once Upon a Time in the West opens with twelve minutes of almost nothing — and you are completely unable to look away.",
    "The Dolly Zoom — Hitchcock's vertigo shot — changes focal length while moving the camera. The subject stays still. The world behind them collapses inward.",
    "Spielberg hides the shark for sixty percent of Jaws because the mechanical prop kept breaking. The absence created something the prop never could: pure dread.",
    "A jump cut breaks continuity to create rhythm. Godard used it as jazz uses silence — not to confuse, but to jar you awake inside the story.",
    "Every color in a Wes Anderson frame is chosen. The symmetry is not aesthetic vanity — it is emotional control, keeping you at arm's length just enough to feel safely.",
    "Tarkovsky said cinema is sculpting in time. He meant that unlike painting or music, film can hold both duration and image simultaneously, making time physical.",
    "The match cut in 2001 — bone to spacecraft — is four million years of human progress in a single edit. It is the most compressed sentence ever written.",
    "Nolan builds his films backward not to confuse but because he believes memory is the only true emotional engine. What you have lost is always more potent.",
    "The tracking shot in Children of Men through the battlefield was filmed in fragments over weeks. The blood on the lens was real. The chaos was not staged.",
    "Parasite won Best Picture partly because Bong Joon-ho understood stairs. High and low, upstairs and downstairs — the architecture is the argument of the entire film.",
    "Chivo Lubezki shoots magic hour and avoids cuts because he believes the camera should breathe. The frame becomes a lung. Cinema becomes something closer to presence.",
  ],
  chaos: [
    "A rubber duck is technically a life preserver. No one has tested this. You are now thinking about testing this. You would win that grant.",
    "Somewhere a fire alarm is going off in an office building. Everyone is standing outside wondering if it is real. It is not real. The fire is elsewhere, being itself.",
    "The word ambiguous is ambiguous. This is the most calming thing I know and I think about it during presentations when someone is using the word synergy.",
    "Every elevator has a maximum weight but no one actually checks. You have never checked. The elevator has never checked. We all agree to trust the number on the plate.",
    "Pandas are bears who convinced the entire world to treat them as a diplomatic species. They did this by being round. This was a deliberate and successful strategy.",
    "You can technically write a legally binding contract in crayon on a paper towel and it will hold up. Court has never looked more colorful than on that day.",
    "At some point someone had to invent the first joke. They told it and no one laughed. They told it again. That is the bravest act in human history.",
    "The moon is slowly drifting away from Earth at the same rate your fingernails grow. This means the moon is basically your fingernails but for the planet.",
    "Somewhere right now a golden retriever has just discovered something incredible in the grass and will never be able to explain what it was or why it mattered.",
    "A day on Venus is longer than a year on Venus. This is Venus's entire personality and Venus has fully committed to it. Respect the commitment.",
    "The sentence this sentence is false has been breaking brains since ancient Greece and it will still be doing this long after we are all extremely gone.",
    "Bees can recognize human faces. They are doing this right now. What are they thinking about your face. You will never know. They have decided not to share.",
    "Every map is lying to you in a different way depending on who made it and why. There is no honest map. There is only the thing you chose to believe about the land.",
  ],
};

const RESULT_QUOTES = {
  f1:     ["Not bad. Senna would've gone faster.", "P1 on the timesheets.", "The pit wall approves.", "Box, box, box — and a clean lap.", "DRS open. Let's go."],
  cosmos: ["The cosmos noticed.", "Even light has limits. You don't.", "Somewhere a star is proud of you.", "Dark matter, light fingers.", "The void applauds."],
  cinema: ["Cut. Print. Perfect.", "Kubrick would've done one more take.", "That's a wrap.", "Best Picture, clearly.", "The director's nodding."],
  chaos:  ["A rubber duck approves.", "The moon grew a millimeter.", "The bees took notes.", "That elevator is nervous.", "Ambiguously excellent."],
};

const THEME_BADGES = { f1: '🏎️', cosmos: '🌌', cinema: '🎬', chaos: '🎲' };

// ── State ─────────────────────────────────────────────────────────────────────

let state = {
  theme: 'f1',
  duration: 30,
  words: [],
  typed: [],
  charIndex: 0,
  started: false,
  finished: false,
  timer: null,
  timeLeft: 30,
  errors: 0,
  totalTyped: 0,
  liveWpm: 0,
  startTime: null,
};

// ── DOM refs ──────────────────────────────────────────────────────────────────

const display      = document.getElementById('text-display');
const input        = document.getElementById('type-input');
const wpmEl        = document.getElementById('wpm-display');
const accEl        = document.getElementById('acc-display');
const timeEl       = document.getElementById('time-display');
const overlay      = document.getElementById('results-overlay');
const resWpm       = document.getElementById('res-wpm');
const resAcc       = document.getElementById('res-acc');
const resCorrect   = document.getElementById('res-correct');
const resErrors    = document.getElementById('res-errors');
const resQuote     = document.getElementById('res-quote');
const resBadge     = document.getElementById('results-theme-badge');
const restartBtn   = document.getElementById('restart-btn');
const retryBtn     = document.getElementById('retry-btn');
const container    = document.getElementById('text-container');

// ── Helpers ───────────────────────────────────────────────────────────────────

function pick(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

function buildWordList(theme) {
  const passage = pick(TEXTS[theme]);
  return passage.split('').map(ch => ({ char: ch, status: 'pending' }));
}

function renderText() {
  display.innerHTML = '';
  state.words.forEach((ch, i) => {
    const span = document.createElement('span');
    span.textContent = ch.char;
    span.className = 'char';
    if (i < state.charIndex) {
      span.classList.add(ch.status === 'correct' ? 'correct' : 'error');
    } else if (i === state.charIndex) {
      span.classList.add('current');
    }
    display.appendChild(span);
  });

  // Scroll current char into view
  const cur = display.querySelector('.current');
  if (cur) cur.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
}

function calcWpm() {
  if (!state.startTime) return 0;
  const elapsed = (Date.now() - state.startTime) / 60000;
  const correctChars = state.words.slice(0, state.charIndex)
    .filter(c => c.status === 'correct').length;
  return elapsed > 0 ? Math.round(correctChars / 5 / elapsed) : 0;
}

function calcAcc() {
  if (state.totalTyped === 0) return 100;
  const correct = state.words.slice(0, state.charIndex)
    .filter(c => c.status === 'correct').length;
  return Math.round((correct / state.totalTyped) * 100);
}

function updateLiveStats() {
  const wpm = calcWpm();
  const acc = calcAcc();
  wpmEl.textContent = wpm;
  accEl.textContent = acc + '%';
}

// ── Game flow ─────────────────────────────────────────────────────────────────

function initGame() {
  clearInterval(state.timer);
  state = {
    ...state,
    words: buildWordList(state.theme),
    typed: [],
    charIndex: 0,
    started: false,
    finished: false,
    timer: null,
    timeLeft: state.duration,
    errors: 0,
    totalTyped: 0,
    liveWpm: 0,
    startTime: null,
  };

  overlay.classList.remove('visible');
  wpmEl.textContent = '—';
  accEl.textContent = '—';
  timeEl.textContent = state.duration;
  input.value = '';
  input.disabled = false;
  renderText();
}

function startTimer() {
  state.startTime = Date.now();
  state.started = true;
  state.timer = setInterval(() => {
    state.timeLeft--;
    timeEl.textContent = state.timeLeft;
    updateLiveStats();
    if (state.timeLeft <= 0) finishGame();
  }, 1000);
}

function finishGame() {
  clearInterval(state.timer);
  state.finished = true;
  input.disabled = true;

  const wpm      = calcWpm();
  const acc      = calcAcc();
  const correct  = state.words.slice(0, state.charIndex).filter(c => c.status === 'correct').length;
  const errors   = state.words.slice(0, state.charIndex).filter(c => c.status === 'error').length;

  resWpm.textContent     = wpm;
  resAcc.textContent     = acc + '%';
  resCorrect.textContent = correct;
  resErrors.textContent  = errors;
  resBadge.textContent   = THEME_BADGES[state.theme];
  resQuote.textContent   = pick(RESULT_QUOTES[state.theme]);

  overlay.classList.add('visible');
}

// ── Input handling ────────────────────────────────────────────────────────────

input.addEventListener('input', () => {
  if (state.finished) return;

  const val = input.value;

  // Prevent going past the text
  if (state.charIndex >= state.words.length) {
    input.value = '';
    finishGame();
    return;
  }

  if (!state.started) startTimer();

  // Backspace: remove last char
  if (val.length < 1 && state.charIndex > 0) {
    state.charIndex--;
    state.words[state.charIndex].status = 'pending';
    input.value = '';
    renderText();
    return;
  }

  const typed = val.slice(-1);
  if (!typed) return;

  const expected = state.words[state.charIndex].char;
  state.words[state.charIndex].status = typed === expected ? 'correct' : 'error';
  if (typed !== expected) state.errors++;
  state.totalTyped++;
  state.charIndex++;
  input.value = '';

  renderText();
  updateLiveStats();

  if (state.charIndex >= state.words.length) finishGame();
});

// Allow backspace via keydown too
input.addEventListener('keydown', (e) => {
  if (e.key === 'Backspace' && state.charIndex > 0 && !state.finished) {
    e.preventDefault();
    state.charIndex--;
    state.words[state.charIndex].status = 'pending';
    input.value = '';
    renderText();
  }
});

// Click container → focus input
container.addEventListener('click', () => { if (!state.finished) input.focus(); });

// ── Theme switching ───────────────────────────────────────────────────────────

document.querySelectorAll('.theme-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.theme-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.theme = btn.dataset.theme;
    document.querySelector('.app').dataset.activeTheme = state.theme;
    initGame();
    input.focus();
  });
});

// ── Duration switching ────────────────────────────────────────────────────────

document.querySelectorAll('.dur-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.dur-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    state.duration = parseInt(btn.dataset.dur);
    initGame();
    input.focus();
  });
});

// ── Restart / retry ───────────────────────────────────────────────────────────

restartBtn.addEventListener('click', () => { initGame(); input.focus(); });
retryBtn.addEventListener('click',   () => { initGame(); input.focus(); });

// ── Keyboard shortcuts ────────────────────────────────────────────────────────

document.addEventListener('keydown', (e) => {
  if (e.key === 'Tab') {
    e.preventDefault();
    initGame();
    input.focus();
  }
  if (e.key === 'Escape') {
    initGame();
    input.focus();
  }
});

// ── Boot ──────────────────────────────────────────────────────────────────────

document.querySelector('.app').dataset.activeTheme = state.theme;
initGame();
// Auto-focus so user can type immediately
setTimeout(() => input.focus(), 100);
