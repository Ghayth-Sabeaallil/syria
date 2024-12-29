import { SocialIcon } from "react-social-icons"

function Footer() {
    return (
        <footer className="flex justify-center align-center p-4 h-fit fixed bottom-0 left-0 w-full z-1000 bg-gradient-to-r from-[#076f2c] to-[#6f4b07] shadow space-x-5 relative">
            <a className="flex justify-between items-center" href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://linkedin.com" /></a>
            <a className="flex justify-between items-center" href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://facebook.com" /></a>
            <a className="flex justify-between items-center" href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://telegram.com" /></a>
            <a className="flex justify-between items-center" href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://tiktok.com" /></a>
            <a className="flex justify-between items-center" href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://instagram.com" /></a>
            <a className="flex justify-between items-center" href="/"><SocialIcon style={{ height: 35, width: 35 }} url="https://whatsapp.com" /></a>
        </footer>



    )
}

export default Footer