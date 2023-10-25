// let message = [
//     {

//     }
// ]

var listMessage = [];

const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

class Message {
    constructor(name, gender, birthday, message) {
        this.name = name;
        this.gender = gender;
        this.birthday = this.dateAll(birthday);
        this.message = message;
        this.age = this.Age(birthday);
        this.time = new Date();
    }

    dateAll(date) {
        let datee = new Date(date);
        const year = datee.getFullYear();
        const month = months[datee.getMonth()];
        const dayNum = date.slice(8);
        return `${dayNum} ${month} ${year}`;
    }

    Age(birthday) {
        let date = new Date(birthday);
        console.log(date);
        let month =  Date.now()-date;
        let year = new Date(month).getUTCFullYear();
        let age = Math.abs(year-1970);
        return age;
    }

    get getData() {
        return {
            name: this.name,
            gender: this.gender,
            birthday: this.birthday,
            age: this.age,
            message: this.message,
            currentTime: this.time
        }
    }
}

var form = document.getElementById("form");

form.addEventListener("submit", (e) => {
    e.preventDefault();
    let nama = document.getElementById("name").value;
    let ttl = document.getElementById("ttl").value;
    let gender = getGender(document.getElementsByName("gender"));
    let message = document.getElementById("message").value;
    let msg = new Message(nama, gender, ttl, message);
    listMessage.push(msg);

    const data = listMessage[listMessage.length-1].getData;

    const markup = `<p><b>Tanggal : </b>${data.currentTime}</p>
                <p><b>Nama : </b>${data.name}</p>
                <p><b>Tanggal Lahir : </b>${data.birthday}</p>
                <p><b>Umur : </b>${data.age}</p>
                <p><b>Jenis Kelamin : </b>${data.gender}</p>
                <p><b>Pesan : </b>${data.message}</p>`

    document.getElementById("box").innerHTML = markup;
});

const getGender = (html) => {
    for(let i = 0; i < html.length; i++) {
        if(html[i].checked) {
            return html[i].value;
        }
    }
}