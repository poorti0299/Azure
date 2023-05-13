const API = "http://localhost:3000/api/v1/students";

async function loadStudents() {
    await fetch(API, {
            method: "GET",
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(res => res.json())
        .then(student_data => {
            var tbody = document.getElementById("student-list");
            var tableHtml = "";
            for (var x = 0; x < student_data.length; x++) {
                tableHtml = tableHtml + `<tr><td>${student_data[x].studentName}</td>
            <td> ${student_data[x].roll}</td>
            <td> ${student_data[x].email}</td>
            <tr>`;
            }
            tbody.innerHTML = tableHtml;

        }).catch(err => {
            console.log('Request Failed', err);

        });

}

async function createRecord(event) {
    var newItem = {
        "studentName": event[0].value,
        "roll": event[1].value,
        "email": event[2].value,
    }

    await fetch(API, {
            method: "POST",
            body: JSON.stringify(newItem),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        })
        .then(response => {
            console.log(response);
            if (response.status == 200) {
                alert("Student added Successfully");
            } else {
                alert("Student name already exist");
            }

        }).catch((err) => {
            console.log(err);
            alert("Some error occurred!");
        });
    return (false);

}