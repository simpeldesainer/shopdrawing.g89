function openPdfWindow(event, url) {
  event.preventDefault();
  const width = 900;
  const height = 900;
  const left = (window.screen.width - width) / 2;
  const top = (window.screen.height - height) / 2;
  const features = `width=${width},height=${height},top=${top},left=${left},resizable=yes,scrollbars=yes,status=no,toolbar=no,menubar=no`;
  window.open(url, 'PDFPreview', features);
}
