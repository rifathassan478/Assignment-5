document.getElementById('discover-something').onclick = function () {
  window.location.href = 'blog.html';
};

let now = new Date();
let options = {
  weekday: 'short',
  month: 'short',
  day: '2-digit',
  year: 'numeric',
};
let formattedDate = now.toLocaleDateString('en-US', options).replace(',', '');
const dynamicTime = document.getElementById('dynamic-time');
dynamicTime.innerText = `${formattedDate}`;

const completedButtons = document.querySelectorAll('.completed-btn');
for (const completedButton of completedButtons) {
  completedButton.addEventListener('click', function (event) {
    console.log(completedButton);
    const title =
      event.target.parentNode.parentNode.getElementsByTagName('h3')[0]
        .innerHTML;
    console.log(title);
    console.log(completedButtons.length);

    // time start
    let now = new Date();
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    let amPm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12 || 12;
    let formattedTime = `${hours}:${String(minutes).padStart(2, '0')}:${String(
      seconds
    ).padStart(2, '0')} ${amPm}`;
    console.log(formattedTime);
    // time end

    const historyList = document.getElementById('history-list');
    const div = document.createElement('div');
    div.innerHTML = `<div class="text-center my-5 bg-gray-100 p-5 rounded-lg">
            <h3 class="text-black">You have Completed the task ${title} at ${formattedTime}</h3>
          </div>`;
    historyList.appendChild(div);

    // Task Assigned
    const assgintedTask = document.getElementById('assigned-task');
    const currentAssgintedTask = parseInt(assgintedTask.innerText);
    const newAssgintedTask = currentAssgintedTask - 1;
    console.log(newAssgintedTask);
    assgintedTask.innerText = newAssgintedTask;

    // DevBoard Task
    const devBoardTask = document.getElementById('dev-board-task');
    const currentDevBoardTask = parseInt(devBoardTask.innerText);
    const newDevBoardTask = currentDevBoardTask + 1;
    console.log(newDevBoardTask);
    devBoardTask.innerText = newDevBoardTask;
    if (!completedButton.disabled) {
      console.log(currentAssgintedTask);

      if (currentAssgintedTask === 1) {
        alert('Board Updated Successfully');
        alert('Congrates!! You have Completed All the Current Task ');
        completedButton.classList.add('bg-[#9ba8f8]');
        completedButton.disabled = true;
      } else {
        alert('Board Updated Successfully');
        completedButton.classList.add('bg-[#9ba8f8]');
        completedButton.disabled = true;
      }
    }
  });
}
document
  .getElementById('clear-history-btn')
  .addEventListener('click', function () {
    const historyList = document.getElementById('history-list');
    historyList.innerText = '';
  });

document
  .getElementById('bg-theme-change')
  .addEventListener('click', function () {
    console.log('theme');
    let randomColor = '#' + Math.floor(Math.random() * 16777215).toString(16);
    document.body.style.backgroundColor = randomColor;
  });
