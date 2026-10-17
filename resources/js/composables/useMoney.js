// Money for display:  money(259) -> "RM 259.00"
const formatter = new Intl.NumberFormat('en-MY', { minimumFractionDigits: 2, maximumFractionDigits: 2 });

export const money = (amount, currency = 'MYR') => `${currency === 'MYR' ? 'RM' : currency} ${formatter.format(Number(amount) || 0)}`;
