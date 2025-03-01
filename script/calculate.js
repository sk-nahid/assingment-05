// function to get number from string
function getTextById(id) {
  const mainTask = document.getElementById(id).innerText;
  const convartedMainTask = parseFloat(mainTask);
  return convartedMainTask;
}

// function to calculate math and set the innerText of task;
function setTextById(id, id2, id3, id4) {
  document.getElementById(id2).addEventListener("click", function (event) {
    alert('board updated successfully');
    
    // number
    const task = getTextById(id);
    const complatedTask = getTextById(id3);

    if(task === 1){
      alert('you have completed the task'); 
    }
    //math
    const sum = task - 1;
    const complatedSum = complatedTask + 1;

    //set innerText
    document.getElementById(id).innerText = sum;
    document.getElementById(id3).innerText = complatedSum;
    //disable button
    document.getElementById(id2).setAttribute("disabled", true);

    //time
    const date = new Date();
    const amPm = date.toLocaleTimeString("en-Us");

    //history
    const title = document.getElementById(id4).innerText;
    const history = document.createElement("p");
    history.innerText = `you have completed the task ${title} at ${amPm};
    `;
    document.getElementById("history-log").appendChild(history);
    return sum;
  });
}
setTextById("main-task", "btn-complate-1", "completed-task", "title-1");
setTextById("main-task", "btn-complate-2", "completed-task", "title-2");
setTextById("main-task", "btn-complate-3", "completed-task", "title-3");
setTextById("main-task", "btn-complate-4", "completed-task", "title-4");
setTextById("main-task", "btn-complate-5", "completed-task", "title-5");
setTextById("main-task", "btn-complate-6", "completed-task", "title-6");


document.getElementById("clear-history").addEventListener('click',function(event){
  const view = document.getElementById("history-log")
  view.innerHTML = "";
  // view.classList.add("clear");
})