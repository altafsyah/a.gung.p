export default function SectionTitle(props) {
  return (
    <div>
      <span className="text-2xl md:text-5xl font-bold">{props.no}—</span>
      <h1 className="text-4xl md:text-[72px] mt-5 font-bold">{props.title}</h1>
    </div>
  );
}
