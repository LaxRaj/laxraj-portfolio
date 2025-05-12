export default function Navbar() {
  return (
    <nav className="zain fixed top-2 left-1/2 transform -translate-x-1/2 z-50 px-20 py-1 flex items-center space-x-8 rounded-full shadow-lg border"
      style={{
        background: '#FAF9F6',
        border: '1.5px solid #fff7fa',
      }}
    >
      <a href="#" className="text-gray-700 font-extrabold tracking-wide px-4 py-1 rounded-lg hover:underline transition-all duration-150">Home</a>
      <a href="#" className="text-gray-700 font-extrabold tracking-wide px-4 py-1 rounded-lg hover:underline transition-all duration-150">About</a>
      <a href="#" className="text-gray-700 font-extrabold tracking-wide px-4 py-1 rounded-lg hover:underline transition-all duration-150">Projects</a>
      <a href="#" className="text-gray-700 font-extrabold tracking-wide px-4 py-1 rounded-lg hover:underline transition-all duration-150">Contact</a>
    </nav>
  );
}
