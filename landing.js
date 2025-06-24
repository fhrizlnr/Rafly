console.log("HALO DARI LANDING");

function onProductClick(element) {
    const productItemElement = element.closest(".product-item");
    const productName = productItemElement.querySelector(".judul").innerText;

    const hargaElements = productItemElement.querySelectorAll(".harga p");
    const hargaRp = hargaElements[0]?.innerText ?? "";
    const hargaRm = hargaElements[1]?.innerText ?? "";

    const productImage = productItemElement.querySelector("img").getAttribute("src");

    const parentDirSplitBySlash = window.location.pathname.split("/");
    const splitDir = parentDirSplitBySlash.slice(0, -1);
    splitDir.push("detail.html");

    const finalDir = splitDir.join("/");

    window.location.href = `${finalDir}?name=${encodeURIComponent(productName)}&rp=${encodeURIComponent(hargaRp)}&rm=${encodeURIComponent(hargaRm)}&image=${encodeURIComponent(productImage)}`;
}
