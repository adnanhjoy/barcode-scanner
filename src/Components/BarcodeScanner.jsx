import { useEffect, useRef, useState } from "react";
import { Html5QrcodeScanner } from "html5-qrcode";
import BarcodeScannerResult from "./BarcodeScannerResult";

const BarcodeScanner = () => {
    const scannerRef = useRef(null);
    const [scanValue, setScanvalue] = useState('');
    const [isOpen, setIsOpen] = useState(true);

    useEffect(() => {
        const scanner = new Html5QrcodeScanner("reader", { fps: 10, qrbox: 250 });
        scanner.render(
            (decodedText) => {
                setScanvalue(decodedText)
                setIsOpen(true)
            },
            (error) => {
                console.error("Error scanning:", error);
            }
        );

        return () => scanner.clear();
    }, []);




    return (
        <div className="flex items-center justify-center h-[90vh]">
            {
                scanValue &&
                <BarcodeScannerResult
                    isOpen={isOpen}
                    setIsOpen={setIsOpen}
                    scanValue={scanValue}
                    setScanvalue={setScanvalue}
                />
            }
            

            <div id="reader" ref={scannerRef}></div>
        </div>
    );
};

export default BarcodeScanner;
