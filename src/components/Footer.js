import React, { Component } from 'react'

export default class Footer extends Component {
	render() {
		return (
			<div className="container copyright-section">
				<section className="eight columns">
					Kıyanç İnşaat © 2014<br></br>Adres: Orhaniye Mah.Hürriyet Cad.Kahyaoğlu Apt Kat :4 No:15 Muğla<br></br>Tel: 0 252 214 04 48 - 0 252 214 44 08</section>
				<section className="eight columns">
				</section>
				<section className="eight columns">
					<ul className="footer-nav">
						<li>
							<a href="http://www.teknofikir.com"
							><img src="images/teknofikir.png" alt="teknofikir"/></a>
						</li>
					</ul>
				</section>
			</div>
		)
	}
}
