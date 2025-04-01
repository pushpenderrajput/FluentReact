import * as React from "react";
import {
  Image,
  makeStyles,
  tokens,
  typographyStyles,
  Button,
  Carousel,
  CarouselCard,
  CarouselNav,
  CarouselNavButton,
  CarouselNavContainer,
  CarouselViewport,
  CarouselSlider,
} from "@fluentui/react-components";

import CarouselConfig from "../../Components/Pages/Carousel.json"
const useClasses = makeStyles({
  bannerCard: {
    alignContent: "center",
    borderRadius: tokens.borderRadiusLarge,
    height: "450px",
    textAlign: "left",
    position: "relative",
  },
  cardContainer: {
    display: "flex",
    flexDirection: "column",
    gap: "8px",
    position: "absolute",
    left: "10%",
    top: "25%",
    background: tokens.colorNeutralBackground1,
    padding: "18px",
    maxWidth: "270px",
    width: "50%",
  },
  title: {
    ...typographyStyles.title1,
  },
  description: {
    ...typographyStyles.body1,
  },
});

interface BannerCardProps {
  imageSrc: string;
  altText: string;
  
}

const BannerCard: React.FC<BannerCardProps> = ({
  imageSrc,
  altText,
  
}) => {
  const classes = useClasses();

  return (
    <CarouselCard className={classes.bannerCard}>
      <Image
        style={{ borderRadius: "8px" }}
        fit="cover"
        src={imageSrc}
        alt={altText}
        role="presentation"
      />
      {/* {(title || description || cta) && (
        <div className={classes.cardContainer}>
          {title && <div className={classes.title}>{title}</div>}
          {description && (
            <div className={classes.description}>{description}</div>
          )}
          {cta && (
            <Button as="a" href={cta.link} appearance="primary">
              {cta.label}
            </Button>
          )}
        </div>
      )} */}
    </CarouselCard>
  );
};

const Product = () => {
  const { carousel } = CarouselConfig;
  const { groupSize, circular, autoplay, autoplayDelay, slides } = carousel;

  const [currentIndex, setCurrentIndex] = React.useState(0);

  React.useEffect(() => {
    if (autoplay) {
      const interval = setInterval(() => {
        setCurrentIndex((prevIndex) =>
          circular
            ? (prevIndex + 1) % slides.length
            : Math.min(prevIndex + 1, slides.length - 1)
        );
      }, autoplayDelay);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayDelay, circular, slides.length]);

  const getAnnouncement = (index: number, totalSlides: number) => {
    return `Carousel slide ${index + 1} of ${totalSlides}`;
  };

  return (
    <Carousel
      groupSize={groupSize}
      circular={circular}
      announcement={getAnnouncement}
    >
      <CarouselViewport>
        <CarouselSlider>
          {slides.map((slide, index) => (
            <BannerCard
              key={`image-${index}`}
              imageSrc={slide.imageSrc}
              altText={slide.altText}
             
            />
          ))}
        </CarouselSlider>
      </CarouselViewport>
      <CarouselNavContainer
        layout="inline"
        autoplayTooltip={{ content: "Autoplay", relationship: "label" }}
        nextTooltip={{ content: "Go to next", relationship: "label" }}
        prevTooltip={{ content: "Go to prev", relationship: "label" }}
      >
        <CarouselNav>
          {(index) => (
            <CarouselNavButton aria-label={`Carousel Nav Button ${index}`} />
          )}
        </CarouselNav>
      </CarouselNavContainer>
    </Carousel>
  );
};

export default Product;