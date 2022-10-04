export function Carrousel() {
  return (
  <>
  <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
  <div className="carousel-inner">
    <div className="carousel-item active">
      <img src="https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/daddyHis.jpg?alt=media&token=4209715a-b719-4353-88a3-2b3bd80a0f0d" height="800" className="w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/nickyDady.webp?alt=media&token=93bde5e7-116e-44ba-a179-7557a706d665" height="800" className="w-100" alt="..."/>
    </div>
    <div className="carousel-item">
      <img src="https://firebasestorage.googleapis.com/v0/b/spotify-c8d18.appspot.com/o/nickyHistoria.webp?alt=media&token=35b1d3fe-9314-4184-8b32-9d6dc241f979" height="800" className="w-100" alt="..."/>
    </div>
  </div>
  <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
    <span className="carousel-control-prev-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Previous</span>
  </button>
  <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
    <span className="carousel-control-next-icon" aria-hidden="true"></span>
    <span className="visually-hidden">Next</span>
  </button>
</div>
  </>
  
  )}
