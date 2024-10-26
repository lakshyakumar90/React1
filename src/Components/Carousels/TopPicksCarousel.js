import React from "react";
import {
  PrevButton,
  NextButton,
  usePrevNextButtons,
} from "../Buttons/EmblaCarouselArrowButtons";
import useEmblaCarousel from "embla-carousel-react";
import { CDN_URL } from "../../utils/constants";
import { MdCurrencyRupee } from "react-icons/md";
import AddButton from "../Buttons/AddButton";

const TopPicksCarousel = (props) => {
  const { info, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick,
  } = usePrevNextButtons(emblaApi);

  return (
    <section className="embla">
      <div className="embla__controls">
        <h2 style={{marginBottom: "1rem"}}>{info.title}</h2>
        <div className="embla__buttons">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>

      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {info.carousel.map((picks) => {
            const pricingModel =
              picks.dish?.info?.variantsV2?.pricingModels?.[0];
            return (
              <div className="embla__slide picks__slide" key={picks.creativeId}>
                <div className="picks__slide__number">
                  <div>
                    <img
                      src={`${CDN_URL}${picks.creativeId}`}
                      alt={picks.dish?.info?.name}
                    />
                    <div className="picks-slide-add">
                      <h2 className="picks-slide-price">
                        <MdCurrencyRupee className="rupee-symbol" />
                        {pricingModel
                          ? pricingModel.price / 100
                          : picks.dish?.info?.price / 100 || "N/A"}
                      </h2>
                      <AddButton />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default TopPicksCarousel;
