// file: app/components/Footer.tsx
export function Footer() {
  return (
    <footer className="bg-gray-800 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center">
        <p>&copy; {new Date().getFullYear()} MOSBytes. All Rights Reserved.</p>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="#" aria-label="Twitter" className="hover:text-white">Twitter</a>
          <a href="#" aria-label="GitHub" className="hover:text-white">GitHub</a>
          <a href="#" aria-label="LinkedIn" className="hover:text-white">LinkedIn</a>
        </div>
      </div>
    </footer>
  );
}
