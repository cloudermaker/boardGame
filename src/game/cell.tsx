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
  contentList: ECellContent[];
  background: ECellBackground;
};

const Cell = ({ id, cell }: { id: string; cell: TCell }): JSX.Element => {
  const getBackgroundColor = (): string => {
    if (cell.background === ECellBackground.grass) return '#c8f4d5';
    if (cell.background === ECellBackground.sea) return '#bdf7ff';
    if (cell.background === ECellBackground.snow) return '#e8e7d7';

    return 'white';
  };

  const printContent = (): JSX.Element => {
    if (cell.contentList.includes(ECellContent.home))
      return <FontAwesomeIcon icon={faHome} style={{ position: 'absolute' }} />;
    if (cell.contentList.includes(ECellContent.entity)) {
      const entityCount = cell.contentList.filter((content) => content === ECellContent.entity).length;
      return <FontAwesomeIcon icon={faCat} style={{ position: 'absolute' }} size={entityCount >= 2 ? '2x' : '1x'} />;
    }
    if (cell.contentList.includes(ECellContent.food))
      return <FontAwesomeIcon icon={faFish} style={{ position: 'absolute' }} />;

    return <></>;
  };

  return (
    <div className="cell" style={{ backgroundColor: getBackgroundColor() }}>
      <div className="cell-label">
        <div>Id: {id}</div>
        <div>Background: {cell.background}</div>
        <div>Content: {cell.contentList.join(',')}</div>
      </div>

      {printContent()}

      {printContent()}
      <span className="cell-id">{id}</span>
    </div>
  );
};

export default Cell;
