import { useDispatch, useSelector } from 'react-redux';
import { Error, Loader, SongCard } from '../components';
import { genres } from '../assets/constants';
import { useGetTopChartsQuery } from '../redux/services/shazamCore';

const Discover = () => {
  // the data from query, whether the data is fetching for loading..., get if we have error
  const { data, isFetching, error } = useGetTopChartsQuery();
  const genreTitle = 'Pop';
  const { activeSong, isPlaying } = useSelector((state) => state.player);
  if (isFetching) return <Loader title="Loading songs..." />;
  if (error) return <Error />;
  return (
    <div className="flex flex-col">
      <div className="flex flex-col items-center justify-between w-full mt-4 mb-10 sm:flex-row">
        <h2 className="text-3xl font-bold text-left text-white">Discover {genreTitle}</h2>

        <select
          onChange={() => {}}
          value=""
          className="p-3 mt-5 text-sm text-gray-300 bg-black rounded-lg outline-none sm:mt-0"
        >
          {/* value in option specify the value sent to a server when form submitted */}
          {genres.map((genre) => <option key={genre.value} value={genre.value}>{genre.title}</option>)}
        </select>
      </div>

      <div className="flex flex-wrap justify-center gap-8 sm:justify-start">
        {data?.tracks.map((song, i) => (
          <SongCard
            key={song.key}
            song={song}
            isPlaying={isPlaying}
            activeSong={activeSong}
            data={data}
            i={i}
          />
        ))}
      </div>
    </div>
  );
};

export default Discover;
