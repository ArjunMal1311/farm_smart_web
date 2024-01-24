"use client"
import React, { useState } from 'react';
const data = [
    {
        crop: 'Rice',
        suitableSoil: ['Clayey', 'Loamy'],
        suitableWeather: ['Warm and Wet'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Organic and Nitrogen-based',
        budget: 'High',
        machinery: ['Tractor', 'Harvester'],
        location: ['West Bengal', 'Andhra Pradesh', 'Odisha'],
    },
    {
        crop: 'Wheat',
        suitableSoil: ['Silt', 'Loamy'],
        suitableWeather: ['Cool and Dry'],
        landSizeRequirement: 'Large',
        fertilizersUsed: 'Phosphorus-based',
        budget: 'Medium',
        machinery: ['Tractor', 'Seeder'],
        location: ['Punjab', 'Haryana', 'Uttar Pradesh'],
    },
    {
        crop: 'Cotton',
        suitableSoil: ['Sandy'],
        suitableWeather: ['Hot and Dry'],
        landSizeRequirement: 'Large',
        fertilizersUsed: 'Potassium-based',
        budget: 'High',
        machinery: ['Cotton Harvester'],
        location: ['Gujarat', 'Maharashtra', 'Telangana'],
    },
    {
        crop: 'Maize',
        suitableSoil: ['Sandy Loam', 'Sil clay loam'],
        suitableWeather: ['Warm'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Nitrogen-based',
        budget: 'Medium',
        machinery: ['Seeder', 'Plough'],
        location: ['Madhya Pradesh', 'Karnataka', 'Rajasthan'],
    },
    {
        crop: 'Sugarcane',
        suitableSoil: ['Clayey', 'Loamy'],
        suitableWeather: ['Warm and Humid'],
        landSizeRequirement: 'Large',
        fertilizersUsed: 'Potassium-based',
        budget: 'High',
        machinery: ['Harvester', 'Planter'],
        location: ['Uttar Pradesh', 'Maharashtra', 'Karnataka'],
    },
    {
        crop: 'Soybean',
        suitableSoil: ['Sandy Loam', 'Clayey Loam'],
        suitableWeather: ['Warm and Dry'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Nitrogen-based',
        budget: 'Medium',
        machinery: ['Combine Harvester', 'Seeder'],
        location: ['Madhya Pradesh', 'Maharashtra', 'Rajasthan'],
    },
    {
        crop: 'Tea',
        suitableSoil: ['Well-drained Loamy'],
        suitableWeather: ['Cool and Humid'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Organic and Nitrogen-based',
        budget: 'High',
        machinery: ['Pruner', 'Plucker'],
        location: ['Assam', 'West Bengal', 'Kerala'],
    },
    {
        crop: 'Coffee',
        suitableSoil: ['Well-drained Loamy'],
        suitableWeather: ['Cool and Moist'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Organic and Phosphorus-based',
        budget: 'High',
        machinery: ['Harvester', 'Pruner'],
        location: ['Karnataka', 'Kerala', 'Tamil Nadu'],
    },
    {
        crop: 'Mustard',
        suitableSoil: ['Loamy'],
        suitableWeather: ['Cool and Dry'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Nitrogen and Phosphorus-based',
        budget: 'Medium',
        machinery: ['Seed Drill', 'Combine Harvester'],
        location: ['Rajasthan', 'Haryana', 'Uttar Pradesh'],
    },
    {
        crop: 'Potato',
        suitableSoil: ['Sandy Loam', 'Clayey Loam'],
        suitableWeather: ['Cool and Mild'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Potassium-based',
        budget: 'Medium',
        machinery: ['Planter', 'Harvester'],
        location: ['Uttar Pradesh', 'West Bengal', 'Punjab'],
    },
    {
        crop: 'Banana',
        suitableSoil: ['Loamy', 'Sandy Loam'],
        suitableWeather: ['Warm and Humid'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Potassium-based',
        budget: 'High',
        machinery: ['Harvester'],
        location: ['Maharashtra', 'Gujarat', 'Tamil Nadu'],
    },
    {
        crop: 'Chickpea',
        suitableSoil: ['Sandy Loam', 'Clayey Loam'],
        suitableWeather: ['Cool and Dry'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Nitrogen-based',
        budget: 'Medium',
        machinery: ['Seed Drill', 'Combine Harvester'],
        location: ['Madhya Pradesh', 'Rajasthan', 'Uttar Pradesh'],
    },
    {
        crop: 'Pineapple',
        suitableSoil: ['Sandy Loam', 'Loamy'],
        suitableWeather: ['Warm and Humid'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Organic and Potassium-based',
        budget: 'High',
        machinery: ['Harvester'],
        location: ['Kerala', 'West Bengal', 'Assam'],
    },
    {
        crop: 'Tomato',
        suitableSoil: ['Sandy Loam', 'Loamy'],
        suitableWeather: ['Warm and Mild'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Potassium-based',
        budget: 'Medium',
        machinery: ['Transplanter', 'Harvester'],
        location: ['Maharashtra', 'Karnataka', 'Andhra Pradesh'],
    },
    {
        crop: 'Onion',
        suitableSoil: ['Sandy Loam', 'Loamy'],
        suitableWeather: ['Cool and Mild'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Nitrogen-based',
        budget: 'Medium',
        machinery: ['Seeder', 'Harvester'],
        location: ['Maharashtra', 'Karnataka', 'Gujarat'],
    },
];

interface SelectedFactors {
    suitableSoil: string[];
    suitableWeather: string[];
    landSizeRequirement: string;
    fertilizersUsed: string;
    budget: string;
    machinery: string[];
    location: string[];
}

interface CropSelectorProps {
    onCropSelect: (crop: string) => void;
}

const CropSelector: React.FC<CropSelectorProps> = ({ onCropSelect }) => {
    const [selectedFactors, setSelectedFactors] = useState<SelectedFactors>({
        suitableSoil: ['Clayey', 'Loamy'],
        suitableWeather: ['Warm and Wet'],
        landSizeRequirement: 'Medium',
        fertilizersUsed: 'Organic and Nitrogen-based',
        budget: 'High',
        machinery: ['Tractor', 'Harvester'],
        location: ['West Bengal', 'Andhra Pradesh', 'Odisha'],
    });

    const handleInputChange = (factor: keyof SelectedFactors, value: string | string[]) => {
        setSelectedFactors((prevFactors) => ({
            ...prevFactors,
            [factor]: value,
        }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        const selectedCrop = determineSelectedCrop(selectedFactors);
        onCropSelect(selectedCrop);
    };

    const determineSelectedCrop = (factors: SelectedFactors): string => {
        const randomIndex = Math.floor(Math.random() * data.length);
        return data[randomIndex].crop;
    };

    return (
        <div className="p-6 border rounded-md shadow-md">
            <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Suitable Soil:</label>
                    <select
                        value={selectedFactors.suitableSoil.join(',')}
                        onChange={(e) => handleInputChange('suitableSoil', e.target.value.split(','))}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        <option value="Clayey,Loamy">Clayey, Loamy</option>
                        <option value="Silt">Silt</option>
                        <option value="Sandy">Sandy</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Suitable Weather:</label>
                    <select
                        value={selectedFactors.suitableWeather.join(',')}
                        onChange={(e) => handleInputChange('suitableWeather', e.target.value.split(','))}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        <option value="Warm and Wet">Warm and Wet</option>
                        <option value="Cool and Dry">Cool and Dry</option>
                        <option value="Hot and Dry">Hot and Dry</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Land Size Requirement:</label>
                    <select
                        value={selectedFactors.landSizeRequirement}
                        onChange={(e) => handleInputChange('landSizeRequirement', e.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        <option value="Small">Small</option>
                        <option value="Medium">Medium</option>
                        <option value="Large">Large</option>
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Fertilizers Used:</label>
                    <select
                        value={selectedFactors.fertilizersUsed}
                        onChange={(e) => handleInputChange('fertilizersUsed', e.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        {Array.from(new Set(data.map((crop) => crop.fertilizersUsed))).map((fertilizer) => (
                            <option key={fertilizer} value={fertilizer}>
                                {fertilizer}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Budget:</label>
                    <select
                        value={selectedFactors.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        {Array.from(new Set(data.map((crop) => crop.budget))).map((budget) => (
                            <option key={budget} value={budget}>
                                {budget}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Machinery:</label>
                    <select
                        value={selectedFactors.machinery.join(',')}
                        onChange={(e) => handleInputChange('machinery', e.target.value.split(','))}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        {Array.from(new Set(data.flatMap((crop) => crop.machinery))).map((machine) => (
                            <option key={machine} value={machine}>
                                {machine}
                            </option>
                        ))}
                    </select>
                </div>

                <div>
                    <label className="block text-sm font-medium text-gray-700">Select Location:</label>
                    <select
                        value={selectedFactors.location.join(',')}
                        onChange={(e) => handleInputChange('location', e.target.value.split(','))}
                        className="mt-1 p-2 border rounded-md w-full"
                    >
                        <option value="">Select...</option>
                        {Array.from(new Set(data.flatMap((crop) => crop.location))).map((loc) => (
                            <option key={loc} value={loc}>
                                {loc}
                            </option>
                        ))}
                    </select>
                </div>


                <button
                    type="submit"
                    className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
                >
                    Predict Crop
                </button>
            </form>
        </div>
    );
};

const Page: React.FC = () => {
    const [selectedCrop, setSelectedCrop] = useState<string | null>(null);

    const handleCropSelection = (crop: string) => {
        setSelectedCrop(crop);
    };

    return (
        <div className={`lg:mx-16 mx-4 my-8`}>
            <h2 className='flex justify-between sm:flex-row sm:items-center flex-col'>
                <div className='bg-clip-text text-transparent bg-gradient-to-r from-[#5A32A3] to-[#D03592] relative sm:text-[40px] text-[30px] font-bold'>Enter Details</div>
            </h2>

            <div className='my-8'>
                <CropSelector onCropSelect={handleCropSelection} />
            </div>
            {selectedCrop && (
                <p className="mt-4 text-lg">
                    Predicted Crop: <span className="font-bold">{selectedCrop}</span>
                </p>
            )}
        </div>
    );
};

export default Page;
