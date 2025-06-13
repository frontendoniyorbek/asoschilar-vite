import logo from '../assets/logo.svg';
function Header() {
	return (
		<header className='py-4 md:py-5 backdrop-blur-lg bg-[#FEFEFEE5] sticky top-0'>
			<div className='max-w-7xl mx-auto px-10  flex items-center justify-between'>
				<a className='flex' href='/'>
					<img className='md:w-[102px] w-16' src={logo} alt='logo' width={102} height={36} />
				</a>
				<ul className='gap-6 md:flex hidden'>
					<li>
						<a className='font-bold text-base leading-6 hover:text-emerald-400 ease-in' href='#'>
							Xizmatlar
						</a>
					</li>
					<li>
						<a className='font-bold text-base leading-6 hover:text-emerald-400 ease-in' href='#'>
							Biz haqimizda
						</a>
					</li>
					<li>
						<a className='font-bold text-base leading-6 hover:text-emerald-400 ease-in' href='#'>
							Natijalar
						</a>
					</li>
				</ul>
				<button className='text-white md:text-sm text-xs font-medium leading-6 bg-[#0F172A] py-2 md:px-4 px-3 rounded-lg cursor-pointer'>
					Konsultatsiyaga yozilish
				</button>
			</div>
		</header>
	);
}

export default Header;
