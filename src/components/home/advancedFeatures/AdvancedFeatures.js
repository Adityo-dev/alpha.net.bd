import FAQ from "./faq/FAQ";
import Video from "./video/Video";

function AdvancedFeatures() {
  return (
    <main className="container mx-auto px-6">
      <h2 className="text-3xl  font-semibold text-center mb-6">
        Advanced Features
      </h2>
      <section></section>
      <section className="flex gap-8">
        <FAQ />
        <Video />
      </section>
    </main>
  );
}

export default AdvancedFeatures;
