import React, { useState, useEffect } from 'react';
import { BookOpen, Menu, X } from 'lucide-react';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
//use ai for animation
  useEffect(() => {
    const handleScroll = () => {
      const elements = document.querySelectorAll('.animate-fade-in');
      elements.forEach((element) => {
        const rect = element.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight - 100;
        if (isVisible) {
          element.classList.add('opacity-100');
        }
      });
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="bg-white">
      {/* Nav */}
      <nav className="fixed w-full bg-white shadow-sm z-10">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex h-16 items-center justify-between">
            {/* Logo */}
            <div className="flex gap-2 items-center">
              <BookOpen className="w-8 h-8 text-blue-500" />
              <span className="text-xl font-bold">Sunshine Elementary</span>
            </div>

            {/* Desktop links */}
            <div className="hidden md:flex items-center gap-8">
              <a href="#about" className="hover:text-blue-500">About</a>
              <a href="#life" className="hover:text-blue-500">Student Life</a>
              <a href="#apply" className="hover:text-blue-500">Join Us</a>
              <button 
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                onClick={() => window.location.href = 'mailto:admissions@paruluniversity.ac.in'}
              >
                Contact Us
              </button>
            </div>
        {/* use chatgpt for mobile menu */}
            {/* Mobile menu button */}
            <button 
              className="md:hidden"
              onClick={() => setMenuOpen(!menuOpen)}
            >
              {menuOpen ? <X /> : <Menu />}
            </button>
          </div>

          {/* Mobile menu */}
          {menuOpen && (
            <div className="md:hidden py-4">
              <a href="#about" className="block py-2 hover:text-blue-500">About</a>
              <a href="#life" className="block py-2 hover:text-blue-500">Student Life</a>
              <a href="#apply" className="block py-2 hover:text-blue-500">Join Us</a>
              <button 
                className="w-full mt-2 bg-blue-500 text-white px-4 py-2 rounded"
                onClick={() => window.location.href = 'mailto:admissions@paruluniversity.ac.in'}
              >
                Contact Us
              </button>
            </div>
          )}
        </div>
      </nav>

      {/* Hero (use chatgpt for animation styling)*/}
      <div className="pt-16">
        <div className="relative h-[500px]">
          <img 
            src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
            alt="Happy school children"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 flex items-center">
            <div className="max-w-6xl mx-auto px-4 text-white">
              <h1 className="text-5xl font-bold mb-4 animate-fade-in">Welcome to Sunshine Elementary!</h1>
              <p className="text-xl max-w-xl animate-fade-in" style={{ animationDelay: '0.2s' }}>
                Where learning is fun and every child shines bright! Join our happy community of young learners.
              </p>
              <button className="mt-8 bg-yellow-400 text-gray-800 px-6 py-3 rounded-lg hover:bg-yellow-300 animate-fade-in" style={{ animationDelay: '0.4s' }}>
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* About */}
      <div id="about" className="py-20 bg-blue-50">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center animate-fade-in bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fun Learning</h3>
              <p className="text-gray-600">
                Small classes with friendly teachers who make learning exciting and fun!
              </p>
            </div>
            <div className="text-center animate-fade-in bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow" style={{ animationDelay: '0.2s' }}>
              <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Play & Learn</h3>
              <p className="text-gray-600">
                Lots of games, sports, and fun activities to learn and grow together!
              </p>
            </div>
            <div className="text-center animate-fade-in bg-white p-8 rounded-xl shadow-md hover:shadow-lg transition-shadow" style={{ animationDelay: '0.4s' }}>
              <BookOpen className="w-12 h-12 text-yellow-400 mx-auto mb-4" />
              <h3 className="text-xl font-semibold mb-2">Make Friends</h3>
              <p className="text-gray-600">
                Join our friendly community where everyone helps each other succeed!
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Student Life */}
      <div id="life" className="py-20">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12 animate-fade-in">Our Happy School Life</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="relative group overflow-hidden rounded-2xl shadow-md animate-fade-in">
              <img 
                src="https://images.unsplash.com/photo-1610484826967-09c5720778c7?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Kids learning"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Learning together in our bright classrooms
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <img 
                src="https://images.unsplash.com/photo-1588072432836-e10032774350?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Art class"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Expressing creativity in art class
                </p>
              </div>
            </div>
            <div className="relative group overflow-hidden rounded-2xl shadow-md animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <img 
                src="https://images.unsplash.com/photo-1596464716127-f2a82984de30?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
                alt="Kids playing"
                className="h-64 w-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end">
                <p className="text-white p-4 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                  Having fun during playtime
                </p>
              </div>
            </div>
          </div>  
        </div>
      </div>
      {/* Apply */}
      <div id="apply" className="bg-yellow-400 py-20">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 animate-fade-in text-gray-800">Join Our School Family!</h2>
          <p className="max-w-xl mx-auto mb-8 animate-fade-in text-gray-700" style={{ animationDelay: '0.2s' }}>
            We're excited to welcome new friends to our school! Let's start this amazing journey together.
          </p>
          <button className="bg-white text-gray-800 px-8 py-3 rounded-lg hover:bg-gray-100 animate-fade-in shadow-md" style={{ animationDelay: '0.4s' }}>
            Join Us Today
          </button>
        </div>
      </div>
      
      {/* Footer */}
      <footer className="bg-blue-600 text-white py-12">
        <div className="max-w-6xl mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="animate-fade-in">
              <h3 className="font-bold mb-4">Contact Us</h3>
              <p>Sunshine Elementary School</p>
              <p>123 Rainbow Road</p>
              <p>Sunshine City, CA 12345</p>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
              <h3 className="font-bold mb-4">Quick Links</h3>
              <div className="space-y-2">
                <p><a href="#about" className="hover:text-yellow-300">About Us</a></p>
                <p><a href="#life" className="hover:text-yellow-300">School Life</a></p>
                <p><a href="#apply" className="hover:text-yellow-300">Join Us</a></p>
              </div>
            </div>
            <div className="animate-fade-in" style={{ animationDelay: '0.4s' }}>
              <h3 className="font-bold mb-4">School Hours</h3>
              <div className="space-y-2">
                <p>Monday - Friday</p>
                <p>8:00 AM - 3:00 PM</p>
                <p>Office: 7:30 AM - 4:00 PM</p>
              </div>
            </div>
          </div>
          <div className="mt-12 pt-8 border-t border-blue-500 text-center">
            <p>© 2024 Sunshine Elementary School - Where Every Child Shines!</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
