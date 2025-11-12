export default function ColorPalette() {
    const naijaGreenShades = [
        { name: 'Green 50', hex: '#f0fdf4' },
        { name: 'Green 100', hex: '#dcfce7' },
        { name: 'Green 200', hex: '#bbf7d0' },
        { name: 'Green 300', hex: '#86efac' },
        { name: 'Green 400', hex: '#4ade80' },
        { name: 'Green 500', hex: '#22c55e' },
        { name: 'Green 600', hex: '#16a34a' },
        { name: 'Green 700', hex: '#15803d' },
        { name: 'Green 800', hex: '#166534' },
        { name: 'Green 900', hex: '#14532d' },
        { name: 'Green 950', hex: '#052e16' },
    ];

    const flagColors = [
        { name: 'Flag Green', hex: '#008751' },
        { name: 'Flag White', hex: '#FFFFFF' },
        { name: 'Flag Green', hex: '#008751' },
    ];

    function getContrastYIQ(hexcolor) {
        hexcolor = hexcolor.replace("#", "");

        const r = parseInt(hexcolor.substring(0, 2), 16);
        const g = parseInt(hexcolor.substring(2, 4), 16);
        const b = parseInt(hexcolor.substring(4, 6), 16);
        
        const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
        

        return (yiq >= 128) ? 'text-black' : 'text-white';
    }

  const ColorSwatch = ({ name, hex }) => {
  
    const textColor = getContrastYIQ(hex);

    return (
      <div className="flex flex-col rounded-lg overflow-hidden shadow-lg bg-white dark:bg-gray-800 transition-transform duration-300 hover:scale-105">
        <div
          style={{ backgroundColor: hex }}
          className={`w-full aspect-square flex items-center justify-center p-2 ${textColor} border-b border-gray-200 dark:border-gray-700`}
        >

          <span className="text-sm font-medium py-1 px-2 rounded bg-black/20 backdrop-blur-sm">
            {hex}
          </span>
        </div>
        
        <div className="p-3 text-center">
          <p className="font-semibold text-sm text-gray-800 dark:text-gray-200 truncate">
            {name}
          </p>
        </div>
      </div>
    );
  };


  return (
    <div className="p-4 md:p-8 bg-gray-100 dark:bg-gray-900 min-h-screen font-sans">
      
      <header className="text-center mb-10">
        <h1 className="text-3xl sm:text-4xl font-bold text-green-700 dark:text-green-400">
          Nigerian Color Palette
        </h1>
        <p className="text-lg text-gray-600 dark:text-gray-300 mt-2">
          A showcase of the national flag colors and shades of Naija green.
        </p>
      </header>

      <section className="mb-12 max-w-2xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
          Flag Colors
        </h2>
        <div className="grid grid-cols-3 gap-4 md:gap-6">
          {flagColors.map((color, index) => (
            <ColorSwatch key={`${color.name}-${index}`} name={color.name} hex={color.hex} />
          ))}
        </div>
      </section>

      <section className="max-w-6xl mx-auto">
        <h2 className="text-2xl font-semibold text-gray-900 dark:text-white mb-4 pb-2 border-b border-gray-300 dark:border-gray-700">
          Naija Green Shades
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 md:gap-6">
          {naijaGreenShades.map((color) => (
            <ColorSwatch key={color.name} name={color.name} hex={color.hex} />
          ))}
        </div>
      </section>
      
    </div>
  );
}