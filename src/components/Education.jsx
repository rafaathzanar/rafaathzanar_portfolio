import { education } from "../constants";
import Heading from "./Heading";
import Section from "./Section";
import { grid } from "../assets";

const Education = () => {
  return (
    <Section id="education">
      <div className="mt-10"></div>
      <div className="container md:pb-0">
        <Heading title="Education" />
        <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[0rem] mt-10 mb-10">
          {education.map((item) => (
            <div
              className="md:flex p-0.25 rounded-[2.5rem] bg-n-6 w-full"
              key={item.id}
            >
              <div className="relative p-6 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-10 w-full">
                <div className="absolute top-0 left-0 max-w-full">
                  <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
                </div>
                {item.logo1 && (
                  <div className="absolute top-6 right-6 z-2">
                    <img src={item.logo1} alt={item.title} className="w-12 h-12 md:w-14 md:h-14 object-contain" />
                  </div>
                )}
                <div className="relative z-1">
                  <h4 className="h6 mb-2">{item.title}</h4>
                  <p className="text-sm text-n-4 mb-4">{item.text}</p>
                  {item.text1 && (
                    <div className="flex items-center justify-between gap-3">
                      <p className="text-xs text-n-3 flex-1">{item.text1}</p>
                      {item.gpa && (
                        <div className="flex items-center px-3 py-1 bg-n-1 rounded text-n-8 whitespace-nowrap">
                          <div className="tagline">GPA: {item.gpa}</div>
                        </div>
                      )}
                    </div>
                  )}
                </div>
                {item.imageUrl && (
                  <div className="absolute inset-0 opacity-0 transition-opacity hover:opacity-10">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
};

export default Education;
