import './App.css'
import CardComponent from './components/Card.comp'

function App() {

  return (
    
  <div style={{display:"flex", gap:"2rem"}} >

  <CardComponent 
    user={"SK"}
    name ={"Fishtail Mountain"} 
    image ={"https://www.himalayanwonders.com/siteblog/wp-content/uploads/2016/01/fishtail-mountain.jpg"}
    descrption="Fishtail Mountain, also known as Machapuchare, is a stunning peak located in the
     Annapurna Himalayas of Nepal. Its distinctive fishtail-like double summit makes it a prominent 
     landmark in the region. Revered by both trekkers and climbers, Fishtail Mountain's beauty and 
     challenging terrain contribute to its allure in the heart of Nepal's mountainous landscape."
    />

<CardComponent 
    user={"KS"}
    name ={"Annapurna Mountain"} 
    image ={"https://upload.wikimedia.org/wikipedia/commons/f/fa/Annapurna_South-4588.jpg"}
    descrption="Annapurna Mountain, part of the Annapurna Himalayan range in Nepal, is one
     of the world's highest peaks, standing at 8,091 meters (26,545 feet). Renowned for its 
     breathtaking beauty and challenging climbs, Annapurna is a coveted destination for 
     trekkers and mountaineers, offering a remarkable experience amid the awe-inspiring
     landscapes of the Himalayas."
    />
      
     
    </div>
  ) 
  
}


export default App
