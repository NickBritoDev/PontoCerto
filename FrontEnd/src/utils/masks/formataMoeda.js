export function formatarDinheiro(valor) {
    const valorFormatado = Number(valor).toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
    return `R$ ${valorFormatado}`;
}