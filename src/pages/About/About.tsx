import { useEffect, useState } from "react";
import { AboutData } from "../../models/about";
import aboutApi from "../../api/aboutApi";
import LoadingModal from "../../components/Loading/Loading";

export default function About() {
  const [loading, setLoading] = useState<boolean>(false);
  const [dataAbout, setDataAbout] = useState<any>([]);

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const response: AboutData = await aboutApi?.getDataAbout();
        setDataAbout(response);
        setLoading(false);
      } catch (err) {
        console.log(err);
      }
    })();
  }, []);

  const currentDataAbout = dataAbout;
  const description = currentDataAbout?.information;
  const teamMember = currentDataAbout?.member;

  return (
    <>
      {loading && <LoadingModal />}
      <div className="pt-[74px] pb-[40px]">
        <div className="container px-[12px] mx-auto">
          {/* Banner */}
          <div>
            <img src={currentDataAbout?.image_banner} alt="" />
          </div>
          {/* Description */}
          <div className="mt-[24px] md:grid md:grid-rows-2 md:grid-cols-2 lg:grid-rows-1 lg:grid-cols-3 lg:gap-[18px]">
            {description?.map((des: any, index: any) => (
              <div className="py-[16px]" key={index}>
                <div className="font-semibold text-[24px]">{des.title}</div>
                <span className="text-[16px] font-normal leading-[25px] ">{des.text}</span>
              </div>
            ))}
          </div>
          {/* Our team */}
          <div className="pt-[50px] flex flex-col items-center pb-[28px]">
            <div className="text-[14px] default-color font-bold uppercase tracking-[2px]">
              {currentDataAbout?.our_team}
            </div>
            <div className="text-[36px] font-semibold">{currentDataAbout?.meet_our_team}</div>
          </div>
          {/* Out team */}
          <div className="container mx-auto">
            <div className="md:grid md:grid-rows-2 md:grid-cols-2	xl:grid-rows-1 xl:grid-cols-4">
              {teamMember?.map((mem: any, index: any) => (
                <div className="mb-[16px] px-[12px]" key={index}>
                  <img src={mem.imageUrl} alt="" />
                  <div className="pt-[12px] text-[24px] font-medium ">{mem.name}</div>
                  <div className="text-[14px] font-normal">{mem.position}</div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
