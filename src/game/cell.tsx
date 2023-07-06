import './cell.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCat, faFish, faHome } from '@fortawesome/free-solid-svg-icons';

export enum ECellContent {
  home = 'Home',
  food = 'Food',
  entity = 'Entity',
  empty = 'Empty',
}

export enum ECellBackground {
  grass = 'Grass',
  snow = 'Snow',
  sea = 'Sea',
  empty = 'Empty',
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

  const printContent = (): JSX.Element => {
    if (content === ECellContent.food)
      return <FontAwesomeIcon icon={faFish} style={{ position: 'absolute' }} />;
    if (content === ECellContent.home)
      return <FontAwesomeIcon icon={faHome} style={{ position: 'absolute' }} />;
    if (content === ECellContent.entity)
      return <FontAwesomeIcon icon={faCat} style={{ position: 'absolute' }} />;

    return <></>;
  };

  return (
    <div className="cell" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="cell-label">
        <div>Id: {id}</div>
        <div>background: {background}</div>
        <div>content: {content}</div>
      </div>

      {printContent()}

      <span className="cell-id">{id}</span>
    </div>
  );
};

export default Cell;
