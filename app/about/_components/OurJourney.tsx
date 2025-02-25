import { History, Target, Award } from "lucide-react";

const timelineItems = [
  {
    icon: <History className="w-10 h-10 text-blue-600" />,
    title: "Where We Started",
    description:
      "Subsequent rigorous research on the grails and aspirations of prospective medics accentuated the impact of complicated admission processes on their ambitions. This elicited an ardent journey to create a nurturing and engaging consultancy that would streamline the path for each scholar while emphasizing their unique entails. Initially beginning on a small scale, our experienced education professionals vehemently sought to expand their horizons by pioneering, collaborating, and driving an impactful change in the medical field.",
    image: "/wws.jpg",
  },
  {
    icon: <Target className="w-10 h-10 text-green-600" />,
    title: "Things That Boost Us",
    description:
      "At Afro-Asian Education, our pursuit of eminence is propelled by diverse factors that enhance our growth and commitment to medics' achievements. Celebrating the successes of our scholars is crucial, as these narratives highlight our mission. The accomplishments of medical professionals who face and overcome challenges inspire us, reinforcing our dedication to advancing medical science. Their journeys motivate forthcoming generations to strive for excellence and emerge as impactful leaders in the evolving landscape of healthcare.",
    image: "/ttbu.jpg",
  },
  {
    icon: <Award className="w-10 h-10 text-yellow-500" />,
    title: "Our Result",
    description:
      "Afroasian Education has established itself as a leader in supporting MBBS aspirants in Kyrgyzstan, delivering unparalleled assistance through a streamlined admission process. Our dedicated approach enables scholars to focus entirely on their academic pursuits and foster an environment conducive to excellence in medical training. By prioritizing their education, we enhance their learning experience and lay a strong foundation for their future success in the medical profession, ensuring they are well-prepared for the challenges ahead.",
    image: "/or.jpg",
  },
];

export default function OurJourney() {
  return (
    <div className="max-w-6xl w-full mx-auto px-4">
      <h2 className="text-5xl font-bold text-center text-orange-400 mb-10">
        Our Journey
      </h2>
      <div className="relative w-full ">
        {timelineItems.map((item, index) => (
          <div
            key={index}
            className="mb-10 flex flex-col lg:flex-row items-center gap-6"
          >
            <div
              className={`flex-col flex w-full p-6  ${
                index % 2 === 0 ? "lg:flex-row-reverse" : "lg:flex-row"
              }`}
            >
              <div className="w-full lg:w-1/2 pr-4">
                <h3 className="text-xl font-semibold text-gray-900 mt-2">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-lg w-full mt-2">
                  {item.description}
                </p>
              </div>
              <div className="mt-4 w-full lg:w-1/2 mr-10">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-60 object-cover rounded-lg"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
