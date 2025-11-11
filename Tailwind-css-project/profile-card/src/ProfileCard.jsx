import './App.css';
import images from './dp.jpg'

function ProfileCard() {
    return (
        <div className='max-w-sm mx-auto bg-white rounded-lg shadow-lg overflow-hidden'>
            
            <div className='h-32 bg-gradient-to-r from-green-600 via-white to-green-600'></div>

            <div className='relative px-6 -mt-16'>
                <img className='w-32 h-32 bg-gray-300 rounded-full border-4 border-white mx-auto' src={images} alt="" />
            </div>

            <div className='text-center px-6 py-4'>
                <h2 className='text-2xl font-bold text-gray-800'>Olusola Somorin</h2>
                <p className='text-gray-600 mt-1'>AI Developer</p>
                <p>Ogun, Nigeria 🇳🇬</p>

                <p className='text-gray-700 mt-4 text-sm leading-relaxed'>Passionate about building AI tools/models to solve human problems.</p>

                <div className='flex justify-around mt-6 pt-6 border-t border-gray-200'>
                    <div>
                        <p className='text-2xl font-bold text-black-800'>10.2k</p>
                        <p className='text-xs text-gray-600 uppercase'>Followers</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-black-800'>50</p>
                        <p className='text-xs text-gray-600 uppercase'>Posts</p>
                    </div>
                    <div>
                        <p className='text-2xl font-bold text-black-800'>16.9M</p>
                        <p className='text-xs text-gray-600 uppercase'>Likes</p>
                    </div>
                </div>

                <button className='mt-6 w-full bg-green-800 text-white font-semibold py-3 rounded-lg cursor-pointer'>
                    Follow
                </button>
            </div>
        </div>
    );
}

export default ProfileCard;