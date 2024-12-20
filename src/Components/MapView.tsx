import Aleppo from '../Components/States/Aleppo';
import Damascus from '../Components/States/Damascus';
import Daraa from '../Components/States/Daraa';
import DayrAzZawr from '../Components/States/DayrAzZawr';
import Hama from '../Components/States/Hama';
import Hasaka from '../Components/States/Hasaka';
import Homs from '../Components/States/Homs';
import Idlib from '../Components/States/Idlib';
import Latakia from '../Components/States/Latakia';
import Quneitra from '../Components/States/Quneitra';
import Raqqah from '../Components/States/Raqqah';
import RefDamascus from '../Components/States/RefDamascus';
import Suwayda from '../Components/States/Suwayda';
import Tartus from '../Components/States/Tartus';

const MapView = () => {
    return (
        <svg baseProfile="tiny" fill="#36784c" height="99vh" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" strokeWidth="2" version="1.2" viewBox="10 10 1000 918" width="100vw" xmlns="http://www.w3.org/2000/svg">
            <Idlib />
            <Aleppo />
            <Homs />
            <Hama />
            <Damascus />
            <RefDamascus />
            <Daraa />
            <Suwayda />
            <Quneitra />
            <Raqqah />
            <Hasaka />
            <DayrAzZawr />
            <Tartus />
            <Latakia />
        </svg>
    )
}

export default MapView