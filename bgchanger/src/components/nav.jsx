
function A({ onClick, color }) {
  const bgColors = {
    Yellow: 'bg-yellow-400 hover:bg-yellow-500 text-gray-900',
    Green: 'bg-emerald-500 hover:bg-emerald-600 text-white',
    Red: 'bg-rose-500 hover:bg-rose-600 text-white',
    Blue: 'bg-blue-500 hover:bg-blue-600 text-white',
    Pink: 'bg-pink-500 hover:bg-pink-600 text-white',
    Grey: 'bg-slate-500 hover:bg-slate-600 text-white',
    Orange: 'bg-orange-500 hover:bg-orange-600 text-white',
    Indigo: 'bg-indigo-500 hover:bg-indigo-600 text-white',
  };

  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 rounded-full font-semibold tracking-wide shadow-sm 
      transition-all duration-200 transform hover:-translate-y-0.5 active:translate-y-0 
      cursor-pointer focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500
      ${bgColors[color] || 'bg-gray-200 text-gray-800'}`}
    >
      {color}
    </button>
  );
};

export default A