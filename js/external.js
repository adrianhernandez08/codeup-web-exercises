function totalPrice() {
    let littleMermaid = prompt("How many days did you rent Little Mermaid?");
    let brotherBear = prompt("How many days did you rent Brother Bear?");
    let hercules = prompt("How many days did you rent Hercules?");
    let pricePerDay = 3
    let totalPrice = (Number(littleMermaid * pricePerDay) + Number(brotherBear * pricePerDay) + Number(hercules) * pricePerDay);
    return totalPrice
}
alert("Your total rental price is " + "$" + totalPrice());

function totalPay() {
    let google = prompt("How many hours did you work for Gooogle?");
    let amazon = prompt("How many hours did you work for Amazon?");
    let facebook = prompt("How many hours did you work for Facebook?");
    let googlePay = 400;
    let amazonPay = 380;
    let facbookPay = 350;
    let totalPay = (Number(google * googlePay) + (Number(amazon * amazonPay) + (Number(facebook * facebookPay));
    return totalPay;
}
alert("Your total pay for the week is $ " + totalPay".");





