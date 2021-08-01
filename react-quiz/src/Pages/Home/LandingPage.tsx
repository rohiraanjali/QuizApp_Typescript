import { useQuiz } from "../../context/quizContext";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import heroImg from "../../assets/heroImage.png"
export default function LandingPage() {

  const {quiz} = useQuiz();
  console.log({quiz})
  return (
    <>
      <Navbar  />
      <main>
        <div className="relative pt-16 pb-32 flex content-center items-center justify-center"
            style={{
              minHeight: "75vh"
            }}>
          <div className="absolute top-0 w-full h-full bg-center bg-cover"
              style={{
                backgroundImage: "url('https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1050&q=80')"
              }}>
            <span id="blackOverlay" className="w-full h-full absolute opacity-75 bg-black"></span>
          </div>
          <div className="container relative mx-auto">
              <div className="items-center flex flex-wrap">
                <div className="leading-none md:leading-loose w-full lg:w-6/12 px-4 ml-auto mr-auto text-center">
                  <div className="pr-10 pl-10">
                    <h1 className=" font-bold text-5xl text-transparent bg-clip-text bg-gradient-to-r from-green-300 to-blue-600">
                    Adopting Skills Made Easier.
                    </h1>
                    <br />
                    <p className="mt-4 text-lg text-gray-300">
                    Still making excuses to not learn that hard skill ? Well,
                    You just need one right platform to test your skills, 
                    and improve for better. And celebrate, you're here !!
                    </p>
                  </div>
                </div>
              </div>
          </div>
          <div
            className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
            style={{ height: "70px" }}
          >
            <svg
              className="absolute bottom-0 overflow-hidden"
              xmlns="http://www.w3.org/2000/svg"
              preserveAspectRatio="none"
              version="1.1"
              viewBox="0 0 2560 100"
              x="0"
              y="0"
            >
              <polygon
                className="text-gray-300 fill-current"
                points="2560 0 2560 100 0 100"
              ></polygon>
            </svg>
          </div>
        </div>

        <section className="pb-20 bg-gray-300 -mt-24">
          <div className="container mx-auto px-4">
            <div className="flex flex-wrap">
              <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400">
                    <i className="fa fa-play" aria-hidden="true"></i>
                    </div>
                    <h6 className="text-xl font-semibold">SKILLSSIO</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                  Offers you to learn the skills from top industry leaders free of distractions and ads. The private Youtube you always wanted. 
                  </p>
                  </div>
                </div>
              </div>

              <div className="w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400">
                    </div>
                    <i className="fa fa-shopping-cart" style={{position: "relative", bottom: "37px", right: "33px", color: "white"}}  aria-hidden="true"></i>
                  <h6 className="text-xl font-semibold">SkillsKart</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                  Once you learn to read, you will be forever free. Yes, and finding right books made easier with SKILLSKART. Visit now and get books recommended by top professionals. 
                  </p>
                  </div>
                </div>
              </div>

              <div className="pt-6 w-full md:w-4/12 px-4 text-center">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg">
                  <div className="px-4 py-5 flex-auto">
                    <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400">
                    <i className="fa fa-question" ></i>
                  </div>
                  <h6 className="text-xl font-semibold">SQUILLIZ: QUIZ</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                    It's Quiz time.. Yes, Are you ready to test your skills? And see your performance growth to improve & upskill.
                  </p>
                  </div>
                </div>
              </div>
            </div>
          <div className="flex flex-wrap items-center mt-32">
            <div className="w-full md:w-5/12 px-4 mr-auto ml-auto">
              <div
                className="text-gray-600 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-gray-100"
              >
                <i className="fa fa-question fa-2x" style={{position: "relative", bottom: "2px", right: "2px", color: "black"}}></i>
              </div>
              <h3 className="text-3xl mb-2 font-semibold leading-normal">
                Ready to challenge yourself ?
              </h3>
              <p
                className="text-lg font-light leading-relaxed mt-4 mb-4 text-gray-700"
              >
                Learning skills is never enough. You should be confident enough to take tests based on your skills to check upon your knowledge and capabilities on frequent basis.

              </p>
              <p
                className="text-lg font-light leading-relaxed mt-0 mb-4 text-gray-700"
              >
                The SQUILLIZ comes with wide categories of skills to choose from. Select your preferred skill and get steady go for quick quiz! GOOD LUCK👍.
              </p>
              <Link to ="/form">
                <button style={{width: "100%"}} className="bg-blue-500 hover:bg-blue-700 h-10 text-white font-bold py-2 px-4 border rounded" >EXPLORE</button>
                </Link>
              </div>
              <div className="w-full md:w-4/12 px-4 mr-auto ml-auto">
                <img src={heroImg} />
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </>
  );
}