function enhanceDatesEverywhere() {
  const allElements = document.querySelectorAll('*');

  allElements.forEach(element => {
    if (element.dataset.enhanced === 'true') return;

    element.childNodes.forEach(node => {
      if (node.nodeType !== Node.TEXT_NODE) return;

      let text = node.textContent;
      
      const dateMatch = text.match(/(\w+)\/(\d+)\/(\d+)/);
      if (!dateMatch) return;

      const [fullMatch, month, day, year] = dateMatch;

      const monthMap = {
        'Jan': 0, 'Feb': 1, 'Mar': 2, 'Apr': 3, 'May': 4, 'Jun': 5,
        'Jul': 6, 'Aug': 7, 'Sep': 8, 'Oct': 9, 'Nov': 10, 'Dec': 11
      };

      const monthNum = monthMap[month];
      if (monthNum === undefined) return;

      const date = new Date(year, monthNum, day);

      const dayNames = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
      const dayOfWeek = dayNames[date.getDay()];

      node.textContent = text.replace(fullMatch, `${dayOfWeek}, ${fullMatch}`);
    });

    element.dataset.enhanced = 'true';
  });
}

enhanceDatesEverywhere();

const observer = new MutationObserver(() => {
  enhanceDatesEverywhere();
});

observer.observe(document.body, {
  childList: true,
  subtree: true
});