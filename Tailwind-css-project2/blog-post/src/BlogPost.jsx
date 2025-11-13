import { User, Calendar, Clock } from 'lucide-react';

export default function BlogPost() {
    const relatedPosts = [
        {
            id: 1,
            title: 'Understanding React Hooks',
            description: 'A deep dive into useState and useEffect.',
            imageUrl: 'https://placehold.co/100x75/e0e7ff/3730a3?text=React',
        },
        {
            id: 2,
            title: 'Tailwind CSS for Beginners',
            description: 'Learn utility-first CSS.',
            imageUrl: 'https://placehold.co/100x75/d1fae5/047857?text=CSS',
        },
        {
            id: 3,
            title: 'The Rise of TypeScript',
            description: 'Why static types matter.',
            imageUrl: 'https://placehold.co/100x75/fef3c7/b45309?text=TS',
        },
    ];

    const MetaItem = ({ icon: Icon, text }) => (
        <div className="flex items-center space-x-2 text-gray-500">
            <Icon className="w-4 h-4" />
            <span>{text}</span>
        </div>
    );

  return (
    <div className="min-h-screen bg-gray-100 font-sans text-gray-900">
      
      <header className="bg-white shadow-sm">
        <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="font-bold text-2xl text-indigo-600">
              MyAwesomeBlog
            </div>
            <div className="flex space-x-4 text-gray-700">
              <a href="#" className="hover:text-indigo-600">Home</a>
              <a href="#" className="hover:text-indigo-600">About</a>
              <a href="#" className="hover:text-indigo-600">Contact</a>
            </div>
          </div>
        </nav>
      </header>

 
      <main className="py-8 sm:py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
    
          <article className="bg-white rounded-2xl shadow-xl overflow-hidden">
            
            <div className="w-full h-64 sm:h-80 md:h-96 lg:h-[450px] overflow-hidden">
              <img
                src="https://placehold.co/1200x600/6366f1/ffffff?text=My+Blog+Post"
                alt="Featured blog post about web development"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-6 sm:p-8 lg:p-10">
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 mb-4">
                The Future of Modern Web Development
              </h1>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-sm mb-6">
                <MetaItem icon={User} text="Jane Doe" />
                <MetaItem icon={Calendar} text="November 13, 2025" />
                <MetaItem icon={Clock} text="8 min read" />
              </div>

              <div className="lg:grid lg:grid-cols-3 lg:gap-x-10">

                <div className="prose prose-lg max-w-none lg:col-span-2">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                  
                  <h2>A New Era of Frameworks</h2>
                  <p>
                    Duis aute irure dolor in reprehenderit in voluptate velit
                    esse cillum dolore eu fugiat nulla pariatur. Excepteur sint
                    occaecat cupidatat non proident, sunt in culpa qui officia
                    deserunt mollit anim id est laborum.
                  </p>
                  <p>
                    Nulla facilisi. Phasellus suscipit, sapien vel hendrerit
                    maximus, libero erat commodo augue, ac pulvinar elit
                    mauris quisPellentesque habitant morbi tristique senectus et
                    netus et malesuada fames ac turpis egestas.
                  </p>

                  <blockquote>
                    "The key to good design is not how it looks, but how it
                    works. And in web development, that means performance,
                    accessibility, and user experience."
                  </blockquote>

                  <h2>The Headless CMS Revolution</h2>
                  <p>
                    Integer posuere erat a ante venenatis dapibus posuere velit
                    aliquet. Morbi leo risus, porta ac consectetur ac,
                    vestibulum at eros. Praesent commodo cursus magna, vel
                    scelerisque nisl consectetur et.
                  </p>
                  <ul>
                    <li>Performance and Speed</li>
                    <li>Scalability and Flexibility</li>
                    <li>Security Enhancements</li>
                  </ul>
                  <p>
                    Vivamus sagittis lacus vel augue laoreet rutrum faucibus
                    dolor auctor. Donec id elit non mi porta gravida at eget
                    metus. Maecenas sed diam eget risus varius blandit sit amet
                    non magna.
                  </p>
                </div>

                <aside className="mt-10 lg:mt-0 lg:col-span-1">

                  <div className="sticky top-24 space-y-6">
                    <h3 className="text-2xl font-bold text-gray-900 border-b-2 border-indigo-200 pb-2">
                      Related Posts
                    </h3>
                    <ul className="space-y-4">
                      {relatedPosts.map((post) => (
                        <li key={post.id}>
                          <a 
                            href="#" 
                            className="flex items-center space-x-4 p-3 rounded-lg hover:bg-gray-100 transition-colors duration-200"
                          >
                            <img
                              src={post.imageUrl}
                              alt={post.title}
                              className="w-24 h-16 rounded-md object-cover flex-shrink-0"
                            />
                            <div>
                              <h4 className="font-semibold text-indigo-700">
                                {post.title}
                              </h4>
                              <p className="text-sm text-gray-600 line-clamp-2">
                                {post.description}
                              </p>
                            </div>
                          </a>
                        </li>
                      ))}
                    </ul>
                  </div>
                </aside>
              </div>
            </div>
          </article>
        </div>
      </main>

      <footer className="text-center py-8 text-gray-500 text-sm">
        &copy; {new Date().getFullYear()} MyAwesomeBlog. All rights reserved.
      </footer>
    </div>
  );
}