function A({ color }) {

   return (
    <>
     <a className=" font-bold rounded-lg px-3 py-2 text-gray-700 hover:bg-blue-500 hover:text-gray-900 border border-black m-20" style={{backgroundColor:color}}>
    {color}
  </a>
    </>
    
)
}

export default A