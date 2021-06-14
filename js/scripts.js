function newItem() {

  //adding new item to the list
  const li = $('<li></li>');
  const inputValue = $('#input').val();
  li.append(inputValue);

  if (inputValue === '') {
    alert('You must write something!');
  } else {
    $('#list').append(li);
  }

  //crossing out an item
  function crossOut() {
    li.toggleClass("strike");
  }

  li.on('dblclick', function crossOut() {
    li.toggleClass('strike');
  });

  
  $('#list').sortable();
}
