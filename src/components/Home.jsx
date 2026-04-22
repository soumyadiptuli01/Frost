function Home(){
	return(
		<>
			<section className="hero" id="hero">
			  <div className="hero__content">
				<div className="hero__badge">Now Scooping</div>
				<h1 className="hero__title">
				  Life's too short for<br /><em>boring desserts.</em>
				</h1>
				<p className="hero__subtitle">
				  Handcrafted ice cream and gelato made fresh every morning with locally sourced milk, seasonal fruits, and a dash of something unexpected.
				</p>
				<div className="hero__actions">
				  <a href="#flavors" className="btn btn--primary">Explore Flavors</a>
				  <a href="#catering" className="btn btn--outline">Book a Cart</a>
				</div>
			  </div>
			  <div className="hero__deco" aria-hidden="true">
				<div className="scoop scoop--strawberry">
				  <div className="scoop--highlight"></div>
				</div>
				<div className="scoop scoop--mint">
				  <div className="scoop--highlight"></div>
				</div>
				<div className="scoop scoop--vanilla">
				  <div className="scoop--highlight"></div>
				</div>
			  </div>
				</section>
		</>
	)
}
export default Home