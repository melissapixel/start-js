// case: В интернет-магазине цены хранятся "чистыми" (без налога). Но на витрине нужно показывать цены с НДС 20%. То есть к каждой цене нужно прибавить 20%.

const netPrices = [1000, 2500, 499, 150];
const nds = 1.2;

function showPriceToUser (prices, nds) {
    return prices.map((item) => {
        return item*nds;
    })
}

console.log(showPriceToUser(netPrices, nds));