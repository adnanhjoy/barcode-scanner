import React from 'react';
import { barcodes } from '../data/data';

const BarcodeScannerResult = ({ isOpen, setIsOpen, scanValue, setScanvalue }) => {
    const closeModal = () => {
        setIsOpen(false);
        setScanvalue('');
    };

    const matchingBarcode = barcodes.find(({ prefix }) => scanValue?.startsWith(prefix));

    return (
        <div>
            {isOpen && (
                <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
                    <div
                        className="bg-white rounded-lg shadow-lg w-11/12 max-w-md p-6 animate-fade-in-up"
                        style={{ animation: 'fade-in-up 0.5s ease-out' }}
                    >
                        {matchingBarcode ? (
                            <div className="text-center space-y-2 mb-16">
                                <p className="font-medium">{scanValue}</p>
                                <p className="text-lg">{matchingBarcode.country}</p>
                                <p className="capitalize font-medium text-xl">{matchingBarcode.description}</p>
                            </div>
                        ) : (
                            <div className="text-center space-y-2 mb-16">
                                <p className="font-medium">{scanValue}</p>
                                <p className="capitalize font-medium text-xl">Product Not Found</p>
                            </div>
                        )}

                        <button
                            onClick={closeModal}
                            className="w-full py-2 text-white bg-red-500 rounded-lg hover:bg-red-600 focus:outline-none focus:ring focus:ring-red-300"
                        >
                            Close
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BarcodeScannerResult;
