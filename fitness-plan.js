  function switchTab(el, panelId) {
    document.querySelectorAll('.tab').forEach(t => t.classList.remove('active'));
    document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
    el.classList.add('active');
    document.getElementById('panel-' + panelId).classList.add('active');
  }

  // Highlight today
  const days = ['sun','mon','tue','wed','thu','fri','sat'];
  const today = days[new Date().getDay()];
  const todayTab = document.querySelector(`[data-panel="${today}"]`);
  if (todayTab) {
    const dot = document.createElement('div');
    dot.className = 'today-dot';
    dot.style.background = getComputedStyle(todayTab).getPropertyValue('--tab-color').trim() || '#888';
    todayTab.appendChild(dot);
  }