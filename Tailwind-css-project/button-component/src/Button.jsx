export default function Button() {
  
  // Base classes for all buttons, 
  const btnBaseClasses = "font-semibold text-base rounded-lg cursor-pointer";
  
  // Classes for the default (medium) button size
  const btnMdClasses = `${btnBaseClasses} px-5 py-2.5`;

  return (
    <div className="bg-gray-100 bg-gray-900 min-h-screen flex items-center justify-center p-6" >
      
      <div className="w-full max-w-2xl bg-white dark:bg-gray-800 rounded-xl shadow-2xl p-8 md:p-12">
        <h1 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
          Button Component Library
        </h1>
        
        <div className="space-y-6">
          
          {/* Color Variations */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Color Variations</h2>
            <div className="flex flex-wrap gap-4 items-center">
              
              {/* Primary Button */}
              <button className={`${btnMdClasses} bg-green-600 text-white hover:bg-green-700 focus:ring-green-500`}>
                Primary
              </button>
              
              {/* Secondary Button */}
              <button className={`${btnMdClasses} bg-white text-green-700 border border-green-600 hover:bg-green-50 focus:ring-green-500`}>
                Secondary
              </button>
              
              {/* Danger Button */}
              <button className={`${btnMdClasses} bg-red-600 text-white hover:bg-red-700 focus:ring-red-500`}>
                Danger
              </button>
              
              {/* Success Button */}
              <button className={`${btnMdClasses} bg-emerald-500 text-white hover:bg-emerald-600 focus:ring-emerald-400`}>
                Success
              </button>
              
            </div>
          </div>
          
          {/* Size Variations */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-gray-300 mb-4">Size Variations</h2>
            <div className="flex flex-wrap gap-4 items-center">
              
              {/* Large Button */}
              <button className={`${btnBaseClasses} bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 px-8 py-3 text-lg`}>
                Large Button
              </button>
              
              {/* Small Button */}
              <button className={`${btnBaseClasses} bg-green-600 text-white hover:bg-green-700 focus:ring-green-500 px-3 py-2 text-sm`}>
                Small Button
              </button>
              
            </div>
          </div>
          
        </div>
      </div>
    </div>
  )
};