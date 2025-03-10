const Start = () => {
    return (
      <div className="container mx-auto px-4">
        <nav className="bg-blue-500 p-4 text-white flex justify-between">
          <h1 className="text-xl font-bold">My Website</h1>
          <ul className="flex space-x-4">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
          </ul>
        </nav>
  
        <section className="my-10 text-center ">
        {/* <div 
        className="relative w-full h-screen bg-cover bg-center" 
        style={{ backgroundImage: "url('/src/images/pexels-photo-939331.webp')" }}
      > */}
          <h2 className="text-3xl font-bold">Welcome to My Website</h2>
          <p className="text-gray-600 mt-2">This is a simple responsive site using React and Tailwind CSS.</p>
        
        {/* </div> */}
        </section>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">Card 1</h3>
            <p className="text-gray-600">Description of card 1.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">Card 2</h3>
            <p className="text-gray-600">Description of card 2.</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md text-center">
            <h3 className="text-xl font-bold">Card 3</h3>
            <p className="text-gray-600">Description of card 3.</p>
          </div>
        </div>
  
        <footer className="bg-gray-800 text-white text-center py-4 mt-10">
          <p>&copy; 2025 My Website. All rights reserved.</p>
        </footer>
      </div>
    );
  };
  
  export default Start;
  