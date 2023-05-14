function createModal({ text }) {
    const modal = document.createElement('div');
    modal.classList.add('modal');
    
    const body = document.createElement('div');
    body.classList.add('body');
    
    const close = document.createElement('div');
    close.classList.add('close');
    close.textContent = 'X';
    
    const content = document.createElement('div');
    content.classList.add('content');
    content.textContent = text;
    
    body.appendChild(close);
    body.appendChild(content);
    modal.appendChild(body);
    document.body.appendChild(modal);
  
    return { modal, close };
  }
  
  function openModal({ text }) {
    const { modal, close } = createModal({ text });
    
    close.addEventListener('click', () => {
      closeModal(modal);
    });
  
    return modal;
  }
  
  function closeModal(modal) {
    modal.remove();
  }
  
  export { openModal, closeModal };
  