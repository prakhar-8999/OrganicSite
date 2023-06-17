/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import {BsArrowRight} from "react-icons/bs";

const HeroSection = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Unlocking the Power of Wellness
              <br className="hidden lg:inline-block" />
              Your Journey to Good Health Begins Here!
            </h1>
            <p className="mb-8 leading-relaxed">
              Good health is the state of complete physical, mental, and social
              well-being, enabling individuals to live life to its fullest. It
              encompasses a balanced lifestyle, including regular exercise,
              nutritious diet, sufficient rest, and emotional well-being. Good
              health empowers individuals to thrive, maintain optimal energy
              levels, and effectively cope with everyday challenges. It fosters
              resilience, reduces the risk of diseases, and promotes longevity,
              allowing individuals to embrace each day with vitality and joy.
            </p>
            <button className="flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              <span className="flex gap-6">
                Know more <BsArrowRight className="mt-[0.4rem]" />
              </span>
            </button>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <Image
              className="object-cover object-center rounded-xl"
              alt="hero"
              src="https://static3.bigstockphoto.com/3/3/6/large1500/63330745.jpg"
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </section>
      <section className="text-gray-600 body-font">
        <div className="container mx-auto flex px-5 py-24 items-center justify-center flex-col">
          <Image
            className="lg:w-2/6 md:w-3/6 w-5/6 mb-10 object-cover object-center rounded-2xl"
            style={{borderRadius: "50%"}}
            alt="hero"
            src="https://community.thriveglobal.com/wp-content/uploads/2021/04/hand-holding-tree-save-nature-ecology-concept-human-hand-holding-tree-against-blurred-natural-background-save-nature-ecology-earth-170233320-1.jpg"
            width={1000}
            height={1000}
          />
          <div className="text-center lg:w-2/3 w-full">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Revitalize Your Soul with Natural Wonders
            </h1>
            <p className="mb-8 leading-relaxed">
              Nature is a magnificent tapestry of life, a vibrant symphony of
              colors, scents, and sounds. It encompasses everything from
              towering mountains to serene forests, from sprawling oceans to
              delicate wildflowers. In nature, we find solace and inspiration,
              as it offers us a sanctuary from the chaos of the modern world. It
              reminds us of our interconnectedness with all living beings and
              teaches us the importance of preservation and harmony. Nature's
              beauty is unparalleled, and its healing touch rejuvenates our
              spirits, allowing us to reconnect with our true selves. Whether
              it's exploring majestic landscapes or simply observing a single
              blade of grass, nature has an innate ability to captivate us,
              reminding us of the wonders that exist beyond our human
              constructs.
            </p>
            <div className="flex justify-center">
              <button className="flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
                <span className="flex gap-6">
                  Know more <BsArrowRight className="mt-[0.4rem]" />
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default HeroSection;
