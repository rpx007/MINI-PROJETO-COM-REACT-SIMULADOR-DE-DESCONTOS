export default function Resultado({ total, desconto }){
  if(total === null) return null;
  
  const valorComDesconto = total * (1 - desconto/100);
  
  return (
    <div className="result-container">
      {desconto === "" ? (
        <p>Não foi selecionado desconto. Valor total: R$ {total.toFixed(2)}</p>
      ) : (
        <p>Valor com desconto: R$ {valorComDesconto.toFixed(2)}</p>
      )}
    </div>
  )
}