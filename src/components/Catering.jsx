import theminiscoop from '../assets/images/the-mini-scoop.avif'
import theclassiccart from '../assets/images/the-classic-cart.avif'
import thegrandparlor from '../assets/images/the-grand-parlor.avif'
function Catering(){
	return(
		<>
			<section className="section section--alt" id="catering">
			  <div className="section__header">
				<span className="section__label">Catering Cart Rental</span>
				<h2 className="section__title">Bring the sweetness to you</h2>
				<p className="section__desc">Our vintage carts come fully stocked with your choice of flavors, a friendly scooper, and all the toppings your guests could dream of.</p>
			  </div>

			  <div className="catering__grid">
				<div className="cart-card">
				  <div className="cart-card__visual">
					<img src={theminiscoop} alt="Ice cream cart setup for a small party" loading="lazy" />
					<span className="cart-card__visual-label">Intimate</span>
				  </div>
				  <div className="cart-card__body">
					<h3 className="cart-card__name">The Mini Scoop</h3>
					<p className="cart-card__desc">Perfect for birthday parties, baby showers, and small office celebrations. Compact cart, big flavors.</p>
					<div className="cart-card__details">
					  <span className="cart-card__detail">Up to 30 guests</span>
					  <span className="cart-card__detail">3 flavors</span>
					  <span className="cart-card__detail">2 hours</span>
					</div>
					<div className="cart-card__price">$350 <small>/ event</small></div>
				  </div>
				</div>
				<div className="cart-card">
				  <div className="cart-card__visual">
					<img src={theclassiccart} alt="Vintage ice cream cart at an outdoor event" loading="lazy" />
					<span className="cart-card__visual-label">Most Popular</span>
				  </div>
				  <div className="cart-card__body">
					<h3 className="cart-card__name">The Classic Cart</h3>
					<p className="cart-card__desc">Our signature vintage cart experience. Ideal for weddings, corporate events, and weekend festivals.</p>
					<div className="cart-card__details">
					  <span className="cart-card__detail">Up to 100 guests</span>
					  <span className="cart-card__detail">6 flavors</span>
					  <span className="cart-card__detail">3 hours</span>
					  <span className="cart-card__detail">Toppings bar</span>
					</div>
					<div className="cart-card__price">$750 <small>/ event</small></div>
				  </div>
				</div>
				<div className="cart-card">
				  <div className="cart-card__visual">
					<img src={thegrandparlor} alt="Elegant dessert spread at a premium catered event" loading="lazy" />
					<span className="cart-card__visual-label">Premium</span>
				  </div>
				  <div className="cart-card__body">
					<h3 className="cart-card__name">The Grand Parlor</h3>
					<p className="cart-card__desc">The full experience — double cart setup with a gelato station, waffle bar, and dedicated event coordinator.</p>
					<div className="cart-card__details">
					  <span className="cart-card__detail">Up to 250 guests</span>
					  <span className="cart-card__detail">10 flavors</span>
					  <span className="cart-card__detail">4 hours</span>
					  <span className="cart-card__detail">Waffle bar</span>
					  <span className="cart-card__detail">Coordinator</span>
					</div>
					<div className="cart-card__price">$1,400 <small>/ event</small></div>
				  </div>
				</div>
			  </div>
			</section>
		</>
	)
}
export default Catering