import { Billing, Business, CardDeal, Clients, CTA, Footer, Navbar, Stats, Testimonials, Hero } from "./components";
import style from './style';

const App = () => (
	<div className='bg-primary w-full overflow-hidden'>
		<div className={`${style.paddingX} ${style.flexCenter}`}>
			<div className={`${style.boxWidth}`}>
					<Navbar/>
			</div>
		</div>

		<div className={`bg-primary ${style.flexStart}`}>
			<div className={`${style.boxWidth}`}>
					<Hero/>
			</div>
		</div>

		<div className={`bg-primary ${style.flexCenter} ${style.paddingX}`}>
			<div className={`${style.boxWidth}`}>
					<Stats/>
					<Business/>
					<Billing/>
					<CardDeal/>
					<Testimonials/>
					<Clients/>
					<CTA/>
					<Footer/>
			</div>
		</div>

	</div>
);

export default App;
