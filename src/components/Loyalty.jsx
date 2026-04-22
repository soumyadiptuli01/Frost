function Loyalty(){
	return(
		<>
			<section className="section section--alt loyalty" id="loyalty">
			  <div className="section__header">
				<span className="section__label">Frost Rewards</span>
				<h2 className="section__title">Every scoop gets you closer</h2>
				<p className="section__desc">Grab a stamp card on your next visit. Ten stamps earns a free scoop — plus bonus perks along the way.</p>
			  </div>

			  <div className="loyalty__layout">
				<div className="loyalty__info">
				  <div className="loyalty__perks">
					<div className="perk">
					  <div className="perk__icon">&#10003;</div>
					  <p className="perk__text"><strong>5th stamp:</strong> Free topping upgrade on any sundae or cone — go ahead, add the brownie bites.</p>
					</div>
					<div className="perk">
					  <div className="perk__icon">&#10003;</div>
					  <p className="perk__text"><strong>10th stamp:</strong> One free single scoop in any flavor, including seasonal and limited editions.</p>
					</div>
					<div className="perk">
					  <div className="perk__icon">&#10003;</div>
					  <p className="perk__text"><strong>Birthday bonus:</strong> Show your ID on your birthday month and get a free waffle cone upgrade all week.</p>
					</div>
					<div className="perk">
					  <div className="perk__icon">&#10003;</div>
					  <p className="perk__text"><strong>Referral reward:</strong> Bring a friend who starts a card, and you both get a bonus stamp.</p>
					</div>
				  </div>

				  <a href="#hero" className="btn btn--sage" style={{marginTop: '2rem'}}>Start Collecting</a>
				</div>
				<div className="stamp-card">
				  <div className="stamp-card__header">
					<span className="stamp-card__title">Your Stamp Card</span>
					<span className="stamp-card__count">7 / 10</span>
				  </div>
				  <div className="stamp-card__grid">
					<div className="stamp stamp--filled">&#127846;</div>
					<div className="stamp stamp--filled">&#127846;</div>
					<div className="stamp stamp--filled">&#127846;</div>
					<div className="stamp stamp--filled">&#127846;</div>
					<div className="stamp stamp--reward stamp--filled">&#9733;</div>
					<div className="stamp stamp--filled">&#127846;</div>
					<div className="stamp stamp--filled">&#127846;</div>
					<div className="stamp">&#127846;</div>
					<div className="stamp">&#127846;</div>
					<div className="stamp stamp--reward">FREE</div>
				  </div>
				  <p className="stamp-card__footer">3 more scoops until your free treat!</p>
				</div>
			  </div>
			</section>
		</>
	)
}
export default Loyalty