import club from '../assets/asoschilar-club-logo.svg';
import events from '../assets/asoschilar-events-logo-c.svg';
import asoschilar from '../assets/asoschilar-logo-horizontal-color.svg';
import './Ads.css';

function Ads() {
	return (
		<div className='py-6 bg-[#F2F2F7] mb-44'>
			<div className='max-w-7xl mx-auto px-10'>
				<ul className='flex justify-between items-center gap-4 hide-after-3'>
					<li className='item hover:scale-125 duration-300 ease-in'>
						<img className='w-12 md:w-14 lg:w-16 ' src={club} alt='' width={66} height={48} />
					</li>
					<li className='item  hover:scale-125 duration-300 ease-in'>
						<img className='lg:w-[164px] md:w-36 w-24' src={asoschilar} alt='' width={164} height={48} />
					</li>
					<li className='item hover:scale-125 duration-300 ease-in'>
						<img className='lg:w-[84px] md:w-16 w-14' src={events} alt='' width={84} height={48} />
					</li>
					<li className='item hover:scale-125 duration-300 ease-in'>
						<img className='w-12 md:w-14 lg:w-16 ' src={club} alt='' width={66} height={48} />
					</li>
					<li className='item  hover:scale-125 duration-300 ease-in'>
						<img className='lg:w-[164px] md:w-36 w-24' src={asoschilar} alt='' width={164} height={48} />
					</li>
					<li className='item  hover:scale-125 duration-300 ease-in'>
						<img className='lg:w-[84px] md:w-16 w-14' src={events} alt='' width={84} height={48} />
					</li>
				</ul>
			</div>
		</div>
	);
}

export default Ads;
