function Film(props){

  return(
    <>
    <h1>Filmy</h1>
    <div>
      <img src={props.src} alt={props.name} />
      <p>{props.name}</p>
      <label htmlFor="">{props.year}</label>
    </div>
    
    </>
  )
  
}
function App(){
  return(
    <div>
      <Film name="Odyseja" src="https://image.bilety24.pl/nf_repertoire_big/dealer-default/479/odyseja-plakat-teaserowy.jpg" year={2026}/>
      <Film name="Mario"  age={18}/>
      <Film name="Luigi" age={32}/>
    </div>
  )
}
export default App
