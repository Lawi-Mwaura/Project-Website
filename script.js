const gridItems = document.querySelectorAll('.grid-item');

gridItems.forEach((item) => {
  item.addEventListener('mouseover', () => {
    item.style.transform = 'translate(10px, 10px)';
  });

  item.addEventListener('mouseout', () => {
    item.style.transform = 'none';
  });
});
