import { useQuiz } from "../context/quizContext";
import {useState} from "react"
import {State} from "./Home.types"

const FeatureCard = () => {

  const {quiz} = useQuiz();
  const [state,setState] = useState<State>({name:"",category:"default"});

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>|React.ChangeEvent<HTMLSelectElement>): void => {
    const {name,value} = event.target;
    setState( state => ({...state,[name]:value}));
}

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

            <div>
                <select className="form__control" name="category" defaultValue={state.category} onChange={handleChange}>
                     <option value="default">Select Category</option>
                    {    
                        quiz?.map( (quiz) => (
                            <option value={quiz._id} key={quiz._id}>{quiz.name}</option>
                        ))
                    }
                </select>
                {/* {error.category && <small className="invalid__feedback">{error.category}</small>} */}
            </div>

          </div>
        </div>
      </section>
</>
 )   
}

export default FeatureCard;
