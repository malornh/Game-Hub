import React from 'react';

interface Props {
    images: string[];
}

const PreloadImages = ({ images }: Props) => {
    return (
        <div style={{ display: 'none' }}>
            {images.map((img, index) => (
                <img key={index} src={img} alt={`Preload ${index}`} />
            ))}
        </div>
    );
};

export default PreloadImages;
