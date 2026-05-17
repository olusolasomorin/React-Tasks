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
              MyBlog
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
                src="https://www.creativeitinstitute.com/images/course/course_1663052056.jpg"
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
                    Web development, also known as website development, refers to the tasks associated with creating, building, and maintaining websites and web applications that run online on a browser. It may, however, also include web design, web programming, and database management.
                  </p>
                  
                  <p>
                    Web development is closely related to the job of designing the features and functionality of apps (web design). The term development is usually reserved for the actual construction of these things (that is to say, the programming of sites).
                  </p>
                  <p>
                    The basic tools involved in web development are programming languages called HTML (Hypertext Markup Language), CSS (Cascading Style Sheets), and JavaScript. There are, however, a number of other programs used to “manage” or facilitate the construction of sites that would otherwise have to be done “from scratch” by writing code. A number of content management systems (CMS) fall into this category, including WordPress, Joomla!, Drupal, TYPO3, and Adobe Experience Manager, among others.
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
        &copy; {new Date().getFullYear()} MyBlog. All rights reserved.
      </footer>
    </div>
  );
}