function registerEmployee() {
    var name = document.getElementById("name").value;
    var employee_id = document.getElementById("employee_id").value;
    fetch('/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ name: name, employee_id: employee_id })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}

function clockIn() {
    var employee_id = document.getElementById("clockin_employee_id").value;
    fetch('/clockin', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ employee_id: employee_id })
    })
    .then(response => response.json())
    .then(data => {
        alert(data.message);
    });
}

function queryRecords() {
    fetch('/query')
    .then(response => response.json())
    .then(data => {
        var recordList = document.getElementById("record_list");
        recordList.innerHTML = '';
        data.clock_records.forEach(record => {
            var li = document.createElement("li");
            li.textContent = `員工編號: ${record.employee_id}, 打卡時間: ${record.timestamp}`;
            recordList.appendChild(li);
        });
    });
}