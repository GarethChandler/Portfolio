import heroImage from "../../assets/portrait.jpeg";

function Hero() {
  return (
    <>
      <section className="flex flex-col items-center mt-10 p-3 rem">
        <img
          src={heroImage}
          alt=""
          className="w-4/7 h-auto object-cover mx-auto rounded-4xl mb-6"
        />
      </section>
    </>
  );
}
export default Hero;
