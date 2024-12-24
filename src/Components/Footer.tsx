function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-transparent backdrop-blur-sm bg-black/15 font-bold text-base pt-2 pb-2 text-center text-white fixed bottom-0 w-full">
            <p className="inline text-green-600">&copy;{currentYear} </p>
            <p className="inline text-red-600">Syria-Free.</p>
            <p className="inline "> All rights reserved.</p>
        </footer>
    )
}

export default Footer