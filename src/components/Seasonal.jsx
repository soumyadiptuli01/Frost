import springcollection from '../assets/images/spring-collection.avif'
import summercollection from '../assets/images/summer-collection.avif'
import autumncollection from '../assets/images/autumn-collection.avif'
import wintercollection from '../assets/images/winter-collection.avif'
import {useState} from 'react'
function Seasonal(){
	const[season,setSeason]=useState("spring");
	const tabClick = (e)=>{
		const season = e.currentTarget.getAttribute('data-season');	
		setSeason(season)
	}
	return(
		<>
			<section className="section" id="seasonal">
			  <div className="section__header">
				<span className="section__label">Limited Editions</span>
				<h2 className="section__title">Seasonal scoops, fleeting &amp; fresh</h2>
				<p className="section__desc">Each season brings a small-batch lineup inspired by what's ripe, what's in the air, and a little bit of nostalgia.</p>
			  <div className="seasonal-tabs" role="tablist">
				<button className={`seasonal-tab ${season==='spring' ? 'is-active' : null}`} data-season="spring" role="tab" aria-selected="true" aria-controls="panel-spring" onClick={tabClick}>
				  <span className="seasonal-tab__icon" aria-hidden="true">&#127800;</span> Spring
				</button>
				<button className={`seasonal-tab ${season==='summer' ? 'is-active' : null}`} data-season="summer" role="tab" aria-selected="false" aria-controls="panel-summer" onClick={tabClick}>
				  <span className="seasonal-tab__icon" aria-hidden="true">&#9728;</span> Summer
				</button>
				<button className={`seasonal-tab ${season==='autumn' ? 'is-active' : null}`} data-season="autumn" role="tab" aria-selected="false" aria-controls="panel-autumn" onClick={tabClick}>
				  <span className="seasonal-tab__icon" aria-hidden="true">&#127810;</span> Autumn
				</button>
				<button className={`seasonal-tab ${season==='winter' ? 'is-active' : null}`} data-season="winter" role="tab" aria-selected="false" aria-controls="panel-winter" onClick={tabClick}>
				  <span className="seasonal-tab__icon" aria-hidden="true">&#10052;</span> Winter
				</button>
			  </div>
			  <div className="seasonal-panels">

				<div className={`seasonal-panel ${season==='spring' ? 'is-active' : null}`} id="panel-spring" role="tabpanel">
				  <div className="seasonal-panel__visual">
					<img src={springcollection} alt="Cherry blossom almond gelato with petals" loading="lazy" />
					<span className="seasonal-panel__badge">Available Mar – May</span>
				  </div>
				  <div className="seasonal-panel__details">
					<span className="seasonal-panel__season-label">Spring Collection</span>
					<h3 className="seasonal-panel__name">Cherry Blossom Almond</h3>
					<p className="seasonal-panel__desc">A floral almond gelato topped with candied cherry blossom petals and a hint of rosewater. Light, fragrant, and utterly dreamy — like a stroll through a blooming orchard.</p>
					<div className="seasonal-panel__meta">
					  <span className="seasonal-panel__meta-tag"><span>&#127846;</span> Gelato</span>
					  <span className="seasonal-panel__meta-tag"><span>&#10024;</span> Limited Batch</span>
					  <span className="seasonal-panel__meta-tag"><span>&#127793;</span> Nut Allergy Info</span>
					</div>
					<a href="#hero" className="btn btn--primary seasonal-panel__cta">Try It Now</a>
				  </div>
				</div>

				<div className={`seasonal-panel ${season==='summer' ? 'is-active' : null}`} id="panel-summer" role="tabpanel">
				  <div className="seasonal-panel__visual">
					<img src={summercollection} alt="Mango chili lime sorbet with tropical fruits" loading="lazy" />
					<span className="seasonal-panel__badge">Available Jun – Aug</span>
				  </div>
				  <div className="seasonal-panel__details">
					<span className="seasonal-panel__season-label">Summer Collection</span>
					<h3 className="seasonal-panel__name">Mango Chili Lime</h3>
					<p className="seasonal-panel__desc">Sweet Alphonso mango sorbet dusted with Tajín chili-lime seasoning and a lime zest crumble. Where tropical heat meets frozen sweet — our most requested comeback flavor.</p>
					<div className="seasonal-panel__meta">
					  <span className="seasonal-panel__meta-tag"><span>&#127847;</span> Sorbet</span>
					  <span className="seasonal-panel__meta-tag"><span>&#127793;</span> Dairy-Free</span>
					  <span className="seasonal-panel__meta-tag"><span>&#127798;</span> Mild Spice</span>
					</div>
					<a href="#hero" className="btn btn--primary seasonal-panel__cta">Try It Now</a>
				  </div>
				</div>

				<div className={`seasonal-panel ${season==='autumn' ? 'is-active' : null}`} id="panel-autumn" role="tabpanel">
				  <div className="seasonal-panel__visual">
					<img src={autumncollection} alt="Pumpkin chai swirl ice cream with autumn spices" loading="lazy" />
					<span className="seasonal-panel__badge">Available Sep – Nov</span>
				  </div>
				  <div className="seasonal-panel__details">
					<span className="seasonal-panel__season-label">Autumn Collection</span>
					<h3 className="seasonal-panel__name">Pumpkin Chai Swirl</h3>
					<p className="seasonal-panel__desc">Spiced pumpkin ice cream swirled with masala chai caramel and topped with toasted pumpkin seeds. Cozy, warming, and the perfect excuse to add an extra scoop.</p>
					<div className="seasonal-panel__meta">
					  <span className="seasonal-panel__meta-tag"><span>&#127846;</span> Ice Cream</span>
					  <span className="seasonal-panel__meta-tag"><span>&#10024;</span> Fan Favorite</span>
					  <span className="seasonal-panel__meta-tag"><span>&#127869;</span> Contains Dairy</span>
					</div>
					<a href="#hero" className="btn btn--primary seasonal-panel__cta">Try It Now</a>
				  </div>
				</div>

				<div className={`seasonal-panel ${season==='winter' ? 'is-active' : null}`} id="panel-winter" role="tabpanel">
				  <div className="seasonal-panel__visual">
					<img src={wintercollection} alt="Peppermint bark brownie ice cream with chocolate pieces" loading="lazy" />
					<span className="seasonal-panel__badge">Available Dec – Feb</span>
				  </div>
				  <div className="seasonal-panel__details">
					<span className="seasonal-panel__season-label">Winter Collection</span>
					<h3 className="seasonal-panel__name">Peppermint Bark Brownie</h3>
					<p className="seasonal-panel__desc">Dark chocolate peppermint ice cream loaded with fudgy brownie chunks and shattered white chocolate peppermint bark. Holiday indulgence in every bite.</p>
					<div className="seasonal-panel__meta">
					  <span className="seasonal-panel__meta-tag"><span>&#127846;</span> Ice Cream</span>
					  <span className="seasonal-panel__meta-tag"><span>&#127876;</span> Holiday Special</span>
					  <span className="seasonal-panel__meta-tag"><span>&#10024;</span> Limited Batch</span>
					</div>
					<a href="#hero" className="btn btn--primary seasonal-panel__cta">Try It Now</a>
				  </div>
				</div>

			  </div></div>
			</section>
		</>
	)
}
export default Seasonal