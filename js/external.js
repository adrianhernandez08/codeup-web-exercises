function totalPrice() {
    let littleMermaid = prompt("How many days did you rent Little Mermaid?");
    let brotherBear = prompt("How many days did you rent Brother Bear?");
    let hercules = prompt("How many days did you rent Hercules?");
    let pricePerDay = 3
    let totalPrice = (Number(litleMermaid) + Number(brotherBear) + Number(hercules));
}
alert("Your total rental price is " + "$" + totalPrice());

