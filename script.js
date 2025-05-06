const dots = document.querySelectorAll('.dot');
const menus = document.querySelectorAll('.menu');

dots.forEach(dot => {
  dot.addEventListener('click', () => {
    // Remove active from all
    dots.forEach(d => d.classList.remove('active'));
    menus.forEach(m => m.classList.remove('active'));

    // Add active to selected
    dot.classList.add('active');
    const target = document.getElementById(dot.dataset.target);
    target.classList.add('active');
  });
});
