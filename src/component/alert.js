const Alert = ({ setShowAlert }) => {
  return (
    <>
      <div
        className="p-4 mb-4 text-sm text-green-700 bg-green-100 rounded-lg dark:bg-green-200 dark:text-green-800"
        role="alert"
      >
        <span className="font-medium">저장완료!</span> 적용까지 최대 수분이
        소요될 수 있습니다.
        <button
          className="bg-transparent text-2xl font-semibold leading-none right-0 top-0 mt-4 mr-6 outline-none focus:outline-none"
          onClick={() => setShowAlert([0, 0])}
        >
          <span>×</span>
        </button>
      </div>
    </>
  );
};

export default Alert;
