import AnimatedTitle from "./AnimatedTitle";
import Button from "./Button";

const ImageClipBox = ({ src, clipClass }) => (
  <div className={clipClass}>
    <img src={src} />
  </div>
);

const Contact = () => {
  return (
    <div id="contact-us" className="my-20 min-h-96 w-screen px-10">
      <div className="relative rounded-lg bg-blue-400 py-24 text-green-300 sm:overflow-hidden">
        <div className="absolute -left-20 top-0 hidden h-full w-72 overflow-hidden sm:block lg:left-20 lg:w-96">
          <ImageClipBox
            src="/img/contact-1.webp"
            clipClass="contact-clip-path-1"
          />
          <ImageClipBox
            src="/img/contact-2.webp"
            clipClass="contact-clip-path-2 lg:translate-y-40 translate-y-60"
          />
        </div>

        <div className="absolute -top-40 left-20 w-60 sm:top-1/2 md:left-auto md:right-10 lg:top-20 lg:w-80">
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="absolute md:scale-125"
          />
          <ImageClipBox
            src="/img/swordman.webp"
            clipClass="pharmacist-clip-path md:scale-125"
          />
        </div>

        <div className="flex-auto flex-col items-center text-center">
          <p className="mb-10 font-general text-[10px] uppercase">
            GET IN TOUCH
          </p>

          <AnimatedTitle
            title="Let&#39;s t<b>a</b>ke the <br /> next step <br /> towards b<b>e</b>tter h<b>e</b>alth."
            className="special-font !md:text-[6.2rem] w-full font-general !text-5xl !font-black !leading-[.9]"
          />

          <Button id="contact-us" title="contact us" containerClass="mt-10 cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default Contact;
