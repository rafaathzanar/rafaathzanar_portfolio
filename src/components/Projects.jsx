import Heading from "./Heading";
import Section from "./Section";
import Tagline from "./Tagline";
import { projects } from "../constants";
import { check2, grid, loading1 } from "../assets";
import { Gradient } from "./design/Roadmap";
import Arrow from "../assets/svg/Arrow";

const Projects = () => (
  <Section id="projects"  >
    <div className="container md:pb-0">
    <div className="mt-10"></div>
      <Heading tag="Projects and Technologies" title="My Projects" />

      <div className="relative grid gap-6 md:grid-cols-2 md:gap-4 md:pb-[0rem]">
        {projects.map((item) => {
          const status = item.status === "done" ? "Done" : "In progress";

          return (
            <div
              className={`md:flex even:md:translate-y-[0rem] p-0.25 rounded-[2.5rem] ${
                item.colorful ? "bg-conic-gradient" : "bg-n-6"
              }`}
              key={item.id}
            >
              <div className="relative p-8 bg-n-8 rounded-[2.4375rem] overflow-hidden xl:p-15">
                <div className="absolute top-0 left-0 max-w-full">
                  <img
                    className="w-full"
                    src={grid}
                    width={550}
                    height={550}
                    alt="Grid"
                  />
                </div>
                <div className="relative z-1">
                  <div className="flex items-center justify-between max-w-[27rem] mb-8 md:mb-20">
                    <Tagline>{item.date}</Tagline>

                    <div className="flex items-center px-4 py-1 bg-n-1 rounded text-n-8">
                      <img
                        className="mr-2.5"
                        src={item.status === "done" ? check2 : loading1}
                        width={16}
                        height={16}
                        alt={status}
                      />
                      <div className="tagline">{status}</div>
                    </div>
                  </div>

                  {/* <div className="mb-10 -my-10 -mx-15">
                    <img
                      className="w-full"
                      src={item.imageUrl}
                      alt={item.title}
                    />
                  </div> */}
                  <h4 className="h4 mb-4">{item.title}</h4>
                  <p className="body-2 text-n-4">{item.text}</p>
                </div>
                <div className="flex items-center mt-auto">
        
        <div className="mt-4">
          <p className="text-sm font-bold text-n-1">Technologies Used:</p>
          <div className="flex gap-2 mt-2">
            {item.technologies.map((tech) => (
              <img
                key={tech.name}
                src={tech.logo}
                alt={tech.name}
                className="w-8 h-8"
                title={tech.name} // Tooltip for the technology name
              />
            ))}
          </div>
         </div>
                   <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
                        <a
                      href={item.link}
                      className="ml-auto font-code text-xs font-bold text-n-1 uppercase tracking-wider transition-transform transform hover:scale-110 hover:text-blue-500 flex items-center"
                    >
                      <Arrow className="mr-2" /> {/* Added margin to the right of the arrow */}
                      Check Out
                    </a>
                  </div>

          </div>
        </div>
     </div>
          );
        })}

        <Gradient />
      </div>
    </div>
  </Section>
);

export default Projects;
