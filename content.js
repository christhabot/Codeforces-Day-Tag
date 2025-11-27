function enhanceTimeLinks() {

  const timeLinks = document.querySelectorAll('a[href*="timeanddate.com/worldclock/fixedtime.html"]');

  timeLinks.forEach(link => {

    if (link.dataset.enhanced === 'true') return;

    let timeText = '';
    link.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE) {
        timeText += node.textContent;
      }
    });

    timeText = timeText.trim();

    const dateMatch = timeText.match(/(\w+)\/(\d+)\/(\d+)\s+(\d+):(\d+)/);

    if (!dateMatch) return;

    const [, month, day, year, hour, minute] = dateMatch;

    const monthMap = {
      'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
      'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
    };

    const monthNum = monthMap[month];
    if (monthNum === undefined) return;

    const date = new Date(year, monthNum, day, hour, minute);

    const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const dayOfWeek = dayNames[date.getDay()];

    link.childNodes.forEach(node => {
      if (node.nodeType === Node.TEXT_NODE && node.textContent.includes(timeText)) {
        node.textContent = node.textContent.replace(timeText, `${dayOfWeek}, ${timeText}`);
      }
    });

    link.dataset.enhanced = 'true';
  });
}

enhanceTimeLinks();

const observer = new MutationObserver(() => {
  enhanceTimeLinks();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});