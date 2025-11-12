export default function ProductCard() {
    const products = [
        {
            id: 1,
            name: 'Jollof Rice',
            price: '₦1,500',
            image: 'https://i.pinimg.com/736x/fc/6c/cf/fc6ccf6314f207173840e9e368cc20b0.jpg',
            alt: 'A plate of Jollof Rice'
        },
        {
            id: 2,
            name: 'Ankara Fabric',
            price: '₦5,000',
            image: 'https://i.pinimg.com/1200x/50/a4/f3/50a4f3203c02f758cb89b6217712d5ef.jpg',
            alt: 'Colorful Ankara Fabric'
        },
        {
            id: 3,
            name: 'Suya',
            price: '₦1,000',
            image: 'https://i.pinimg.com/1200x/4f/58/7a/4f587a4cb9926309e64df0422e08dca0.jpg',
            alt: 'Spicy Suya sticks'
        },
        {
            id: 4,
            name: 'Aso-Ebi',
            price: '₦15,000',
            image: 'https://i.pinimg.com/736x/b8/3b/ba/b83bbaacf3d029dcddd6bf7536c507cc.jpg',
            alt: 'Elegant Aso-Ebi material'
        },
        {
            id: 5,
            name: 'Palm Wine',
            price: '₦1,200',
            image: 'https://i.pinimg.com/1200x/a2/8b/90/a28b90cd971ba4a8ce9711eba8070b45.jpg',
            alt: 'A calabash of Palm Wine'
        },
        {
            id: 6,
            name: 'Agbada',
            price: '₦25,000',
            image: 'https://i.pinimg.com/1200x/87/43/91/8743918bd41cb75d372d9c3642f50959.jpg',
            alt: 'A magnificent Agbada'
        },
        {
            id: 7,
            name: 'Chin Chin',
            price: '₦500',
            image: 'https://i.pinimg.com/1200x/8c/43/51/8c43517573225c2ba7b4eb857acf5c2d.jpg',
            alt: 'A bowl of Chin Chin'
        },
        {
            id: 8,
            name: 'Puff Puff',
            price: '₦300',
            image: 'https://i.pinimg.com/1200x/17/04/14/170414a6f4c017fb93e09240d5cf5ec4.jpg',
            alt: 'A plate of Puff Puff'
        }
    ];

    return (
        <div className="bg-gray-100 min-h-screen">
            <div className="container mx-auto px-4 py-12">
                
                <h1 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-10">
                    Our Products
                </h1>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                    
                    {products.map(product => (
                        <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl hover:-translate-y-1">
                            <img 
                                src={product.image} 
                                alt={product.alt} 
                                className="w-full h-56 object-cover" 
                            />
                            
                            <div className="p-6">
                                <h2 className="text-xl font-semibold text-gray-800 mb-2">{product.name}</h2>
                                <p className="text-lg font-bold text-gray-900 mb-4">{product.price}</p>
                                <button className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-blue-700 transition-colors">
                                    Add to Cart
                                </button>
                            </div>
                        </div>
                    ))}

                </div> 

            </div>
        </div>
    );
}