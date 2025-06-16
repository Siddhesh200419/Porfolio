export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 dark:bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-gray-400 dark:text-gray-500">Built by Siddhesh Gite — © {currentYear}</p>
          </div>
          <div className="flex items-center space-x-6">
            <button 
              onClick={() => window.open("#", "_blank")}
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200"
            >
              Resume
            </button>
            <button 
              onClick={() => window.open("https://github.com/Siddhesh200419", "_blank")}
              className="text-gray-400 dark:text-gray-500 hover:text-white dark:hover:text-gray-300 transition-colors duration-200"
            >
              GitHub
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
