import React from 'react';
import './card.scss';
import IAnimeData from '@/model/api/IAnimeData';
import {
  API_PAGE,
  API_LIMIT,
  API_SEARCH_PARAM,
  API_ID,
} from '@/utils/constants/constants';
import IconfigStore from '@/model/store/IconfigStore';
import { useSelector } from 'react-redux';
import { useSearchParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';

const Card: React.FC<IAnimeData> = (props): JSX.Element => {
  const searchParams = useSearchParams();
  const pageNum = searchParams.get('page');
  const limitNum = searchParams.get('limit');
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
      href={`/?${API_PAGE}${pageNum}&${API_LIMIT}${limitNum}${
        searchValue ? `&${API_SEARCH_PARAM}${searchValue}` : ''
      }/${API_ID}${props.mal_id}`}
      className="card"
    >
      <h3 className="card__name">{props.title}</h3>
      <span className="card__img">
        <Image
          src={props.images.jpg.image_url}
          alt={props.title}
          width={225}
          height={320}
          loader={({ src, width, quality }) =>
            `${src}?w=${width}&q=${quality || 75}`
          }
        />
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
