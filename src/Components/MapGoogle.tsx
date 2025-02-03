import { useState, useEffect } from "react";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import { useTranslation } from "react-i18next";

type ListProps = {
    id?: number
    lat?: number;
    lng?: number
    type?: string,
    name?: string
};

const MapGoogle = () => {
    const { t } = useTranslation();
    const [list, setList] = useState<ListProps[]>();
    const getList = (key: string): ListProps[] => {
        const list = t(key, { returnObjects: true });
        return Array.isArray(list) ? (list as ListProps[]) : [];
    };
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: import.meta.env.VITE_API_KEY,
    });

    const [showMarker, setShowMarker] = useState(false);

    const center = {
        lat: 35.0271824852867, lng: 38.51505715398323
    };

    useEffect(() => {
        if (isLoaded) {
            setShowMarker(true); // Trigger re-render when the map loads
        }
        const placesList = getList("discoverPlaces");
        setList(placesList);
    }, [isLoaded]);

    if (!isLoaded) return <div>Loading...</div>;
    return (
        <GoogleMap mapContainerStyle={{
            width: "100%",
            height: "100%",
            borderRadius: 15,
            border: "4px solid black"
        }} zoom={7} center={center}>
            {showMarker &&
                list!.map((marker) => (
                    <Marker
                        key={marker.id}
                        title={marker.name}
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