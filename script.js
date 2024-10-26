
const adv_Number = document.getElementById("advice-number");
const adv_Text = document.getElementById("advice-text");
const dice_Button = document.getElementById("dice-button");


async function fetchAdvice() {
  try {
    
    const response = await fetch("https://api.adviceslip.com/advice");
    const data = await response.json();
    //console.log(data);

    
    const adviceId = data.slip.id;
   // console.log(adviceId);
    const advice = data.slip.advice;
    //console.log(advice);


    adv_Number.textContent = `ADVICE #${adviceId}`;
    adv_Text.textContent = `“${advice}”`;
  } catch (error) {
    console.error("Error fetching advice:", error);
  }
}


dice_Button.addEventListener("click", fetchAdvice);

fetchAdvice();
