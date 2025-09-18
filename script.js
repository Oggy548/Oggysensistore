function callme() {
    window.location.href = "https://wa.me/+94712901128";
}

function callChannel() {
    window.location.href = "https://whatsapp.com/channel/0029VavP4pm60eBf0K98Yp2l";
}

function callGroup() {
    window.location.href = "https://chat.whatsapp.com/H3MyNa8TMvt90iX3cJJlAg?mode=ems_copy_c";
}

function opentiktok() {
    window.location.href = "https://www.tiktok.com/@oggy.yt_1";
}

// function animate1() {
//     let element1 = document.getElementById('animate_card1');
//     let element2 = document.getElementById('animate_card2');
//     let element3 = document.getElementById('animate_card3');

//     element1.classList.add('animate__animated', 'animate__flipInX', 'animate__fast');
//     element2.classList.add('animate__animated', 'animate__flipInX', 'animate__delay-1s', 'animate__fast');
//     element3.classList.add('animate__animated', 'animate__flipInX', 'animate__delay-2s', 'animate__fast');
// }


// document.addEventListener("DOMContentLoaded", function () {
//     let elements = [
//         document.getElementById('animate_card1'),
//         document.getElementById('animate_card2'),
//         document.getElementById('animate_card3')
//     ];

//     let observer = new IntersectionObserver(
//         (entries, observer) => {
//             entries.forEach((entry, index) => {
//                 if (entry.isIntersecting) {
//                     entry.target.classList.add('animate__animated', 'animate__flipInX', `animate__delay-${index}s`, 'animate__fast');
//                     observer.unobserve(entry.target); 
//                 }
//             });
//         },
//         { threshold: 0.2 } 
//     );

//     elements.forEach(el => observer.observe(el));
// });


document.addEventListener("DOMContentLoaded", function () {
    let elements = document.querySelectorAll(".animate-card");

    let observer = new IntersectionObserver(
        (entries, observer) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__animated", "animate__flipInX", `animate__delay-${index + 1}s`, "animate__fast");
                    observer.unobserve(entry.target); // Stop observing after animation
                }
            });
        },
        { threshold: 0.2 } // Triggers when 20% of the element is visible
    );

    elements.forEach(el => observer.observe(el));
});


function caculateDPI() {

    const numberDPI = document.getElementById("dpi_input").value;
    const balance = numberDPI * 0.55 + parseInt(numberDPI);
    const box = document.getElementById("dpi_box");
    const loader = document.getElementById("dpi_loader");

    box.classList.add("d-none");
    loader.classList.add("loader");
    setTimeout(() => {
        loader.classList.remove("loader");
        box.classList.remove("d-none");
        box.classList.add("animate__animated", "animate__slideInDown");
        document.getElementById("dpi_balance").innerHTML = balance + " dp";
    }, 2000);


}


function loadPage(page) {
    fetch(page)
        .then(response => response.text())
        .then(html => {
            document.getElementById("new_content").innerHTML = html;
        });
}

function accessIOS() {

    const accessIOSbtn = document.getElementById("accessIOSbtn");


    const adminusername = "saviru";
    const adminpassword = "1234";

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    if (username == adminusername && password == adminpassword) {

        //loadPage('iosloading.html');

        window.location = "iosloading.html";
    } else {
        alert("Wrong credentials");

    }

}

document.addEventListener("DOMContentLoaded", () => {
    if (localStorage.getItem("showSuccess") === "true") {
        loadPage("iossuccess.html");
        //sessionStorage.removeItem("showSuccess"); 
    }
});

function logout() {
    localStorage.removeItem("showSuccess");
    window.location = "ioscodes.html";
}












