import DirectionsCarIcon from '@mui/icons-material/DirectionsCar';
import FireTruckIcon from '@mui/icons-material/FireTruck';
import List from '../views/list';

export type Route = {
    id: React.Key
    name?: String
    icon?: any
    label?: String
    component?: React.FC
}    

export const routes: Route[] = [
    {
        id: '04dea3bb-e82b-47a0-82f8-38b3445848bd',
        name: 'cars',
        icon: DirectionsCarIcon,
        label: 'Cars',
        component: List
    },
    {
        id: '6cb2aa9f-fad6-4bcf-938f-a6f5aa3e0df8',
        name: 'trucks',
        icon: FireTruckIcon,
        label: 'Trucks',
        component: List
    }
]