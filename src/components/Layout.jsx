import {NavLink} from 'react-router'
import {useRef} from 'react'
function Layout({children}){
	const hamburger = useRef();
	const sidebar = useRef();
	const overlay = useRef();
	const hamburgerClick = ()=>{
		if (sidebar.current.classList.contains('is-open')) {
			 sidebar.current.classList.remove('is-open');
			overlay.current.classList.remove('is-visible');
			hamburger.current.classList.remove('is-active');
			hamburger.current.setAttribute('aria-expanded', 'false');
			setTimeout(function () {
			  overlay.current.style.display = 'none';
			}, 300);
		} else {
			sidebar.current.classList.add('is-open');
			overlay.current.style.display = 'block';
			hamburger.current.classList.add('is-active');
			hamburger.current.setAttribute('aria-expanded', 'true');
			overlay.current.classList.add('is-visible');
		}
	}
	const navClick=()=>{
		if (sidebar.current.classList.contains('is-open')) {
			 sidebar.current.classList.remove('is-open');
			overlay.current.classList.remove('is-visible');
			hamburger.current.classList.remove('is-active');
			hamburger.current.setAttribute('aria-expanded', 'false');
			setTimeout(function () {
			  overlay.current.style.display = 'none';
			}, 300);
		}
	}
	return(
		<>
			<button className="hamburger" id="hamburger" aria-label="Toggle navigation menu" aria-expanded="false" ref={hamburger} onClick={hamburgerClick}>
			<div className="hamburger__lines">
			  <span></span>
			  <span></span>
			  <span></span>
			</div>
		  </button>
		  <div className="sidebar-overlay" id="sidebarOverlay" ref={overlay}></div>
			<aside className="sidebar" id="sidebar" role="navigation" aria-label="Main navigation" ref={sidebar}>
				<div className="sidebar__brand">
				  <div className="sidebar__logo">Fr<span>o</span>st</div>
				  <div className="sidebar__tagline">Cool Treats for Warm Hearts</div>
				</div>
				<nav className="sidebar__nav">
				  <ul>
					<li><NavLink to="/" onClick={navClick}><span className="nav-icon">{'\u25CC'}</span> Home</NavLink></li>
					<li><NavLink to="/flavors" onClick={navClick}><span className="nav-icon">{'\u273F'}</span> Flavors</NavLink></li>
					<li><NavLink to="/build-yours" onClick={navClick}><span className="nav-icon">{'\u2605'}</span> Build Yours</NavLink></li>
					<li><NavLink to="/catering" onClick={navClick}><span className="nav-icon">{'\u2606'}</span> Catering</NavLink></li>
					<li><NavLink to="/seasonal" onClick={navClick}><span className="nav-icon">{'\u2755'}</span> Seasonal</NavLink></li>
					<li><NavLink to="/loyalty" onClick={navClick}><span className="nav-icon">{'\u2764'}</span> Loyalty</NavLink></li>
				  </ul>
				</nav>
				<div className="sidebar__footer">
				  <div className="sidebar__hours">
					<strong>Hours</strong><br />	Mon – Fri: 11am – 9pm<br />Sat – Sun: 10am – 10pm
				  </div>
				</div>
			</aside>
			<main className="main">
				{children}
				<footer className="footer">
				  <div className="footer__top">
					<div>
					  <div className="footer__brand">Fr<span>o</span>st</div>
					  <p className="footer__copy">Small-batch ice cream and gelato, handcrafted daily in our kitchen on Oak Street. Made with love, served with a smile.</p>
					</div>

					<div className="footer__links">
					  <div className="footer__col">
						<h4>Menu</h4>
						<ul>
						  <li><NavLink to="/flavors">Flavors</NavLink></li>
						  <li><NavLink to="/build-yours">Build Your Own</NavLink></li>
						  <li><NavLink to="/seasonal">Seasonal Scoops</NavLink></li>
						  <li><NavLink to="/catering">Catering</NavLink></li>
						</ul>
					  </div>
					  <div className="footer__col">
						<h4>Company</h4>
						<ul>
						  <li><a href="#">Our Story</a></li>
						  <li><a href="#">Sourcing</a></li>
						  <li><a href="#">Careers</a></li>
						  <li><a href="#">Press</a></li>
						</ul>
					  </div>
					  <div className="footer__col">
						<h4>Connect</h4>
						<ul>
						  <li><a href="https://x.com/minthu" target="_blank">X Handle</a></li>
						  <li><a href="#">Facebook</a></li>
						  <li><a href="#">Instagram</a></li>
						  <li><a href="#"><span className="__cf_email__" data-cfemail="8fe7eae3e3e0cfe9fde0fcfba1ece0">[email&#160;protected]</span></a></li>
						</ul>
					  </div>
					</div>
				  </div>

				  <div className="footer__bottom">
					<p>&copy; 2026 Frost Desserts. All rights reserved.</p>
				  </div>
				</footer>
			</main>
		</>
	)
}
export default Layout