import './App.css';
import Canvas from "./components/Canvas";
import {FaceModules} from "./components/FaceModule";
const draw = (context) => {
  const img1 = new Image();

  //drawing of the test image - img1
  img1.onload = function () {
    //draw background image
    context.drawImage(img1, 0, 0, 640, 480);
    //draw a box over the top
    // canvasCtx.fillStyle = "rgba(200, 0, 0, 0.5)";
    // canvasCtx.fillRect(0, 0, 500, 500);

  };

  img1.src = '1.jpg';
};


function App() {
  return (
    <div>
        <FaceModules/>
        <Canvas draw={draw} height={480} width={640} />
        <div className="relative">
            <button
              className="flex items-center px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none"
            >
                <span className="mr-4">Select image</span>
                <svg
                  className="w-5 h-5 text-indigo-100 dark:text-white"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                    <path
                      d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                    />
                </svg>
            </button>

            <div className=" absolute right-0 py-2 bg-gray-800 shadow-xl w-44">
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_detection.jpg
                </button>
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_landmark.jpg
                </button>
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_liveness.png
                </button>
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_pose.jpg
                </button>
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_expression.jpg
                </button>
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_eye.jpg
                </button>
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_gender.jpg
                </button>
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_age.jpg
                </button>
                <button
                  className="block px-6 py-2 font-semibold text-white bg-gray-800 hover:opacity-95 focus:outline-none">
                    fr_feature.jpg
                </button>
            </div>
        </div>
        <div>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Detect Face
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Extract Landmark
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Detect Liveness
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Estimate Face Pose
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Estimate Face Expression
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Estimate Eye Closeness
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Estimate Gender
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Estimate Age
            </button>
            <button
              className="px-6 py-2 font-semibold text-white bg-gray-800 rounded-md hover:opacity-95 focus:outline-none"
              aria-expanded="false">Extract Face feature
            </button>
        </div>
    </div>
  );
}

export default App;
