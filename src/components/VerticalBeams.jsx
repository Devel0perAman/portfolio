const VerticalBeams = () => {
  return (
    <div className="pointer-events-none fixed inset-0 z-10">
      <div className="beam-line left-[20%]">
        <span className="beam-flow delay-0" />
      </div>

      <div className="beam-line left-1/2">
        <span className="beam-flow delay-1" />
      </div>

      <div className="beam-line left-[80%]">
        <span className="beam-flow delay-2" />
      </div>
    </div>
  );
}

export default VerticalBeams;
