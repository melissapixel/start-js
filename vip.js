// На нашем ивенте есть закрытая VIP-зона. Пройти туда можно, если человек НЕ находится в черном списке, И при этом у него есть VIP-билет ИЛИ он пришел в компании действующего VIP-клиента. Порядок проверки критически важен!

let isBlacklisted = false;
let hasVipTicket = false;
let isWithVipMember = true;

let canEnterVipLounge = !isBlacklisted && (hasVipTicket || isWithVipMember);
console.log(canEnterVipLounge);