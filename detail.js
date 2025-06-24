console.log("INI DARI DETAIL");

window.onload = function () {
    const queryParams = new URLSearchParams(window.location.search);
    const productName = queryParams.get("name");
    const hargaRpStr = queryParams.get("rp")?.replace(/[^\d]/g, "") ?? "0";
    const hargaRmStr = queryParams.get("rm")?.replace(/[^\d.]/g, "") ?? "0";
    const productImage = queryParams.get("image");

    const hargaRp = parseInt(hargaRpStr);
    const hargaRm = parseFloat(hargaRmStr);

    const productNameElement = document.getElementById("product-name");
    const productPriceElement = document.getElementById("product-price");
    const productImageElement = document.getElementById("product-image");
    const counterElement = document.getElementById("counter-value");
    const totalRpElement = document.getElementById("total-rp");
    const totalRmElement = document.getElementById("total-rm");
    const whatsappButton = document.getElementById("whatsapp-btn");

    let jumlah = 1;

    productNameElement.innerText = productName ?? "Nama tidak tersedia";
    productPriceElement.innerHTML = `<p>Harga per item:</p><p>Rp ${hargaRp.toLocaleString()}</p><p>RM ${hargaRm.toFixed(2)}</p>`;
    if (productImage) productImageElement.src = productImage;

    function updateTotal() {
        counterElement.innerText = jumlah;
        totalRpElement.innerText = `Rp ${(hargaRp * jumlah).toLocaleString()}`;
        totalRmElement.innerText = `RM ${(hargaRm * jumlah).toFixed(2)}`;
    }

    updateTotal();

    document.getElementById("increase-btn").onclick = () => {
        jumlah++;
        updateTotal();
    };

    document.getElementById("decrease-btn").onclick = () => {
        if (jumlah > 1) {
            jumlah--;
            updateTotal();
        }
    };

    whatsappButton.onclick = function () {
    const message = `Halo admin Rafly Store, saya ingin membeli:\n\n📦 *${productName}*\n💸 Harga per item:\n- Rp ${hargaRp.toLocaleString()}\n- RM ${hargaRm.toFixed(2)}\n🔢 Jumlah: ${jumlah}\n\n🧮 Total:\n- Rp ${(hargaRp * jumlah).toLocaleString()}\n- RM ${(hargaRm * jumlah).toFixed(2)}`;
    const encodedMessage = encodeURIComponent(message);
    const waUrl = `https://wa.me/6285772053467?text=${encodedMessage}`;


    window.open(waUrl, "_blank");
    };
};
