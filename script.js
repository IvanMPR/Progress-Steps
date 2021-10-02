'use-strict';

const previous = document.querySelector('.previous');
const next = document.querySelector('.next');
const barBgd = document.querySelector('.bar-bgd');
const circles = document.querySelectorAll('.circle');

const storage = {
  active: 1,
};

function enable(el) {
  el.disabled = false;
  el.classList.remove('disabled-btn');
}
function disable(el) {
  el.disabled = true;
  el.classList.add('disabled-btn');
}

window.addEventListener('load', () => {
  if (storage.active === 1) {
    disable(previous);
  }
});

next.addEventListener('click', function () {
  enable(previous);
  storage.active += 1;
  if (storage.active >= circles.length) {
    document.getElementById(`${storage.active}`).classList.add('active');
    barBgd.style.width = '99%';
    disable(next);
    return;
  }

  document.getElementById(`${storage.active}`).classList.add('active');

  const barBgdWidth = parseInt(barBgd.style.width, 10) || 0;
  const step = 33;
  barBgd.style.width = `${barBgdWidth + step}%`;
});

previous.addEventListener('click', function () {
  enable(next);
  document.getElementById(`${storage.active}`).classList.remove('active');
  storage.active -= 1;
  const barBgdWidth = parseInt(barBgd.style.width, 10) || 0;

  if (storage.active === 1) {
    barBgd.style.width = '0%';
    disable(previous);
    return;
  }

  const step = 33;
  barBgd.style.width = `${barBgdWidth - step}%`;
});
