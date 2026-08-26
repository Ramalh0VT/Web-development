import "./card.css"
export default function card({name,desc,img,price}){
	return(
		<>
			<div className="wrapper">
				<h2>{name}</h2>
				<img src={"./images" + img} alt="image"/>
				<p>{desc}</p>
				<p>Price: {price} USD<b></b></p>
			</div>

		</>
	);
}
