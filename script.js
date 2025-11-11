// Offers list
const offers = [
  { name: "2.5GB - 24HRS", price: "KES 50" },
  { name: "500MB - 7DAYS", price: "KES 47" },
  { name: "250MB - 24HRS", price: "KES 20" },
  { name: "5GB - 10DAYS", price: "KES 73" },
  { name: "15GB - 20DAYS", price: "KES 103" },
  { name: "20GB - 30DAYS", price: "KES 152" },
];

const offersContainer = document.getElementById("offers");
const popup = document.getElementById("popup");
const cancelBtn = document.getElementById("cancelBtn");
const purchaseBtn = document.getElementById("purchaseBtn");
const phoneInput = document.getElementById("phoneNumber");

let selectedOffer = null;

// Render offers
offers.forEach((offer) => {
  const div = document.createElement("div");
  div.classList.add("offer");
  div.innerHTML = `
    <h4>${offer.name}</h4>
    <p>${offer.price}</p>
    <button class="purchase-btn">Purchase</button>
  `;
  div.querySelector(".purchase-btn").addEventListener("click", () => openPopup(offer));
  offersContainer.appendChild(div);
});

function openPopup(offer) {
  selectedOffer = offer;
  popup.classList.remove("hidden");
}

cancelBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  phoneInput.value = "";
});

purchaseBtn.addEventListener("click", () => {
  popup.classList.add("hidden");
  alert(`Proceed to Mpesa → Lipa na Mpesa → Till 6975729 to pay for ${selectedOffer.name} (${selectedOffer.price})`);
});
