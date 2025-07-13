
        let modeBtn = document.querySelector("#mode");
        let curmode = "light";
        modeBtn.addEventListener("click", () => {
            if (curmode == "light") {
                let body = document.querySelector("body");
                body.style.backgroundColor = "#181c29";
                body.style.color = "white";
                curmode = "dark";
                modeBtn.innerHTML = "&#127768";
            }
            else {
                let body = document.querySelector("body");
                body.style.backgroundColor = "white";
                body.style.color = "black";
                curmode = "light";
                modeBtn.innerHTML = "&#127774";

            }
        });



        let submit_btn=document.querySelector("#submit");
        submit_btn.addEventListener("click",()=>{
            alert(`
            Details are submited
            we will try to reach you soon. 
            Thank You!`);
        });