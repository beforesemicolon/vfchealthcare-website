const attach = document.getElementById('documents');
const selectedFilesList = document.querySelector('ul.selected-files');

attach.addEventListener('change', () => {
  const files = attach.querySelector('input[type="file"]').files;
  selectedFilesList.innerHTML = '';
  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const li = document.createElement('li');
    const toobig = file.size > 500 * 1024;
    
    if (toobig) {
      attach.querySelector('input[type="file"]').value = '';
      alert('File too big (> 500kb): ' + file.name + '. Please select a smaller file.');
    } else {
      li.style.background = '#225400';
      li.textContent = file.name;
      selectedFilesList.appendChild(li);
    }
  }
});
