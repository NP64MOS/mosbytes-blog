// file: app/components/Newsletter.tsx
export function Newsletter() {
  return (
    <section id="newsletter" className="bg-gray-500">
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h2 className="text-3xl font-bold text-white">Stay Ahead of the Curve</h2>
        <p className="mt-4 text-blue-200 max-w-2xl mx-auto">
          Subscribe to our newsletter and get the latest articles, tutorials, and insights delivered straight to your inbox.
        </p>
        <form className="mt-8 max-w-md mx-auto">
          <div className="flex flex-col sm:flex-row gap-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              required 
              className="w-full px-4 py-3 rounded-lg text-gray-800 focus:outline-none focus:ring-4 focus:ring-blue-300" 
            />
            <button 
              type="submit" 
              className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors shrink-0"
            >
              Subscribe
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}
