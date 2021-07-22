const FeatureCard = () => {
 return (
<>
<section className="pb-20 bg-gray-300 -mt-24">
        <div className="container mx-auto px-4">
          <div className="flex flex-wrap">
            <div className="lg:pt-12 pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-red-400"
                  >
                  </div>
                  <i className="fa fa-play" style={{position: "relative", bottom: "37px", right: "30px", color: "white"}} aria-hidden="true"></i>
                  <h6 className="text-xl font-semibold">SKILLSSIO</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                   Offers you to learn the skills from top industry leaders free of distractions and ads. The private Youtube you always wanted. 
                  </p>
                </div>
              </div>
            </div>
            <div className="w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-blue-400"
                  >
                  </div>
                  <i className="fa fa-book" style={{position: "relative", bottom: "37px", right: "30px", color: "white"}}  aria-hidden="true"></i>
                  <h6 className="text-xl font-semibold">SkillsKart</h6>
                  <p className="mt-2 mb-4 text-gray-600">
                  Once you learn to read, you will be forever free. Yes, and finding right books made easier with SKILLSKART. Visit now and get books recommended by top professionals. 
                  </p>
                </div>
              </div>
            </div>
            <div className="pt-6 w-full md:w-4/12 px-4 text-center">
              <div
                className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-lg"
              >
                <div className="px-4 py-5 flex-auto">
                  <div
                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 mb-5 shadow-lg rounded-full bg-green-400"
                  >
                  </div>
                  <i className="fa fa-question" style={{position: "relative", bottom: "37px", right: "30px", color: "white"}}></i>
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
                
              </div>
              <i className="fa fa-question fa-2x" style={{position: "relative", bottom: "44px", right: "45px", color: "black"}}></i>

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
              <a
                href="https://www.creative-tim.com/learning-lab/tailwind-starter-kit#/presentation"
                className="font-bold text-gray-800 mt-8"
                ></a
              >
            </div>
            {/* categories */}

            <div className="flex space-x-4 justify-center w-full md:w-4/12 px-4 mr-auto ml-auto ">
              <div>
                
              <div className="p-4 pr-6 bg-white border-1-8 border-transparent rounded-md shadow-md space-y-2">
                <img className="w-10 h-10 mx-auto" src="https://image.flaticon.com/icons/png/512/1336/1336494.png" />
                <h2 className="text-lg font-semibold leading-6 text-center">Web Development</h2>
                <p className="text-gray-600 text-center">Quiz on HTML, CSS, JavasScript</p>
              </div>

              </div>
              </div>

          </div>
        </div>
      </section>
</>
 )   
}

export default FeatureCard;
