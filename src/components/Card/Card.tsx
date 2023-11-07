import React, { useContext } from 'react';
import './card.scss';
import IAnimeData from '../../model/api/IAnimeData';
import { Link, useParams } from 'react-router-dom';
import { MainPageContext } from '../../context/MainPageContext/MainPageContext';
import {
  PIECE_PATH_CARDID,
  PIECE_PATH_LIMIT,
  PIECE_PATH_PAGE,
  PIECE_PATH_QUERY,
} from '../../utils/constants/constants';

const Card: React.FC<IAnimeData> = (props): JSX.Element => {
  const { pageNum, limitNum } = useParams();
  const context = useContext(MainPageContext);

  const createStructureRender = (
    propsTitle: string,
    propsValue: string | number | undefined
  ): string | number | JSX.Element | undefined => {
    return (
      propsValue && (
        <h4 className={`card__description ${propsTitle.toLowerCase()}`}>
          <span className="card__description_title">{propsTitle}: </span>
          <span className="card__description_value">{propsValue}</span>
        </h4>
      )
    );
  };

  return (
    <Link
      to={`/${PIECE_PATH_PAGE}${pageNum}/${PIECE_PATH_LIMIT}${limitNum}${
        context?.searchValue
          ? `/${PIECE_PATH_QUERY}${context?.searchValue}`
          : ''
      }/${PIECE_PATH_CARDID}${props.mal_id}`}
      className="card"
    >
      <h3 className="card__name">{props.title}</h3>
      <span className="card__img">
        <img src={`${props.images.jpg.image_url}`} />
      </span>
      {createStructureRender('Score', props.score)}
      {createStructureRender('Status', props.status)}
      {createStructureRender('Type', props.type)}
      {createStructureRender('Episodes', props.episodes)}
      {createStructureRender('Duration', props.duration)}
    </Link>
  );
};

export default Card;
