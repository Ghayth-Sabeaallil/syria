import { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

const mapContainerStyle = {
    width: "100%",
    height: "100vh",
};

type ListProps = {
    id?: number
    lat?: number;
    lng?: number
    type?: string,
};

type MapGoogleProps = {
    id?: string
};


const MapGoogle = ({ id }: MapGoogleProps) => {
    const { t } = useTranslation();
    const [list, setList] = useState<ListProps[]>();
    const getList = (key: string): ListProps[] => {
        const list = t(key, { returnObjects: true });
        return Array.isArray(list) ? (list as ListProps[]) : [];
    };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: "AIzaSyCAaqJaLyogLbsWinHdWEoG3x3TS-EDFYI",
    });

    const [showMarker, setShowMarker] = useState(false);

    const center = {
        lat: 35.0271824852867, lng: 38.51505715398323
    };

    useEffect(() => {
        if (isLoaded) {
            setShowMarker(true); // Trigger re-render when the map loads
        }
        const placesList = getList(id!);
        setList(placesList);
    }, [isLoaded]);

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <GoogleMap mapContainerStyle={mapContainerStyle} zoom={7.5} center={center}>
            {showMarker &&
                list!.map((marker) => (
                    <Marker
                        key={marker.id}
                        position={{ lat: marker.lat!, lng: marker.lng! }}
                        icon={{
                            url: `https://maps.google.com/mapfiles/ms/icons/${marker.type === "castle" ? "yellow" : marker.type == "mosque" ? "green" : "blue"}-dot.png`,
                            scaledSize: new window.google.maps.Size(40, 40),
                        }}
                    />
                ))}
        </GoogleMap>
    );
};

export default MapGoogle;