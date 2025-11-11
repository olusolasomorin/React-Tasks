export default function NigeranNewsCard() {
  
  const category = "Politics";
  const imageUrl = "https://i.pinimg.com/1200x/27/42/e4/2742e4e8b6327af025a4f071e900f3f4.jpg"; 
  const headline = "New Economic Policies Announced in Abuja";
  const excerpt = "The federal government has unveiled a new set of economic policies aimed at boosting local manufacturing and reducing dependency on imports. Analysts are cautiously optimistic.";
  const author = "Femi Adebayo";
  const date = "Nov 11, 2025";
  const readTime = "4 min read";

  return (
    
    <div className="bg-gray-100 dark:bg-gray-900 min-h-screen flex items-center justify-center p-6" style={{ fontFamily: "'Inter', sans-serif" }}>
      
        <div className="w-full max-w-sm bg-white rounded-xl shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-2xl">

            <img 
            className="w-full h-48 object-cover" 
            src={imageUrl} 
            alt={headline} 
            />
            
            <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                    <span className="inline-block bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full uppercase">
                    {category}
                    </span>
                    <span className="text-xs text-gray-500 flex items-center">

                    {/* Read Time Indicator (Clock Icon) */}
                    <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path></svg>
                    {readTime}
                    </span>
                </div>
                
                
                <h2 className="text-xl font-bold text-gray-900 mb-2 leading-tight">
                    {headline}
                </h2>
                
                
                <p className="text-gray-600 text-base leading-relaxed mb-4 line-clamp-3">
                    {excerpt}
                </p>
                
                
                <div className="flex items-center text-sm text-gray-500 mb-5">
                    <span className="font-medium text-gray-700">{author}</span>
                    <span className="mx-2">&bull;</span>
                    <span>{date}</span>
                </div>
                
                
                <a 
                    href="#" 
                    className="font-semibold text-green-600 hover:text-green-700 transition-colors duration-200"
                >
                    Read more &rarr;
                </a>
            </div>
        </div>
    </div>
  );
}