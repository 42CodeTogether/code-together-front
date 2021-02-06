import React from "react";
import { useHistory } from "react-router";

const Home: React.FC = () => {
  const history = useHistory();

  return (
    <>
      <div
        className={`flex h-screen max-h-screen pt-14 md:pt-16 px-2 md:px-24`}
        style={{
          background:
            'linear-gradient(0deg, rgba(0, 0, 0, 0.8), rgba(0, 0, 0, 0.8)), url("/background.jpeg")',
        }}
      >
        <div className={`self-center`}>
          <p className={`text-6xl md:text-8xl text-primary font-bold`}>
            Code Together!
          </p>
          <div className={`ml-4`}>
            <div className={`my-8 text-2xl md:text-4xl`}>
              함께 공부 하는 42Seoul
              <br />
              Code Together가 도와 드립니다.
            </div>
            <button
              className={`my-4 px-4 py-3 bg-primary text-black text-lg md:text-xl font-bold`}
              onClick={() => history.push("/project-list")}
            >
              지금 시작하기!
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
