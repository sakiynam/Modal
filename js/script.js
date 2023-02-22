window.addEventListener('DOMContentLoaded', () =>{

  const modal = document.querySelector('.modal');
  const  modalClose = document.querySelector('.modal__close');
  const  contact = document.querySelector('[date-modal]');
  console.log(contact);
   
  function showModal(){
    modal.classList.add('show', 'fade');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
  }

  contact.addEventListener('click', showModal);

  const timerModal = setTimeout(showModal, 5000);

  function hideModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
    clearTimeout(timerModal);
  }

  modalClose.addEventListener('click', hideModal);
   
  modal.addEventListener('click', (Event) =>{
    if(Event.target == modal){
      hideModal();
    }
  });



  const loader = document.querySelector('.loader');


  setTimeout(() => {
    loader.style.opacity = '0';
    setTimeout(() => {
      loader.style.display = 'none';
    }, 500);
  }, 3000);


});







