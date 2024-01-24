"use client"
import React, { useState, useEffect } from 'react';

interface CropPrice {
    crop: string;
    location: string;
    price: number;
}

const PriceCalculator: React.FC = () => {
    const [selectedCrop, setSelectedCrop] = useState<string>('');
    const [selectedLocation, setSelectedLocation] = useState<string>('');
    const [cropPrice, setCropPrice] = useState<number | null>(null);

    // Mock data for crop prices
    const mockCropPrices: CropPrice[] = [
        { crop: 'Rice', location: 'West Bengal', price: 5000 },
        { crop: 'Wheat', location: 'Punjab', price: 4500 },
        // Add more mock data as needed
    ];

    useEffect(() => {
        // Fetch crop price when both crop and location are selected
        if (selectedCrop && selectedLocation) {
            const selectedPrice = mockCropPrices.find(
                (price) => price.crop === selectedCrop && price.location === selectedLocation
            );

            setCropPrice(selectedPrice ? selectedPrice.price : null);
        } else {
            setCropPrice(null);
        }
    }, [selectedCrop, selectedLocation]);

    const handleCropChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedCrop(e.target.value);
    };

    const handleLocationChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setSelectedLocation(e.target.value);
    };

    return (
        <div className="p-8">
            <div className="max-w-md">
                <h1 className="text-3xl font-bold mb-4">Crop Price Calculator</h1>
                <div className="space-y-4">
                    <label className="block text-sm font-medium text-gray-700">Select Crop:</label>
                    <select
                        value={selectedCrop}
                        onChange={handleCropChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        {/* Populate dropdown with crop options */}
                        {Array.from(new Set(mockCropPrices.map((price) => price.crop))).map((crop) => (
                            <option key={crop} value={crop}>
                                {crop}
                            </option>
                        ))}
                    </select>

                    <label className="block text-sm font-medium text-gray-700">Select Location:</label>
                    <select
                        value={selectedLocation}
                        onChange={handleLocationChange}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        {/* Populate dropdown with location options */}
                        {Array.from(new Set(mockCropPrices.map((price) => price.location))).map((location) => (
                            <option key={location} value={location}>
                                {location}
                            </option>
                        ))}
                    </select>

                    {cropPrice !== null && (
                        <p className="mt-4 text-lg">
                            Price for {selectedCrop} in {selectedLocation}: <span className="font-bold">{cropPrice}</span>
                        </p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PriceCalculator;
