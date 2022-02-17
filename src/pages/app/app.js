import './app.scss';
import ArtistPage from '../../pages/ArtistPage';
import ArtistPlaylist from '../../pages/ArtistPlaylist';
import SongPlaying from '../SongPlaying';

function App() {
	return (
		<>
			<div className='home mx-auto'>
				<main>
					<SongPlaying className='z-50' />
				</main>
				<div className='home__wrapper flex flex-row flex-wrap'>
					<aside className='sidenav bg-zinc-900 h-screen text-white flex py-6 px-7'>
						<nav class='sidenav__nav sticky'>
							<div className='sidenav__playTitle flex flex-row justify-between'>
								<div className='sidenav__playTitleBtn px-5'>Just Play</div>
								<div></div>
							</div>
							{/* section b */}
							<div className='sidenav__navItems mt-6'>
								<div className='sidenav__navItem mt-4'>Home</div>
								<div className='sidenav__navItem mt-4'>Compilation</div>
								<div className='sidenav__navItem mt-4'>Notifications</div>
								<div className='sidenav__navItem mt-4'>Chat</div>
								<div className='sidenav__navItem mt-4'>Search</div>
								<div className='sidenav__navItem mt-4'>Library</div>
								<div className='sidenav__navItem mt-6'>Liked Songs</div>
							</div>
							<div className='divider my-5 w-32' />
							<div className='sidenav__playists'>
								<div className='sidenav__playlistsTitle'>
									<div>PLAYLISTS</div>
								</div>
								<div className='sidenav__playlistsItem mt-4'>Kid Cudi Zone</div>
								<div className='sidenav__playlistsItem mt-3'>British Rock</div>
								<div className='sidenav__playlistsItem mt-3'>Disco Elysium</div>
							</div>
						</nav>
					</aside>
					<main
						role='main'
						class='main bg-gradient-to-t from-slate-900 to-slate-800 '
					>
						<ArtistPage />
					</main>
					<aside class='right bg-slate-900'>
						<ArtistPlaylist />
					</aside>
				</div>
			</div>
		</>
	);
}

export default App;
