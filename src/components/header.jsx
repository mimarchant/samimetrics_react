export const Header = () => {
  return (
    <header>
      <div className="container flex px-2 lg:px-32 py-4 items-center justify-between">
        <img src="logo-sami-degrad.webp" alt="" />
        <div className="flex flex-col md:flex-row items-center gap-x-2 gap-y-1">
          <div className="text-xs text-gray-400 cursor-pointer">
            IDIOMA / LANGUAGE
          </div>
          <div className="flex gap-2">
            <button title="ENGLISH" className="text-gray-400">
              EN
            </button>
            <button title="ESPAÑOL" className="text-gray-400">
              ES
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
