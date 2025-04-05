document.getElementById("myForm").addEventListener("submit",function(event){
    event.preventDefault();
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const age = document.getElementById("age").value;

    // ! means not
        // meaning if missing

    if (!first || !last) {
        alert("Please provide your full name.");
        return;
    }

    if (!age || age<18){
        alert("You must be 18 years or older to submit this form.");
        return;
    }

    // console.log(first);
    // console.log(last);

    const data = {
        firstName: first,
        lastName: last,
        age:age
    }
    const xhr = new XMLHttpRequest();
    xhr.open("POST", "submit.json", true);
    xhr.setRequestHeader("Content-type", "application/json;charset=UTF-8");
    xhr.onreadystatechange = function () {
        if (xhr.readyState === 4 && xhr.status === 200) {
            const response = JSON.parse(xhr.responseText);
            document.getElementById("message").innerHTML = response.message;
            document.getElementById("myForm").innerHTML = "";
        } else if (xhr.readyState === 4){
            alert('Erro submtting form.');
        }
    };
    xhr.send(JSON.stringify(data));
    console.log(data);
})