function newItem() {

  //adding new item to the list
  const li = $('<li></li>');
  const inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === ' ') {
    alert('You must write something!');
  } else {
    const list = $('#list');
    $('#list').append('li');
  }
}
