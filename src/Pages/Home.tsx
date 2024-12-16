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

function Home() {


    return (
        <svg baseProfile="tiny" fill="grey" height="918" stroke="#ffffff" stroke-linecap="round" stroke-linejoin="round" stroke-width="0.7" version="1.2" viewBox="0 0 1000 918" width="1000" xmlns="http://www.w3.org/2000/svg">
            <g id="features">
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
            </g>
        </svg>


    )
}

export default Home