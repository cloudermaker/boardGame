import './cell.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faFish, faHome } from '@fortawesome/free-solid-svg-icons';

export enum ECellContent {
  home,
  food,
  entity,
  empty,
}

export enum ECellBackground {
  grass,
  snow,
  empty,
  sea,
}

export type TCell = {
  content: ECellContent;
  background: ECellBackground;
};

const Cell = ({
  id,
  background,
  content,
}: {
  id: string;
  background: ECellBackground;
  content?: ECellContent;
}): JSX.Element => {
  const getBackgroundColor = (): string => {
    if (background === ECellBackground.grass) return '#c8f4d5';
    if (background === ECellBackground.sea) return '#bdf7ff';
    if (background === ECellBackground.snow) return '#e8e7d7';

    return 'white';
  };

  return (
    <div className="cell" style={{ backgroundColor: getBackgroundColor() }}>
      {content === ECellContent.food && <FontAwesomeIcon icon={faFish} />}
      {content === ECellContent.home && <FontAwesomeIcon icon={faHome} />}
      {content === ECellContent.entity && <FontAwesomeIcon icon={faCat} />}

      <span className="cell-id">{id}</span>
    </div>
  );
};

export default Cell;
