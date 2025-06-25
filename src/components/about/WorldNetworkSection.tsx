import Image from 'next/image';
import worldMap from '../../../public/assets/images/about/map.png';
import Bangladesh from '../../../public/assets/images/about/emojione_flag-for-bangladesh.png';
import US from '../../../public/assets/images/about/emojione_flag-for-bangladesh (1).png';
import Australia from '../../../public/assets/images/about/emojione_flag-for-bangladesh (2).png';
import China from '../../../public/assets/images/about/emojione_flag-for-bangladesh (3).png';

const countries = [
    {
        name: 'Bangladesh',
        flag: Bangladesh, // ✅ no braces
        description: 'Event madness gathering innovators, & tech enthusiasts in Speed.',
    },
    {
        name: 'United States',
        flag: US,
        description: 'Event madness gathering innovators, & tech enthusiasts in Speed.',
    },
    {
        name: 'Australia',
        flag: Australia,
        description: 'Event madness gathering innovators, & tech enthusiasts in Speed.',
    },
    {
        name: 'China',
        flag: China,
        description: 'Event madness gathering innovators, & tech enthusiasts in Speed.',
    },
];


export default function WorldNetworkSection() {
    return (
        <section className="text-white py-30 px-4" style={{backgroundColor: '#262525'}}>
            <div className="text-center mb-10">
                <h2 className="text-[32px] sm:text-[40px] md:text-[44px] lg:text-[48px] font-bold mb-13 leading-tight text-center">
                    Our network & world <br/> work details.
                </h2>
            </div>

            <div className="flex justify-center mb-10">
                <div className="max-w-5xl w-full">
                    <Image
                        src={worldMap}
                        alt="World map network"
                        className="w-full h-auto mx-auto"
                        placeholder="blur"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
                {countries?.map((country, index) => (
                    <div
                        key={index}
                        className="bg-white text-black rounded-xl p-5 shadow-lg text-center hover:shadow-xl transition-shadow duration-300"
                    >
                        <div className="flex items-center gap-x-2 mb-3 pb-3 border-b-[2px] border-b-[#C4C4C4A6]">
                            <Image
                                src={country.flag}
                                alt={`${country.name} Flag`}
                                width={60}
                                height={60}
                                className="rounded-sm w-[35px] h-[35px] sm:w-[40px] sm:h-[40px] md:w-[45px] md:h-[45px]"
                            />
                            <h3 className="text-[#183B56] text-[16px] sm:text-[20px] md:text-[22px] font-medium">
                                {country.name}
                            </h3>
                        </div>
                        <p className="text-[#7C8F9E] text-left text-[16px] sm:text-[17px] md:text-[18px] leading-[24px] sm:leading-[26px] font-normal">
                            {country.description}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
