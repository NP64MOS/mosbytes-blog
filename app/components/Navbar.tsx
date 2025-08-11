// file: app/components/Navbar.tsx
import Link from 'next/link';

export function Navbar() {
  return (
    <header className="bg-white/80 backdrop-blur-md shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <Link 
          href="/" 
          className="text-2xl font-bold text-gray-800 hover:text-blue-600 transition-colors"
        >
          MOSBytes
        </Link>
        <nav className="flex items-center space-x-6">
          <Link href="#featured" className="text-gray-600 hover:text-blue-600 hidden md:block">Featured</Link>
          <Link href="#newsletter" className="text-gray-600 hover:text-blue-600 hidden md:block">Subscribe</Link>
          <Link 
            href="/admin/new-post" 
            className="bg-blue-600 text-white font-bold py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
          >
            Write a Post
          </Link>
        </nav>
      </div>
    </header>
  );
}
