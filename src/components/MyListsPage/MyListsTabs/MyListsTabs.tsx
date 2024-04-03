import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import CategoryLink from '@/components/Presentation/CategoryLink';

export default function MyListsTabs() {
    return (
        <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-evenly'}}>
            <CategoryLink href={''} >Читаю</CategoryLink>
            <CategoryLink href={''} >Прочитано</CategoryLink>
            <CategoryLink href={''} >Брошено</CategoryLink>
            <CategoryLink href={''} >Избранное</CategoryLink>
        </div>
    )
}