import React, {FC, useState} from 'react';
import NxWelcome from '../nx-welcome';
import OutlinedCard from '../components/outline-card';
import HookForm from '../components/hook-form';
import { useLocation, useParams } from 'react-router-dom';

export type ListItem = {
    id: string
    name: string
    model: string
    brand: string
    yearOfRelease: number
    color: string
  }

const Details:FC = () => {
    const location = useLocation();
    const params = useParams()
    const type = location.pathname.split("/")[1];
    const head = type.charAt(0).toUpperCase() + type.slice(1, type.length-1);
    const [item, setItem] = useState<ListItem>({
      id: 'a7b9e435-9065-4ac0-b084-ebdc302d824d',
      name: 'Mini',
      model: 'Camry',
      yearOfRelease: 2023,
      brand: 'Toyota',
      color: 'Grey'
    })
    console.log("item :: ", item);
    return <React.Fragment>
      <NxWelcome title={params.id === 'new' ? `New ${head}` : `${item.brand} ${item.name}  Details`} />
      <OutlinedCard item={item} />
    </React.Fragment>
}

export default Details;