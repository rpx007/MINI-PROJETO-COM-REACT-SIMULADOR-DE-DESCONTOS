// BotaoCalcular
export default function BotaoCalcular({calcular}){
  return(
    <div className="button-container">
      <button onClick={calcular}>
        Calcular Desconto
      </button>
    </div>
  )
}