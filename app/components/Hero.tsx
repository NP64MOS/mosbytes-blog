// file: app/components/Hero.tsx
export function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-gray-50 text-center py-20 sm:py-24 lg:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-gray-900 leading-tight">
          Code, Create, and Conquer.
        </h1>
        <p className="mt-6 max-w-2xl mx-auto text-lg text-gray-600">
          Discover modern web development tips, from backend architecture to frontend magic — crafted for developers who want to grow.
        </p>
        <div className="mt-8">
          <a 
            href="#featured" 
            className="bg-gray-800 text-white font-bold py-3 px-6 rounded-lg hover:bg-gray-900 transition-colors text-lg shadow-lg hover:shadow-xl"
          >
            Start Reading
          </a>
        </div>
      </div>
    </section>
  );
}
