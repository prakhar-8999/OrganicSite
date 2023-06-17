import Image from "next/image";
import {BsArrowRight} from "react-icons/bs";

/* eslint-disable react/no-unescaped-entities */
const Content = () => {
  return (
    <>
      <section className="text-gray-600 body-font bg-gray-100">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-4xl text-3xl font-medium title-font text-gray-900 mb-4">
              Embrace Nature's Best: Discover the Organic Difference!
            </h1>
            <p className="text-lg leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto text-gray-500s">
              Organic terms encompass a range of concepts related to natural and
              sustainable practices. They signify a commitment to
              environmentally friendly choices and products. Keywords like
              "organic," "natural," "chemical-free," and "non-GMO" reflect a
              focus on pure, wholesome ingredients and the avoidance of
              synthetic additives or harmful substances. Organic terms also
              highlight the importance of responsible farming methods that
              prioritize soil health, biodiversity, and the preservation of
              ecosystems
            </p>
            <div className="flex mt-6 justify-center">
              <div className="w-16 h-1 rounded-full bg-indigo-500 inline-flex"></div>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Chemical-free
                </h2>
                <p className="leading-relaxed text-base">
                  Chemical-free refers to products, processes, or environments
                  that are free from synthetic or harmful chemicals. It
                  emphasizes the use of natural and organic alternatives to
                  promote health, sustainability, and a safer living
                  environment.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <circle cx="6" cy="6" r="3"></circle>
                  <circle cx="6" cy="18" r="3"></circle>
                  <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Eco-friendly
                </h2>
                <p className="leading-relaxed text-base">
                  Eco-friendly signifies practices, products, and lifestyles
                  that prioritize the well-being of our planet. It encompasses a
                  wide range of actions aimed at reducing our ecological
                  footprint and promoting sustainability.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
            <div className="p-4 md:w-1/3 flex flex-col text-center items-center">
              <div className="w-20 h-20 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-5 flex-shrink-0">
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-10 h-10"
                  viewBox="0 0 24 24"
                >
                  <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                  <circle cx="12" cy="7" r="4"></circle>
                </svg>
              </div>
              <div className="flex-grow">
                <h2 className="text-gray-900 text-lg title-font font-medium mb-3">
                  Non-toxic
                </h2>
                <p className="leading-relaxed text-base">
                  Non-toxic refers to substances, materials, or products that
                  are free from harmful or poisonous elements. It emphasizes the
                  absence of potentially hazardous chemicals, pollutants, or
                  toxins that can have adverse effects on human health and the
                  environment.
                </p>
                <a className="mt-3 text-indigo-500 inline-flex items-center">
                  Learn More
                  <svg
                    fill="none"
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    className="w-4 h-4 ml-2"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7"></path>
                  </svg>
                </a>
              </div>
            </div>
          </div>
          <div className="flex justify-center mt-24">
            <button className="flex text-white bg-gray-400 border-0 py-2 px-6 focus:outline-none hover:bg-gray-600 rounded text-lg">
              <span className="flex gap-6">
                Discover more <BsArrowRight className="mt-[0.4rem]" />
              </span>
            </button>
          </div>
        </div>
      </section>

      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col">
            <div className="h-1 bg-gray-200 rounded overflow-hidden">
              <div className="w-96 h-full bg-green-500"></div>
            </div>
            <div className="flex flex-wrap sm:flex-row flex-col py-6 mb-12">
              <h1 className="sm:w-2/5 text-gray-900 font-medium title-font text-2xl mb-2 sm:mb-0">
                Space The Natural future!
              </h1>
              <p className="sm:w-3/5 leading-relaxed text-base sm:pl-10 pl-0">
                A natural future envisions a world where human activities are in
                harmony with nature, recognizing the intrinsic value of the
                Earth's ecosystems and biodiversity.
              </p>
            </div>
          </div>
          <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://www.inventiva.co.in/wp-content/uploads/2022/07/info_lead_june_4-780x470.webp"
                  width={70}
                  height={70}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Sustainable
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Sustainable refers to practices, processes, and lifestyles that
                aim to meet present needs without compromising the ability of
                future generations to meet their own needs. It is an approach
                that considers the long-term well-being of the planet, society,
                and the economy.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://www.mdpi.com/foods/foods-12-01057/article_deploy/html/images/foods-12-01057-g001.png"
                  width={70}
                  height={70}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Health-conscious
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Being health-conscious is a mindset that prioritizes personal
                well-being and making informed choices that support a healthy
                lifestyle. It involves actively seeking and maintaining
                physical, mental, and emotional health.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
            <div className="p-4 md:w-1/3 sm:mb-0 mb-6">
              <div className="rounded-lg h-64 overflow-hidden">
                <Image
                  alt="content"
                  className="object-cover object-center h-full w-full"
                  src="https://image.cnbcfm.com/api/v1/image/103143677-IMG_1224.JPG?v=1446749756&w=720&h=405"
                  width={70}
                  height={70}
                />
              </div>
              <h2 className="text-xl font-medium title-font text-gray-900 mt-5">
                Responsibly grown
              </h2>
              <p className="text-base leading-relaxed mt-2">
                Responsibly grown refers to agricultural practices that
                prioritize the sustainable cultivation of crops or the rearing
                of animals. It emphasizes environmentally friendly methods that
                minimize negative impacts on ecosystems, preserve natural
                resources, and promote biodiversity.
              </p>
              <a className="text-indigo-500 inline-flex items-center mt-3">
                Learn More
                <svg
                  fill="none"
                  stroke="currentColor"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  className="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 12h14M12 5l7 7-7 7"></path>
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Content;
