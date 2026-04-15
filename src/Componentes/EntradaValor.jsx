export default function EntradaValor({preco, setPreco}){
  return(
    <div className="input-container">
      <input 
        type="number" 
        placeholder="Digite o valor"
        value={preco} 
        onChange={(e) => setPreco(Number(e.target.value))}
      />
    </div>
  )
}