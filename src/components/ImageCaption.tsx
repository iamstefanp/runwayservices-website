export default function ImageCaption() {
  return (
    <div className="relative inline-block">
      {/* Caption text */}
      <p className="font-['ComputerSaysNo',sans-serif] text-white text-[21px] tracking-wide uppercase m-0 whitespace-nowrap">
        SOME HUMANS DOING HUMAN{' '}
        <span className="relative inline-block">
          SHIT
          <span className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-[5px] bg-black" />
        </span>
      </p>
    </div>
  );
}