import React, { useRef, useState } from "react";
import Form from "./components/Form";
import Header from "./components/Header";
import Info from "./components/Info";

const App = () => {
  const qrcodeElement = useRef(null);
  const [downloadUrl, setDownloadUrl] = useState("");

  const generateQR = (url, size, color) => {
    qrcodeElement.current.innerHTML = "";
    if (window.QRCode) {
      const qrcode = new window.QRCode(qrcodeElement.current, {
        text: url,
        width: size,
        height: size,
        colorDark: color,
        colorLight: "#ffffff",
        correctLevel: window.QRCode.CorrectLevel.H,
      });
      setTimeout(() => {
        setDownloadUrl(qrcode._el.lastElementChild.currentSrc);
      }, 50);
    }
  };

  return (
    <div>
      <Header />
      <main>
        <div className="flex flex-col-reverse justify-center align-center p-10 m-auto md:flex-row md:max-w-4xl">
          <div className="w-full md:w-2/3 mr-24">
            <Info />
            <Form generateQR={generateQR} />
          </div>
          <div className="w-full md:w-1/3 self-center">
            <img
              className="w-1/2 m-auto mb-10 md:w-full"
              src="img/qr-code.svg"
              alt="qr code sample"
            />
          </div>
        </div>
        <div className="max-w-5xl m-auto flex flex-col text-center align-center justify-center mt-200">
          <div className="m-auto" ref={qrcodeElement}></div>
          {downloadUrl && (
            <a
              href={downloadUrl}
              className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 rounded w-1/3 m-auto my-5"
              download="qrcode"
            >
              Save Image
            </a>
          )}
        </div>
      </main>
    </div>
  );
};

export default App;
