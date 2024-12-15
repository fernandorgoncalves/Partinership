import React, { useState, useEffect } from "react"; // Corrigido: Incluído useEffect
import image1 from "../../assets/image1.svg";
import image2 from "../../assets/image2.svg";
import image3 from "../../assets/image3.svg";

const ImageCarousel = () => {
  const images = [image1, image2, image3];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 5000); // Troca a imagem a cada 3 segundos

    return () => clearInterval(interval); // Limpa o intervalo ao desmontar o componente
  }, [images.length]);

  return (
    <div style={styles.carouselContainer}>
      <div style={styles.imageContainer}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          style={styles.image}
        />
      </div>
    </div>
  );
};

const styles = {
  carouselContainer: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    margin: "auto",
    overflow: "hidden",
    position: "relative",
  },
  imageContainer: {
    width: "100%",
    height: "300px",
  },
  image: {
    width: "100%",
    height: "100%",
    objectFit: "cover",
    transition: "opacity 0.9s ease-in-out",
  },
};

export default ImageCarousel;
