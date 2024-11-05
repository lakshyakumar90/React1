import React from "react";
import { DotButton, useDotButton } from "../Buttons/EmblaCarouselDotButton";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../Buttons/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { BiSolidOffer } from "react-icons/bi";

const OfferCarousel = (props) => {
  const { info, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const { selectedIndex, scrollSnaps, onDotButtonClick } =
    useDotButton(emblaApi);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls">
        <h2>Deals for you</h2>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {info.map((offer) => (
            <div className="embla__slide" key={offer.info.offerIds[0]}>
              <div className="embla__slide__number">
                <div>
                  <BiSolidOffer className="offer-icon" />
                </div>
                <div>
                  <h1>{offer.info.header}</h1>
                  <p>{offer.info.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfferCarousel;
