import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

export default function SearchHeader() {
    return (
        <form>
            <div>
                <input type="text" />
                <FontAwesomeIcon icon={faMagnifyingGlass} />
            </div>
            <div>
                <button>Сортировка</button>
                <button>Фильтры</button>
            </div>
        </form>
    )
}