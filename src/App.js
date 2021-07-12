import "./main.css";
import {useState,useEffect} from "react";
function App() {
  const images={
    i1:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/439.png",
    i2:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/252.png",
    i3:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/158.png",
    i4:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/653.png",
    i5:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/262.png",
    i6:"https://assets.pokemon.com/assets/cms2/img/pokedex/detail/087.png",
    default:"./default.png"
  }
  const [prevImg,setpreImg]=useState("");
  const [score,setScore]=useState(0);
  const [max_score,setMaxScore]=useState(0);
  const [lvl,setlvl]=useState("Path 1");
  const [img,setImg]=useState({
    img1:[images.default,images.i1],
    img2:[images.default,images.i2],
    img3:[images.default,images.i3],
    img4:[images.default,images.i2],
    img5:[images.default,images.i1],
    img6:[images.default,images.i4],
    img7:[images.default,images.i3],
    img8:[images.default,images.i4],
    img9:[images.default,images.i5],
    img10:[images.default,images.i6],
    img11:[images.default,images.i6],
    img12:[images.default,images.i5]
  });
  const cardClick=(event)=>{
    
    if(score<6){
      setlvl("Path 1");
    }
    
    let new_obj={...img};
    new_obj[event.target.id]=[new_obj[event.target.id][1],images.default]
    
    setImg(new_obj);
    setpreImg(new_obj[event.target.id][0]);
    if(prevImg!==""){
      if (prevImg===new_obj[event.target.id][0]){
        setpreImg("");
          setScore(score+1)
        
        
      }
      else if(prevImg!==new_obj[event.target.id][0]){
        setTimeout(()=>{
          resetCards();
        },500)
      
      }

    }
    
  }
  useEffect(()=>{
    
    if(score>max_score){
      setMaxScore(score);
      localStorage.setItem("max_score",score)
    }
    if(score%6===0&&score!==0){
      new_lvl_generate();
      
    }
  },[score]);


  const new_lvl_generate=()=>{
    const random_num=Math.random();
    if(random_num>0.5&&random_num<1){
      setlvl("Path 2");
      setImg({
        img2:[images.default,images.i1],
        img1:[images.default,images.i2],
        img5:[images.default,images.i3],
        img9:[images.default,images.i2],
        img3:[images.default,images.i1],
        img4:[images.default,images.i4],
        img11:[images.default,images.i3],
        img12:[images.default,images.i4],
        img6:[images.default,images.i5],
        img7:[images.default,images.i6],
        img8:[images.default,images.i6],
        img10:[images.default,images.i5]
      })
    }
    else if(random_num>0&&random_num<0.5){
      setlvl("Path 3");
      setImg({
        img12:[images.default,images.i1],
        img10:[images.default,images.i2],
        img7:[images.default,images.i3],
        img8:[images.default,images.i2],
        img6:[images.default,images.i1],
        img4:[images.default,images.i4],
        img3:[images.default,images.i3],
        img9:[images.default,images.i4],
        img11:[images.default,images.i5],
        img5:[images.default,images.i6],
        img2:[images.default,images.i6],
        img1:[images.default,images.i5]
      })
    }
  }
  useEffect(()=>{
    if(localStorage.getItem("max_score")){
      setMaxScore(localStorage.getItem("max_score"));
    }
    else{
      localStorage.setItem("max_score",0)
    }
  },[])

  const resetMaxScore=()=>{
    localStorage.setItem("max_score",0);
    setMaxScore(0)
  }

  
  const resetCards=()=>{
    setpreImg("");
    setScore(0)
      setImg({
        img1:[images.default,images.i1],
        img2:[images.default,images.i2],
        img3:[images.default,images.i3],
        img4:[images.default,images.i2],
        img5:[images.default,images.i1],
        img6:[images.default,images.i4],
        img7:[images.default,images.i3],
        img8:[images.default,images.i4],
        img9:[images.default,images.i5],
        img10:[images.default,images.i6],
        img11:[images.default,images.i6],
        img12:[images.default,images.i5]
      })

  }
  return (<>
    <div className="card main-card">
      <div className="card-body">
        <b>{lvl}</b>
       <div className="d-flex align-items-center justify-content-center"><span className="fs-3 me-3"> Current : {score}  <span className="text-success text-bold">Max Score: {max_score}</span></span><button onClick={()=>{resetCards();resetMaxScore();}} type="button" class="btn btn-outline-primary">Reset Score</button></div>
      <div class="container">
  <div class="row">
    <div class="col">
      <div className="card m-1 shadow">
        <div className="card-body">
          <img id="img1" onClick={cardClick} width="100px" height="100px" src={img.img1[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
      <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img2" onClick={cardClick}  width="100px" height="100px" src={img.img2[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img3" onClick={cardClick}  width="100px" height="100px" src={img.img3[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card m-1 shadow">
        <div className="card-body">
        <img  id="img4" onClick={cardClick} width="100px" height="100px" src={img.img4[0]}></img>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img5" onClick={cardClick}  width="100px" height="100px" src={img.img5[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img6" onClick={cardClick}  width="100px" height="100px" src={img.img6[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
      <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img7" onClick={cardClick}  width="100px" height="100px" src={img.img7[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img8" onClick={cardClick}  width="100px" height="100px" src={img.img8[0]}></img>
        </div>
      </div>
    </div>
  </div>
  <div class="row">
    <div class="col">
    <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img9" onClick={cardClick}  width="100px" height="100px" src={img.img9[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img10" onClick={cardClick}  width="100px" height="100px" src={img.img10[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
      <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img11" onClick={cardClick}  width="100px" height="100px" src={img.img11[0]}></img>
        </div>
      </div>
    </div>
    <div class="col">
    <div className="card m-1 shadow">
        <div className="card-body">
        <img id="img12" onClick={cardClick}  width="100px" height="100px" src={img.img12[0]}></img>
        </div>
      </div>
    </div>
  </div>
</div>

      </div>
    </div>
  
  </>
  );
}

export default App;
