import { check } from "../assets";
import { expertiseContents, expertiseApps } from "../constants";
import Section from "./Section";
import { LeftCurve, RightCurve } from "./design/Collaboration";

const Expertises = () => {
  return (
    <Section crosses id="expertise" className="pt-0 xl:py-2 pb-0">
      <div className="mt-10"></div>
      <div className="container lg:flex">
        <div className="max-w-[25rem] -mt-6 md:-mt-38">
          <h2 className="h2 mb-4 md:mb-8">My Expertises</h2>

          <ul className="max-w-[22rem] mb-10 md:mb-14">
            {expertiseContents.map((item) => (
              <li className="mb-3 py-3" key={item.id}>
                <div className="flex items-center">
                  <img src={check} width={24} height={24} alt="check" />
                  <h6 className="body-2 ml-5">{item.title}</h6>
                </div>
                {item.text && (
                  <p className="body-2 mt-3 text-n-4">{item.text}</p>
                )}
              </li>
            ))}
          </ul>
        </div>

        <div className="lg:ml-auto xl:w-[38rem] mt-4">
          <div className="relative left-1/2 flex w-[22rem] aspect-square border border-n-6 rounded-full -translate-x-1/2 scale-75 md:scale-100">
            <ul>
              {expertiseApps.map((app, index) => (
                <li
                  key={app.id}
                  className={`absolute top-0 left-1/2 h-1/2 -ml-[2rem] origin-bottom rotate-${
                    index * 45
                  }`} // Increased the margin-left for better spacing
                >
                  <div
                    className={`relative -top-[2rem] flex w-[4rem] h-[4rem] bg-n-7 border border-n-1/15 rounded-xl -rotate-${
                      index * 45
                    }`} // Increased the width and height for larger boxes
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center", // Ensure content is centered
                      flexDirection: "column",
                    }}
                  >
                    <img
                      className="m-auto"
                      width={app.width}
                      height={app.height}
                      alt={app.title}
                      src={app.icon}
                    />
                    <span style={{ fontSize: "10px" }}>{app.title} </span>
                  </div>
                </li>
              ))}
            </ul>

            <LeftCurve />
            <RightCurve />
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Expertises;
