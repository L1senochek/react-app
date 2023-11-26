import IAnimeResData from '@/model/api/IAnimeResData';
import { useAppDispatch } from '@/store/hooks';
import { setArrResCard } from '@/store/slices/arrResCardSlice';
import Image from 'next/image';
import { FC, useEffect } from 'react';

const CardDescription: FC<{ arrResCard: IAnimeResData }> = ({
  arrResCard,
}): JSX.Element => {
  const dispatch = useAppDispatch();

  const createStructureRender = (
    propsTitle: string,
    propsValue: string | number | undefined
  ): string | number | JSX.Element | undefined => {
    return (
      propsValue && (
        <h3 className={`card-info__description ${propsTitle.toLowerCase()}`}>
          <span className="card-info__description_title">{propsTitle}: </span>
          <span className="card-info__description_value">{propsValue}</span>
        </h3>
      )
    );
  };

  useEffect(() => {
    dispatch(setArrResCard(arrResCard));
  }, [arrResCard, dispatch]);

  return (
    <div className="card-info__wrapper">
      <h1 className="card-info__title">{arrResCard.data.title}</h1>
      <span className="card-info__img">
        <Image
          className="card-info__img_src"
          src={`${arrResCard.data.images.jpg.large_image_url}`}
          alt={arrResCard.data.title}
          width={441}
          height={630}
          priority
        />
      </span>
      {createStructureRender('Score', arrResCard.data.score)}
      {createStructureRender('Status', arrResCard.data.status)}
      {createStructureRender('Type', arrResCard.data.type)}
      {createStructureRender('Episodes', arrResCard.data.episodes)}
      {createStructureRender('Duration', arrResCard.data.duration)}
      {createStructureRender('Synopsis', arrResCard.data.synopsis)}
    </div>
  );
};

export default CardDescription;
