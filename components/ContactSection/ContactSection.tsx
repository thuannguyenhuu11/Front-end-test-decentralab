const ContactSection = () => {
  return (
    <div className="bg-[#101423] py-[50px] flex justify-center">
      <div className="max-w-[303px] text-center">
        <p className="text-base font-bold text-[#FCFCFD]">
          Apply <span className="text-transparent bg-clip-text bg-contact-gradient">Copin Affilate Program</span> to get
          more benefits!
        </p>
        <button
          title="contact"
          className="text-[13px] leading-6 font-semibold text-transparent bg-clip-text bg-contact-gradient"
        >
          Contact us
        </button>
      </div>
    </div>
  );
};

export default ContactSection;
