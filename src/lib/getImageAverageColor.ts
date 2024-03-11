'use client'

export async function getImageAverageColor(imageUrl) {
    //TODO: Before doing anything, check if the image avg is already in the cache localStorage

    return new Promise((resolve, reject) => {
        // Create an image object
        const imageElement = document.createElement('img');
        imageElement.crossOrigin = "Anonymous"; // Allow the image to be loaded from a different domain
        imageElement.src = imageUrl;

        imageElement.onload = () => {
            // Create a canvas element and obtain its 2D context
            const canvas = document.createElement('canvas');
            const context = canvas.getContext('2d');

            // Stablish the canvas dimensions
            canvas.width = imageElement.width;
            canvas.height = imageElement.height;

            // Draw the image on the canvas
            context.drawImage(imageElement, 0, 0);

            // Obtaining the image data
            const imageData = context.getImageData(0, 0, canvas.width, canvas.height).data;

            // Calculate the average color of the image
            let sumRed = 0;
            let sumGreen = 0;
            let sumBlue = 0;

            for (let i = 0; i < imageData.length; i += 4) {
                sumRed += imageData[i];
                sumGreen += imageData[i + 1];
                sumBlue += imageData[i + 2];
            }

            const totalPixels = imageData.length / 4;
            const averageColor = [
                Math.round(sumRed / totalPixels),
                Math.round(sumGreen / totalPixels),
                Math.round(sumBlue / totalPixels)
            ];

            resolve(averageColor);
        };
        imageElement.onerror = (error) => {
            reject(error);
            console.log('Error loading imageaaa:', imageUrl);
        };
    });
}

export default getImageAverageColor;
