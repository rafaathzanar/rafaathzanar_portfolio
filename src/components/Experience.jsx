import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { experiences } from "../constants";
import { grid } from "../assets";

const Experience = () => (
  <Section id="experience">
    <div className="container md:pb-0">
      <div className="mt-10"></div>
      <Heading tag="Experience" title="Professional Experience" />

      <div className="relative grid gap-6 md:grid-cols-1 md:gap-6 md:pb-[0rem]">
        {experiences.map((item) => (
          <div
            className="md:flex p-0.25 rounded-[2.5rem] bg-n-6"
            key={item.id}
          >
            <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
              <div className="absolute top-0 left-0 max-w-full">
                <img className="w-full" src={grid} width={550} height={550} alt="Grid" />
              </div>
              <div className="absolute top-8 right-8 z-2">
                <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                  <div className="tagline">{item.location}</div>
                </div>
              </div>
              <div className="relative z-1">
                <div className="flex items-center justify-start mb-8 md:mb-20">
                  <Tagline>{item.period}</Tagline>
                </div>

                <h4 className="h4 mb-1">{item.company}</h4>
                <p className="h6 text-color-1 mb-4">{item.role}</p>
                <ul className="body-2 text-n-4 list-disc pl-5 space-y-2">
                  {item.highlights.map((point, idx) => (
                    <li key={idx}>{point}</li>
                  ))}
                </ul>
              </div>
              <div className="flex items-center mt-6">
                <div>
                  <p className="text-sm font-bold text-n-1">Technologies:</p>
                  <div className="flex gap-2 mt-2 flex-wrap">
                    {item.technologies.map((tech) => (
                      <img
                        key={tech.name}
                        src={tech.logo}
                        alt={tech.name}
                        className="w-8 h-8"
                        title={tech.name}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </Section>
);

export default Experience;


