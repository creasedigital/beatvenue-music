import {
	Routes,
	Route,
	Outlet,
	Link,
	useMatch,
	useResolvedPath,
} from 'react-router-dom';
import ArtistSection from './ArtistSection';
import About from './About';
import Events from './Events';
import Similar from './Similar';

const ArtistSectionNav = () => {
	function CustomLink({ children, to, ...props }) {
		let resolved = useResolvedPath(to);
		let match = useMatch({ path: resolved.pathname, end: true });

		return (
			<div className=' flex justify-between mb-4'>
				<Link to={to} {...props}>
					{children}
				</Link>
				{match && ' (active)'}
				<ul className='flex space-x-8 pl-8 items-center text-gray-400'>
					{<Route path='/artistrelease' element={<ArtistSection />} />}
					{<Route path='/artistabout' element={<About />} />}
					{<Route path='/artistevent' element={<Events />} />}
					{<Route path='/artistsimilar' element={<Similar />} />}
					<li className={match && 'artistSectionTab'}>
						<CustomLink to='/artistrelease'>Releases</CustomLink>
					</li>
					<li className={match && 'artistSectionTab'}>
						<CustomLink to='/artistabout'>About</CustomLink>
					</li>
					<li className={match && ' artistSectionTab'}>
						<CustomLink to='/artistevent'>Events</CustomLink>
					</li>
					<li className={match && 'artistSectionTab'}>
						<CustomLink to='/artistsimilar'>Similar</CustomLink>
					</li>
				</ul>
				<div className='flex space-x-4 items-center '>
					<span className='text-lg text-white'>&Xi;</span>
					<span className='text-xl text-white rotate-90'> &hellip;</span>
				</div>
			</div>
		);
	}
};
export default ArtistSectionNav;
