export default function Resultado({ total, desconto}){
    if(total === null) return null;

  return(
    desconto === "" ? (
      <p>Não foi selecionado desconto. Valor total: R$ {total.toFixed(2)}</p>
    ) : (
      <p>Valor com desconto aplicado: R$ {total.toFixed(2)}</p>
    )
  )
}