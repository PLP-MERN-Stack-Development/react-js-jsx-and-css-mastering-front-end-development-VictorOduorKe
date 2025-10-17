
const Header = () => {
    return (
        <header className="bg-gradient-to-r from-black to-white shadow-lg">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                <div className="flex items-center justify-between">
                    <h1 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl tracking-tight">
                        Student Management
                    </h1>
                    <nav className="flex items-center space-x-6">
                        <a href="/" className="text-white text-lg hover:text-blue-200 transition-colors">
                            Home
                        </a>
                        <a href="/students" className="text-white text-lg hover:text-blue-200 transition-colors">
                            Students
                        </a>
                        <a href="/tasks" className="text-white text-lg hover:text-blue-200 transition-colors">
                            Tasks
                        </a>
                        <p className="text-white text-lg md:text-xl font-medium bg-blue-700/20 px-4 py-2 rounded-full backdrop-blur-sm">
                            Welcome Admin
                        </p>
                    </nav>
                </div>
            </div>
        </header>
    )
}

export default Header