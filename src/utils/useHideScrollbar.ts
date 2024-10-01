let timeout: NodeJS.Timeout;

const hideScrollbar = () => {
  document.body.classList.add('hide-scrollbar');
};

const showScrollbar = () => {
  document.body.classList.remove('hide-scrollbar');
  clearTimeout(timeout);
  timeout = setTimeout(hideScrollbar, 2000);
};

export const initializeScrollbar = () => {
  document.addEventListener('scroll', showScrollbar);
  document.addEventListener('mousemove', showScrollbar);
  document.addEventListener('touchstart', showScrollbar);


  hideScrollbar();
};
