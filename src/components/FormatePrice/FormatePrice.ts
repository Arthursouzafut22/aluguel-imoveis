export function formatePrice(price: number) {
  return price.toLocaleString("pt-BR", { style: "currency", currency: "BRL" });
}
