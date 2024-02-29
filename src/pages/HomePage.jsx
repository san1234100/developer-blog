const HomePage = () => {
  return (
    <main className="p-10 bg-slate-300 h-fit">
      <div className="flex ">
        <div className="w-[50%]">
          <img
            src="./src/assets/images/bg-hero.jpg"
            className="w-[100%]"
            alt="bg-hero"
          />
        </div>
        <div className="px-10 w-[50%] space-y-5">
          <div className="bg-[#9290C3] p-9 rounded-md text-white hover:cursor-pointer hover:bg-[#8683c1]">
            <p className="card-title">
              How to build an Web server using node js
            </p>
            <h1 className="text-lg text-gray-200">Shriram</h1>
            <div className="text-sm w-24 ms-auto">1 month ago</div>
          </div>
          <div className="bg-[#9290C3] p-9 rounded-md text-white hover:cursor-pointer hover:bg-[#8683c1]">
            <p className="card-title">
              How to build an Website using Wordpress
            </p>
            <h1 className="text-lg text-gray-200">Monish</h1>
            <div className="text-sm w-24 ms-auto">5 month ago</div>
          </div>
        </div>
      </div>

      <div className="mt-16 flex justify-around">
        <div className="card-style relative">
          <div className="w-20 h-20 bg-[#fff] rounded-full flex items-center justify-center absolute bottom-[345px]">
            <img
              src="./src/assets/images/icons/web.png"
              className="w-16"
              alt="web"
            />
          </div>
          <h1 className="text-[#1B1A55] font-semibold text-lg mt-5">
            Web Development: Navigating the Digital Frontier
          </h1>
          <p className="pt-4 text-[#0F2167]">
            Explore the dynamic world of web development, from intricate backend
            structures to captivating frontend designs. Discover the latest
            trends, tools, and techniques shaping the digital frontier. Join us
            on a journey through the intricacies of building the web of
            tomorrow.
          </p>
        </div>
        <div className="card-style relative">
          <div className="w-20 h-20 bg-[#fff] rounded-full flex items-center justify-center absolute bottom-[345px]">
            <img
              src="./src/assets/images/icons/mobileapp.png"
              className="w-16 ps-1"
              alt="mobile"
            />
          </div>
          <h1 className="text-[#1B1A55] font-semibold text-lg mt-5">
            Mastering Mobile App Development: Building for the Future
          </h1>
          <p className="pt-4 text-[#0F2167]">
            Embark on a journey into the world of mobile app development, where
            innovation meets functionality. Explore the latest trends, tools,
            and best practices shaping the landscape of mobile applications.
            From concept to deployment, discover the essential steps to bring
            your app ideas to life in this comprehensive guide.
          </p>
        </div>
        <div className="card-style relative">
          <div className="w-20 h-20 bg-[#fff] rounded-full flex items-center justify-center absolute bottom-[345px]">
            <img
              src="./src/assets/images/icons/ai.png"
              className="w-16 rounded-full"
              alt="ai"
            />
          </div>
          <h1 className="text-[#1B1A55] font-semibold text-lg mt-5">
            Exploring AI and Machine Learning: Transforming the Future
          </h1>
          <p className="pt-4 text-[#0F2167]">
            Dive into the fascinating world of AI and machine learning, where
            cutting-edge technologies are reshaping industries and
            revolutionizing daily life. Uncover the latest advancements,
            applications, and ethical considerations driving this rapid
            evolution. Join us on a journey to understand how these powerful
            tools are shaping the future of innovation and decision-making.
          </p>
        </div>
      </div>
    </main>
  );
};

export default HomePage;
