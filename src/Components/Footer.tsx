function Footer() {
    const currentYear = new Date().getFullYear();
    return (
        <footer className="bg-transparent backdrop-blur-sm bg-black/15 font-bold text-lg text-center p-3 text-white fixed bottom-0 w-full">
            <p className="inline text-green-600">&copy;{currentYear} </p>
            <p className="inline text-red-600">Syria-Free.</p>
            <p className="inline "> All rights reserved.</p>
        </footer>
    )
}

export default Footer