import img from "../../assets/img/NotFound.png"

const NotFound = () => {
  return (
    <div style={{display:"flex", justifyContent:"center",alignItems:"center"}}>
      <img src={img} style={{height:"500px"}}></img>
    </div>
 
  );
};

export default NotFound;
