import { teamSectionInfo } from "./About.const";

const AboutUs = () => {
  return (
    <div className="py-10">
      <div>
        <h2 className="text-4xl font-bold text-center mb-10">Information </h2>
        <div className="company-information grid gap-10 md:grid-cols-2">
          <img
            className="w-full"
            src="https://stanford.in/wp-content/uploads/2023/09/top-in-1_1200x700px.jpg"
            alt=""
          />
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold underline">
              Few Information About The Company
            </h2>
            <p className="opacity-90">
              The company specializes in selling high-quality cricket equipment,
              catering to players of all levels, from beginners to
              professionals. They offer a wide range of products including bats,
              balls, gloves, pads, helmets, and protective gear from renowned
              brands such as GuardMaster and BatCraft. The company emphasizes
              safety and performance, ensuring all products meet international
              standards. Their flagship product, the Thigh Guard Pro, is
              celebrated for its exceptional comfort and protection. With a
              strong online presence and excellent customer service, the company
              aims to provide cricket enthusiasts with the best gear to enhance
              their game and ensure their safety on the field.
            </p>
          </div>
        </div>
      </div>

      <div>
        <h2 className="text-4xl font-bold text-center my-10">
          Mission & Vision{" "}
        </h2>
        <div className="company-information grid gap-10 md:grid-cols-2 mt-5">
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold underline">
              Our Mission and vision
            </h2>
            <span>
              <h2 className="text-xl font-bold">Mission </h2>
              <p className="opacity-90">
                Our mission is to empower cricket enthusiasts of all levels with
                high-quality, innovative, and reliable cricket equipment that
                enhances performance, ensures safety, and fosters a lifelong
                passion for the sport.
              </p>
            </span>

            <span className="mt-2">
              <h2 className="text-xl font-bold">Vision </h2>
              <p className="opacity-90">
                To be the global leader in cricket equipment, known for our
                commitment to excellence, innovation, and customer satisfaction,
                while promoting the spirit of cricket and supporting the growth
                of the game worldwide
              </p>
            </span>
          </div>

          <img
            className="w-full"
            src="https://www.shutterstock.com/image-photo/cricket-equipment-bat-ball-helmet-600nw-1121214224.jpg"
            alt=""
          />
        </div>
      </div>

      {/* contact-information */}
      <div className="contact-information py-10">
        <h2 className="text-4xl font-bold text-center my-10">
          {" "}
          Contact information{" "}
        </h2>
        <div className="lg:w-[80%] h-[95vh] lg:h-[75vh]  mx-auto relative">
          <img
            className="w-full h-full"
            src="https://img.freepik.com/premium-photo/bat-ball-cricket_431161-44593.jpg?size=626&ext=jpg&ga=GA1.1.1395991368.1711843200&semt=ais"
            alt=""
          />
          <div className="absolute top-0 left-0 bg-black opacity-70 w-full h-full"></div>
          <div className="absolute top-0 left-0 text-white flex justify-center items-center  w-full h-full">
            <form
              className="flex flex-col gap-5 w-full md:w-1/2 lg:w-1/3 px-5 md:px-0  "
              action=""
            >
              <h2 className="border-t rounded-full pt-1 px-3 text-center ">
                Get in touch
              </h2>
              <input
                className="rounded border bg-transparent px-3 py-1"
                placeholder="Name"
                type="text"
              />
              <input
                className="rounded border bg-transparent px-3 py-1"
                placeholder="Email"
                type="text"
              />
              <textarea
                className="rounded border bg-transparent px-3 py-1"
                placeholder="Message"
                name=""
                id=""
              ></textarea>
              <button className="border-b rounded-full pb-1 text-red-500 text-xl font-semibold shadow">
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="lg:w-[80%] mx-auto">
        <h2 className="text-4xl font-bold text-center my-10">Our Team</h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {teamSectionInfo.map((item) => (
            <div className="shadow-md">
              <img className="w-full h-[220px]" src={item.imgUrl} alt="" />
              <h2 className="text-center font-semibold p-2">
                Name : {item.name}
              </h2>
            </div>
          ))}
        </div>
      </div>

      {/* Our Store Location */}
      <div>
        <h2 className="text-4xl font-bold text-center mt-10 md:my-10">
          Our Store Location
        </h2>
        <div className="grid grid-cols-3">
          <div className="flex flex-col col-span-3 lg:col-span-1 mb-5 lg:mb-0  justify-center items-center">
            <h2 className="text-xl font-serif underline">John Doe</h2>
            <p>123 Cricket Lane</p>
            <p>Birmingham, West Midlands, B23 6NR</p>
            <p>United Kingdom</p>
          </div>
          <img
            className=" col-span-3 lg:col-span-2 "
            src="https://i.ibb.co/nMcKBbQ/location.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default AboutUs;
