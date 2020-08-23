import React from 'react';
import './Body.css';
import Header from './Header';
import { useDataLayerValue } from './DataLayer';
import PlayCircleFilledIcon from '@material-ui/icons/PlayCircleFilled';
import FavoriteIcon from '@material-ui/icons/Favorite';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import SongRow from './SongRow';


function Body({ spotify }) {

    const [{ discover_weekly }, dispatch] = useDataLayerValue();

    console.log('dis', discover_weekly)
    return (
        <div className="body">
            <Header spotify={spotify} />

            <div className="body__info">
                <img 
                    // src="https://images.pexels.com/photos/1684149/pexels-photo-1684149.jpeg?cs=srgb&dl=pexels-daria-obymaha-1684149.jpg&fm=jpg"
                    src={discover_weekly?.images[0].url}
                    alt=""
                />
                <div className="body__infoText">
                    <strong>PLAYLISTS</strong>
                    <h2>Discover Weekly</h2>
                    <p>{discover_weekly?.description}</p>
                </div>
            </div>

            {/* songlist */}
            <div className="body__songs">
                <div className="body__icons">
                    <PlayCircleFilledIcon className="body__shuffle" />
                    <FavoriteIcon fontSize="large" />
                    <MoreHorizIcon />
                </div>

                {/* List of songs */}
                {discover_weekly?.tracks.items.map(item => (
                    // <SongRow track={track.item} />
                    <SongRow track={item.track} />
                    // <div>Hello</div>
                ))}
            </div>
        </div>
    )
}

export default Body
