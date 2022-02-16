$(document).ready(function () {
  let tasks = [];
  let completedTasks = [];
  // let elem = [];
  $('#add-items').on('click', function () {
    let value = $('input').val();
    storeTasks(value);
    $('input').val('');
  });

  $('.task-list').on('click', '.remove-items', function () {
    let item = $(this).data('tanya');
    deleteTasks(item);
  });
  $('.task-list').on('click', '.check-items', function () {
    let item = $(this).data('id');
    console.log(item);
    // deleteTasks(item);
    finishTasks(item);
  });

  function storeTasks(value) {
    const task = {
      value: value,
      id: tasks.length + 1,
    };
    tasks.push(task);
    renderTasks(tasks);
  }

  function renderTasks(tasks) {
    let list = '';
    $.each(tasks, function (index, element) {
      list += `<li class='tasks'>${element.value}<div>
      <button class="remove-items" data-tanya=${index}><span class="fas fa-trash"></button><button class="check-items" data-id=${index}><span class="fas fa-check"></button></div></li>`;
    });
    $('.task-list').html(list);
  }

  function deleteTasks(index) {
    tasks.splice(index, 1);
    renderTasks(tasks);
  }
  function finishTasks(index) {
    let item = tasks.splice(index, 1);
    completedTasks.push(item[0]);
    // console.log(item);
    let completeList = '';
    $.each(completedTasks, function (index, element) {
      completeList += `<li  style="text-decoration: line-through" class='task-completed'>${element.value}</li>`;
    });
    $('.finished-tasks').html(completeList);
    renderTasks(tasks);
  }
  // renderTasks(tasks)
});
