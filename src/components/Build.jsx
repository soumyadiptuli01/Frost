function Build(){
	return(
		<>
			<section className="section builder" id="builder">
			  <div className="section__header">
				<span className="section__label">Build Your Own</span>
				<h2 className="section__title">Your sundae, your rules</h2>
				<p className="section__desc">Walk through our four-step sundae builder at the counter or order ahead for pickup. Over 2,000 combinations to try.</p>
			  </div>

			  <div className="builder__layout">
				<div className="builder__steps">
				  <div className="builder-step">
					<div className="builder-step__num">1</div>
					<div>
					  <h3 className="builder-step__title">Choose Your Base</h3>
					  <p className="builder-step__text">Ice cream, gelato, frozen yogurt, or dairy-free sorbet. Pick one, two, or go all three for the ultimate bowl.</p>
					</div>
				  </div>
				  <div className="builder-step">
					<div className="builder-step__num">2</div>
					<div>
					  <h3 className="builder-step__title">Pick Your Vessel</h3>
					  <p className="builder-step__text">Classic waffle cone, handmade sugar bowl, glass cup, or our signature chocolate-dipped mega cone.</p>
					</div>
				  </div>
				  <div className="builder-step">
					<div className="builder-step__num">3</div>
					<div>
					  <h3 className="builder-step__title">Load the Toppings</h3>
					  <p className="builder-step__text">Crushed Oreos, toasted coconut, candied pecans, fresh berries, brownie bites, mochi chunks, and 20 more.</p>
					</div>
				  </div>
				  <div className="builder-step">
					<div className="builder-step__num">4</div>
					<div>
					  <h3 className="builder-step__title">Drizzle &amp; Finish</h3>
					  <p className="builder-step__text">Hot fudge, caramel sauce, matcha drizzle, raspberry coulis, or honey — plus a sprinkle of sea salt or edible glitter.</p>
					</div>
				  </div>
				</div>
				<div className="builder__preview">
				  <div className="builder__preview-bowl">
					<div className="builder__preview-scoop1"></div>
					<div className="builder__preview-scoop2"></div>
					<div className="builder__preview-scoop3"></div>
				  </div>
				  <p className="builder__preview-text">Build-Your-Own Sundae</p>
				  <p className="builder__preview-price">From $7.50</p>
				  <p className="builder__preview-note">Base + 3 toppings included</p>
				</div>
			  </div>
			</section>
		</>
	)
}
export default Build