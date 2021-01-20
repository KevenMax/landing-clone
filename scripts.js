function handleBackground(button){
  var body = document.querySelector('body')
  
  body.removeAttribute('id');
  if (button.classList.contains('blue-button')){
    body.setAttribute('style', 'background-color: #abd8e4');
  } else if (button.classList.contains('white-button')){
    body.setAttribute('style', 'background-color: #fff');
  } else if (button.classList.contains('black-button')){
    body.setAttribute('style', 'background-color: #000');
  }
}