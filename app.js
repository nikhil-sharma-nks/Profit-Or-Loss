const initialPriceInput = document.querySelector(".initial-price");
const quantityStockInput = document.querySelector(".quantity-stock");
const currentPriceInput = document.querySelector(".current-price");

const resultMsg = document.querySelector(".result");
const errorMsg = document.querySelector(".error");

const submitBtn = document.querySelector(".btn-submit");

submitBtn.addEventListener("click", function handleSubmitClick() {
  resultMsg.style.display = "none";
  errorMsg.style.display = "none";

  const initialPrice = Number(initialPriceInput.value);
  const quantity = Number(quantityStockInput.value);
  const currentPrice = Number(currentPriceInput.value);

  if (initialPrice && quantity && currentPrice) {
    if (initialPrice > 0 && quantity > 0 && currentPrice > 0) {
      const initialAmount = initialPrice * quantity;
      const currentAmount = currentPrice * quantity;

      if (currentAmount > initialAmount) {
        const profit = currentAmount - initialAmount;
        const percentage = (profit / initialAmount) * 100;
        resultMsg.style.display = "block";
        resultMsg.style.color = "green";
        resultMsg.innerText = `This Stock Is In PROFIT of  ₹${profit}, ${percentage.toFixed(
          2
        )}% ⬆`;
      } else if (currentAmount == initialAmount) {
        resultMsg.style.display = "block";
        resultMsg.style.color = "black";
        resultMsg.innerText = "This Stock Is Neither In Profit Nor In Loss ";
      } else {
        const loss = initialAmount - currentAmount;
        const percentage = (loss / initialAmount) * 100;
        resultMsg.style.display = "block";
        resultMsg.style.color = "red";
        resultMsg.innerText = `This Stock Is In LOSS of  ₹${loss}, ${percentage.toFixed(
          2
        )}% ⬇`;
      }
    } else {
      errorMsg.style.display = "block";
      errorMsg.innerText = "Please Enter Positive Values Only";
    }
  } else {
    errorMsg.style.display = "block";
    errorMsg.innerText = "Please Enter All The Fields";
  }
});
