import React, { useState, ReactElement, FC, useEffect } from 'react';
import classNames from 'classnames';
import './styles.css';

type FlipCardProps = {
  renderFrontCard: (toggle: () => void) => ReactElement;
  renderBackCard: (toggle: () => void) => ReactElement;
};

const FlipCard: FC<FlipCardProps> = ({ renderFrontCard, renderBackCard }) => {
  const [isFlipped, setFlipped] = useState(true);

  const toggleFlip = () => setFlipped((prev) => !prev);
  return (
    <div className="FlipCard_scene">
      <div
        className={classNames(
          'FlipCard_card',
          isFlipped && 'FlipCard_card_is_flipped'
        )}
      >
        <div className="FlipCard_card__face FlipCard_card__face--front">
          {!isFlipped && renderFrontCard(toggleFlip)}
        </div>
        <div className="FlipCard_card__face FlipCard_card__face--back">
          {isFlipped && renderBackCard(toggleFlip)}
        </div>
      </div>
    </div>
  );
};

FlipCard.displayName = 'FlipCard';
export default FlipCard;
