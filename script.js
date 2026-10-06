document.addEventListener('DOMContentLoaded', () => {
  const links = document.querySelectorAll('a[href*="drive.google.com"]');
  links.forEach(link => {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  });
});
