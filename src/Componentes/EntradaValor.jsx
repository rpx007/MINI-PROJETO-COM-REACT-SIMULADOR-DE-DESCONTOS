export default function EntradaValor({preco, setPreco}){

    return(
    <input type="number" 
    placeholder="Digite o valor"
     value={preco} 
     onChange={(e) => setPreco(Number(e.target.value))
     }></input>
)}