import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
	  <>
	  <div className="d-flex gap-3 flex-wrap container align-items-center justify-content">
	  	<div className="card" style={{ 'width': '18rem' }}>
  <img src="/images/pudding.jpg" className="card-img-top" alt="..." />
  <div className="card-body bg-warning">
    <h5 className="card-title">
      Card title
    </h5>
    	<h1>Helooooo</h1>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>


	  	<div className="card" style={{ 'width': '18rem' }}>
  <img src="/images/pudding.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">
      Card title
    </h5>
    	<h1>Helooooo</h1>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>

	  	<div className="card" style={{ 'width': '18rem' }}>
  <img src="/images/pudding.jpg" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">
      Card title
    </h5>
    	<h1>Helooooo</h1>
    <a href="#" className="btn btn-primary">
      Go somewhere
    </a>
  </div>
</div>
	</div>
	  </>
  );
}
