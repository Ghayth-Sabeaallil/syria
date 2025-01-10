type VideosProps = {
    title?: string;
    icon?: string;
    des?: string;
    link?: string;
};

const Videos = () => {


    return (
        <div className="grid grid-cols-1 sm:grid-cols-1 gap-4 md:grid-cols-3 m-4 p-2 justify-items-center">
            <iframe className="w-full h-[35vh]" src="https://www.youtube.com/embed/m62ZGavdj-8?si=gC-VYTlms00-UikT" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe className="w-full h-[35vh]" src="https://www.youtube.com/embed/kQe14FJRGuE?si=sNsVIbdVKALWjkjd" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
            <iframe className="w-full h-[35vh]" src="https://www.youtube.com/embed/UHa5ZO_PSTA?si=JtoKbY98aVEV8l3F" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
        </div >
    );
};

export default Videos;
