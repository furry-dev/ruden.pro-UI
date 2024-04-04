import CategoryLink from '@/components/Presentation/Links/Category/CategoryLink';

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