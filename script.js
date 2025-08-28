console.log("Hey, Mahmud!");

const calls = document.getElementsByClassName("btn-call");

let callHistory = [];

for (const call of calls) {
    call.addEventListener('click', function (e) {
        const totalCoin = parseInt(document.getElementById("coin-count").innerText);
        // console.log(totalCoin);
        if (totalCoin < 20) {
            alert("আপনার একাউন্টে পর্যাপ্ত পরিমাণ ব্যালেন্স নেই!");
        }
        else {
                       
            let card = call.closest(".card");
            const data = {
                name: card.querySelector(".service-name").innerText,
                num: card.querySelector(".service-num").innerText,
                time: new Date().toLocaleTimeString()
            }

        if(confirm("Calling " + data.num  + "\n" + data.name + " সংযোগ করা হচ্ছে ..."))
        {
            document.getElementById("coin-count").innerText = totalCoin - 20;
            // console.log(data);
            callHistory.push(data);

            const div = document.createElement("div");
            div.innerHTML = `
            <div class="new-call bg-gray-100 rounded-xl flex items-center justify-between p-3 my-3">
                <div class="gap-1">
                    <h1 class="font-semibold">${data.name}</h1>
                    <h2 class="text-sm">${data.num}</h2>
                </div>
                <div>${data.time}</div>
            </div>
            `
            document.getElementById("call-history").appendChild(div);

        }

        }
    })
}


const copies = document.getElementsByClassName("btn-copy");
// console.log(copies);

for (const copy of copies) {
    copy.addEventListener('click', function (f) {
        const totalCopy = parseInt(document.getElementById("copy-count").innerText);
        // console.log(totalCopy);
        if(confirm(copy.closest(".card").querySelector(".service-num").innerText + " কপি করা হয়েছে!"))
        {
            document.getElementById("copy-count").innerText = totalCopy + 1;   
            navigator.clipboard.writeText(copy.closest(".card").querySelector(".service-num").innerText);
        }    
    })
}

const hearts = document.getElementsByClassName("fa-heart");

for (const heart of hearts) {
    heart.addEventListener('click', function (f) {
        const totalHeart = parseInt(document.getElementById("heart-count").innerText);
        document.getElementById("heart-count").innerText = totalHeart + 1;
    })
}


document.getElementById("btn-call-clear").addEventListener('click', function () {
    const calls = document.getElementById("call-history").querySelectorAll(".new-call");

    for (const call of calls) {
        call.remove();
    }
});
