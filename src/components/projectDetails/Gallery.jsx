import Container from "../common/Container";

const Gallery = () => {
  return (
    <section className="bg-slate-950 py-20">
      <Container>
        <div>
          <h2 className="text-3xl font-bold text-white">Gallery</h2>
          <p className="mt-4 text-slate-400">
            Screenshots, designs, or project imagery that show the finished
            product.
          </p>
        </div>
      </Container>
    </section>
  );
};

export default Gallery;
