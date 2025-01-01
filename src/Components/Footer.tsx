import { SocialIcon } from "react-social-icons"

function Footer() {
    return (
        <footer className="flex justify-center items-center p-4 h-fit bottom-0 left-0 z-1000 backdrop-blur bg-transparent border-2 border-black shadow-xl rounded-lg m-4 gap-4">
            <a href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://tiktok.com" /></a>
            <a href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://facebook.com" /></a>
            <a href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://instagram.com" /></a>
        </footer>



    )
}

export default Footer