import FlexColumn from './FlexColumn';

function GalleriaList() {
  // 1889; 1633 1489
  return (
    <section className="m-6 grid  grid-cols-1 gap-6 md:m-10 md:grid-cols-2   md:gap-10 lg:mx-0 lg:my-10 lg:grid-cols-4 lg:gap-10">
      <FlexColumn columnId={1} />
      <FlexColumn columnId={2} />
      <FlexColumn columnId={3} />
      <FlexColumn columnId={4} />
    </section>
  );
}

export default GalleriaList;
