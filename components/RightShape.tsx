export default function RightShape() {
    return (
      <div className="relative w-full h-[300px] md:h-[500px] overflow-hidden">
        {/* Outer orange shape */}
        <div className="absolute right-0 top-0 w-[300px] h-full bg-yellow-500 clip-orange" />
  
        {/* Inner blue diamond */}
        <div className="absolute right-[30px] top-[50%] w-[150px] h-[150px] bg-blue-900 rotate-45 transform -translate-y-1/2" />
      </div>
    );
  }
  