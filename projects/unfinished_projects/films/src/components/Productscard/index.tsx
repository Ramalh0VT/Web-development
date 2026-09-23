// import "./Productscard.css"

export default function Productscard({product}){
	return(
		<div className="product-wrapper">
			<h1>{product.title}</h1>
			<img src={product.images} alt="Product image"/>
			<a href={`/products/${products.id}}`>Know more!<a/>
		</div>
	)
}
