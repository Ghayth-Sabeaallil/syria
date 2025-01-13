import { useTranslation } from "react-i18next";
import { StateInfoProps } from "../lib/types";
import { useEffect, useState } from "react";

interface StateInfoPropss {
    id: string;
}

const StateInfo = ({ id }: StateInfoPropss) => {
    const { t, i18n } = useTranslation();
    const [list, setList] = useState<StateInfoProps>()

    useEffect(() => {
        const getList = (key: string): StateInfoProps[] => {
            const list = t(key, { returnObjects: true });
            return Array.isArray(list) ? (list as StateInfoProps[]) : [];
        };
        const stateList = getList("StateInfo");
        const state = stateList.find(state => state.id === id);
        setList(state);
    }, [id, i18n.language]);

    return (
        <>
            {id != "syria" ? <div className="flex flex-col justify-center items-end gap-4 w-full h-full rounded-md p-8">
                <h1 className="text-4xl">{list?.name}</h1>
                <p className="text-2xl text-left">{list?.description}</p>
                <p className="text-3xl">{list?.people}N'</p>
                <p className="text-3xl">{list?.area}km²</p>
            </div> : <div className="text-4xl text-center flex flex-col justify-center intems-center w-full h-full rounded-md">
                Click on one of the state to show the info
            </div>}
        </>
    );
};

export default StateInfo;