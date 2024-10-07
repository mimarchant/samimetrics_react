export const Hero = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center text-white text-center">
        <h1 className="text-3xl lg:text-5xl font-[900]">
          TOMA EL CONTROL DE LA <br /> SUSTENTABILIDAD
        </h1>
        <p className="text-xl lg:text-2xl mt-2">
          de tu BPS con SAMI, la RED de gestión de SUSTENTABILIDAD
        </p>
        <span className="text-xs inline-block mt-5 mb-2">
          {" "}
          REPRODUCIR VIDEO{" "}
        </span>
        <Play
          className="w-12 h-12 mt-5 cursor-pointer hover:scale-105"
          id="play-button"
        />
      </div>

      <div id="video-modal" className="modal">
        <div className="modal-content">
          <span className="close" id="close-button">
            &times;
          </span>
          <iframe
            width="560"
            height="315"
            id="video-frame"
            src="https://www.youtube.com/embed/DSV3pryuKv0?si=Qkh2L0CRID6r0U4g"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </>
  );
};
