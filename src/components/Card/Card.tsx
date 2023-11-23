import React from 'react';
import './card.scss';
import IAnimeData from '../../model/api/IAnimeData';
import { Link, useParams } from 'react-router-dom';
import {
  PAGE_PATH_PART,
  LIMIT_PATH_PART,
  QUERY_PATH_PART,
  CARDID_PATH_PART,
} from '../../utils/constants/constants';
import IconfigStore from '../../model/store/IconfigStore';
import { useSelector } from 'react-redux';

const Card: React.FC<IAnimeData> = (props): JSX.Element => {
  const { pageNum, limitNum } = useParams();
  const searchValue = useSelector(
    (state: IconfigStore) => state.searchValue.searchValue
  );

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
      to={`/${PAGE_PATH_PART}${pageNum}/${LIMIT_PATH_PART}${limitNum}${
        searchValue ? `/${QUERY_PATH_PART}${searchValue}` : ''
      }/${CARDID_PATH_PART}${props.mal_id}`}
      className="card"
    >
      <h3 className="card__name">{props.title}</h3>
      <span className="card__img">
        <img src={`${props.images.jpg.image_url}`} alt={props.title} />
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
